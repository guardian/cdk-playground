#!/usr/bin/env python3
# entrypoint.py — receive VXLAN packets and replay inner HTTP requests.
#
# Usage:
#   entrypoint.py <host> <port> [--vxlan-port <port>] [--header <Name: Value>]
#
# Arguments:
#   host            Destination host to forward HTTP requests to (required)
#   port            Destination TCP port to forward HTTP requests to (required)
#   --vxlan-port    UDP port to listen for VXLAN packets (default: 4789)
#   --header        HTTP header to inject into each request, e.g. "X-Foo: bar"

import argparse
import socket

VXLAN_HDR = 8
ETH_HDR   = 14
IP_HDR    = 20
TCP_HDR   = 20
SKIP      = VXLAN_HDR + ETH_HDR + IP_HDR + TCP_HDR

HTTP_METHODS = (b"GET ", b"POST ", b"PUT ", b"DELETE ",
                b"PATCH ", b"HEAD ", b"OPTIONS ")

def main():
    parser = argparse.ArgumentParser(
        description="Receive VXLAN-encapsulated HTTP traffic and replay it to a target host."
    )
    parser.add_argument("host", help="Destination host to forward HTTP requests to")
    parser.add_argument("port", type=int, help="Destination TCP port to forward HTTP requests to")
    parser.add_argument("--vxlan-port", type=int, default=4789,
                        help="UDP port to listen for VXLAN packets (default: 4789)")
    parser.add_argument("--header", metavar="Name: Value",
                        help="HTTP header to inject into each replayed request (e.g. 'X-Foo: bar')")
    args = parser.parse_args()

    inject_header: bytes | None = None
    if args.header:
        if ":" not in args.header:
            parser.error("--header must be in 'Name: Value' format")
        inject_header = (args.header.strip() + "\r\n").encode()

    print(f"VXLAN port  : {args.vxlan_port}")
    print(f"Forward HTTP to  : {args.host}:{args.port}")
    if inject_header:
        print(f"Inject header: {args.header}")
    print()

    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind(("0.0.0.0", args.vxlan_port))
    print(f"Listening on 0.0.0.0:{args.vxlan_port} ...", flush=True)

    while True:
        data, _ = sock.recvfrom(65535)
        if len(data) <= SKIP:
            continue
        payload = data[SKIP:]
        decodedPayload = payload.decode("utf-8", errors="replace").splitlines()[0]
        print(f"[+] Decoded Payload: {decodedPayload }", flush=True)
        if not payload.startswith(HTTP_METHODS):
            continue
        preview = payload[:80].decode("utf-8", errors="replace").splitlines()[0]
        print(f"[+] Replaying: {preview}", flush=True)
        if inject_header:
            # Insert the header after the HTTP request line (first \r\n)
            eol = payload.find(b"\r\n")
            if eol != -1:
                payload = payload[:eol + 2] + inject_header + payload[eol + 2:]
        try:
            fwd = socket.create_connection((args.host, args.port), timeout=5)
            fwd.sendall(payload)
            fwd.close()
        except Exception as e:
            print(f"[!] Forward error: {e}", flush=True)

if __name__ == "__main__":
    main()

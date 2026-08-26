import socket
import struct

def checksum(msg):
    if len(msg) % 2 != 0:
        msg += b'\x00'
    s = sum(struct.unpack('!' + 'H' * (len(msg) // 2), msg))
    s = (s >> 16) + (s & 0xffff)
    s += s >> 16
    return ~s & 0xffff

def send_valid_vxlan_http(target_host, target_vxlan_port=4789, vni=100):
    # 1. Application Layer: HTTP GET Request
    http_payload = b"GET /test-path HTTP/1.1\r\nHost: 10.0.0.2\r\nUser-Agent: VXLAN-Testing-Script\r\n\r\n"

    # 2. Inner Ethernet Header (14 bytes)
    # EtherType 0x0800 = IPv4
    eth_hdr = struct.pack('!6s6sH', b'\x00'*6, b'\x00'*6, 0x0800)

    # 3. Inner IPv4 Header (20 bytes)
    src_ip_bytes = socket.inet_aton("10.0.0.1")
    dst_ip_bytes = socket.inet_aton("10.0.0.2")
    ip_tot_len = 20 + 20 + len(http_payload)

    # Pack IP header without checksum
    ip_hdr_no_chk = struct.pack('!BBHHHBBH4s4s',
                                0x45, 0, ip_tot_len, 54321,
                                0x4000, 64, socket.IPPROTO_TCP, 0,
                                src_ip_bytes, dst_ip_bytes)
    ip_chk = checksum(ip_hdr_no_chk)
    ip_hdr = struct.pack('!BBHHHBBH4s4s',
                         0x45, 0, ip_tot_len, 54321,
                         0x4000, 64, socket.IPPROTO_TCP, ip_chk,
                         src_ip_bytes, dst_ip_bytes)

    # 4. Inner TCP Header (20 bytes) pointing to port 80
    tcp_sport = 54321
    tcp_dport = 80
    tcp_seq = 1000
    tcp_ack = 0
    tcp_flags = (5 << 12) | 0x018  # Data offset=5 (20 bytes), Flags=PSH+ACK
    tcp_win = 65535

    tcp_hdr_no_chk = struct.pack('!HHLLHHHH', tcp_sport, tcp_dport, tcp_seq, tcp_ack, tcp_flags, tcp_win, 0, 0)

    # TCP Checksum calculation with Pseudo Header
    pseudo_hdr = struct.pack('!4s4sBBH', src_ip_bytes, dst_ip_bytes, 0, socket.IPPROTO_TCP, 20 + len(http_payload))
    tcp_chk = checksum(pseudo_hdr + tcp_hdr_no_chk + http_payload)

    tcp_hdr = struct.pack('!HHLLHHHH', tcp_sport, tcp_dport, tcp_seq, tcp_ack, tcp_flags, tcp_win, tcp_chk, 0)

    # 5. VXLAN Header (8 bytes)
    vxlan_flags = 0x08  # VNI Flag set
    vxlan_vni = (vni << 8)
    vxlan_hdr = struct.pack('!BBHI', vxlan_flags, 0, 0, vxlan_vni)

    # Full packet payload
    packet = vxlan_hdr + eth_hdr + ip_hdr + tcp_hdr + http_payload

    # Send over standard UDP socket to the host that recieves VXLAN packets
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        sock.sendto(packet, (target_host, target_vxlan_port))
        print(f"Sent VXLAN packet ({len(packet)} bytes) to {target_host}:{target_vxlan_port}")
    finally:
        sock.close()

if __name__ == "__main__":
    HOST_IP = "localhost"  # Target IP where gor is running
    send_valid_vxlan_http(HOST_IP)

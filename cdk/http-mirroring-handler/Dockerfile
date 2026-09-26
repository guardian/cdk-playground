FROM python:3.12-slim

COPY entrypoint.py /usr/local/bin/entrypoint.py
RUN chmod +x /usr/local/bin/entrypoint.py

# VXLAN arrives on UDP; expose the default port as documentation
EXPOSE 4789/udp

ENTRYPOINT ["python3", "/usr/local/bin/entrypoint.py"]

# Require the user to supply <host> <port> at run time, e.g.:
#   docker run --net=host vxlan-replay 192.168.1.10 8080
# Optional flags:
#   --vxlan-port 4789   (change VXLAN UDP listen port)
CMD []

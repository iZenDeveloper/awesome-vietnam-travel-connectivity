FROM python:3.12-slim

LABEL maintainer="Kovitel Engineering <engineering@kovitel.com>"
LABEL org.opencontainers.image.source="https://github.com/iZenDeveloper/awesome-vietnam-travel-connectivity"
LABEL org.opencontainers.image.url="https://kovitel.com"
LABEL org.opencontainers.image.description="Automated Vietnam cellular latency & APN benchmark agent"

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    iputils-ping \
    traceroute \
    curl \
    dnsutils \
    && rm -rf /var/lib/apt/lists/*

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]

# EventPilot AI API. Build from the repo root:
#   docker build -f backend/Dockerfile -t eventpilot-api .
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    CHECKPOINT_DB=/var/lib/eventpilot/checkpoints.sqlite

WORKDIR /app

COPY backend/requirements.txt backend/requirements.txt
RUN pip install -r backend/requirements.txt

COPY src ./src
COPY data/knowledge_base ./data/knowledge_base
COPY backend ./backend

# run as an unprivileged user; checkpoints + traces go to writable dirs
RUN useradd --create-home --uid 10001 eventpilot \
    && mkdir -p /var/lib/eventpilot /app/runs \
    && chown -R eventpilot /var/lib/eventpilot /app/runs
USER eventpilot

WORKDIR /app/backend
EXPOSE 8001

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://127.0.0.1:8001/api/health', timeout=4)"

# One worker: the rate limiter and run semaphore are per-process. Scale with
# more containers behind a load balancer (and Redis for shared limits) instead.
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001", "--proxy-headers"]

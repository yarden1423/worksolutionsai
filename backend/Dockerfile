FROM python:3.9-slim
WORKDIR /app

COPY backend.py .
COPY requirements.txt .
COPY geminiservice/ ./geminiservice/
RUN pip install -r requirements.txt

CMD ["python", "./backend.py"]



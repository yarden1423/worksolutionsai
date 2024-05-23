FROM python:3.9-slim
WORKDIR /app

COPY backend.py .
COPY requirements.txt .
COPY geminiservice/ ./geminiservice/
RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "./backend.py"]



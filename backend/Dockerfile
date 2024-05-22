FROM python:3.9

COPY backend.py .
COPY requirements.txt .
COPY geminiservice .
RUN pip install -r requirements.txt

CMD ['python', 'backend.py']


FROM python:3.13.0b2-slim

WORKDIR /usr/src/resort-rental-frontend

ENV PYTHONDONTWIRTEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt
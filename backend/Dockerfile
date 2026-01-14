FROM golang:1.23.2-alpine AS builder
WORKDIR /app

COPY . /app
RUN go build -o main . 


FROM alpine:latest

WORKDIR /app
COPY --from=builder /app/main /app
COPY --from=builder /app/config.yaml /app/config.yaml

EXPOSE 5000
CMD ./main

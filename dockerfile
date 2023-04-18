FROM golang:1.17

ENV TZ Asia/Tokyo
ENV API_TOKEN c14a9e3458a1cb8d


WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -o cmd/fenrir-webapp cmd/main.go

WORKDIR /app/cmd

EXPOSE 8080

CMD ["./fenrir-webapp"]
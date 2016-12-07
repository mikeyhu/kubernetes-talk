FROM alpine:3.3
RUN apk add --update bash curl && \
    rm -rf /var/cache/apk/*

ADD run.sh /app/

CMD "/app/run.sh"
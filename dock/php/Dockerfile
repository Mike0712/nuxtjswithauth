FROM mike0712/php:7.4-fpm

ADD symfony /usr/local/bin/
RUN mkdir -p /home/docker/ && chown -R docker:docker /home/docker && chmod -R 755 /home/docker

USER docker
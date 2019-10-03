FROM php:fpm-alpine

# PHP Extensions
RUN apk add --no-cache libzip-dev zip php7-zip php7-xdebug \
    && docker-php-ext-configure zip --with-libzip \
    && docker-php-ext-install zip

RUN docker-php-ext-install pdo_mysql

# Composer
RUN apk add --no-cache composer

EXPOSE 9000

# Link log outputs to console
#RUN ln -sf /dev/stdout /var/log/php7/access.log \
#    && ln -sf /dev/stderr /var/log/php7/error.log

# Start FPM
CMD ["php-fpm"]

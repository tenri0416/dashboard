FROM php:8.2-fpm

# install composer
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer

# Install required packages
# RUN apt-get update && \
#   apt-get -y install --no-install-recommends git unzip libzip-dev libicu-dev libonig-dev && \
#   docker-php-ext-configure gd --with-jpeg &&\
#   docker-php-ext-install -j$(nproc) gd \
#   apt-get clean && \
#   rm -rf /var/lib/apt/lists/* && \
#   docker-php-ext-install intl pdo_mysql zip bcmath

RUN apt-get update && \
    apt-get -y install --no-install-recommends git unzip libzip-dev libicu-dev libonig-dev libpng-dev libjpeg-dev && \
    docker-php-ext-configure gd --with-jpeg=/usr/include/ && \
    docker-php-ext-install -j$(nproc) gd intl pdo_mysql zip bcmath && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


  # Laravel Sanctum のインストール
WORKDIR /var/www/html
RUN composer require laravel/sanctum
ARGS = $(filter-out $@,$(MAKECMDGOALS))
MAKEFLAGS += --silent

up:
	docker-compose up -d; \

	# check if we need a composer create-project if there is no laravel setup
	if [ ! -d site/public ]; then \
		rm -f site/.gitkeep; \
		docker-compose exec php composer --working-dir=/var/www/html create-project --prefer-dist laravel/laravel . ; \
		sed -i "" "s/DB_HOST=127.0.0.1/DB_HOST=db/" site/.env; \
	else \
		echo "Found 'public' folder in 'site'. Not installing Laravel."; \
	fi; \

	# check if we need a composer install if there is already a laravel setup
	@if [ ! -d "site/vendor" ]; then \
		docker-compose exec php composer --working-dir=/var/www/html install; \
		cp site/.env.example site/.env; \
		docker-compose exec php php artisan key:generate; \
	fi;


	# always run database migrations
	docker-compose exec php php artisan migrate; \

down:
	docker-compose down -v; \

start:
	docker-compose start

stop:
	docker-compose stop

restart: stop start

status:
	docker-compose ps

shell:
	docker-compose exec php /bin/sh

db-shell:
	docker-compose exec db mysql -uroot homestead

db-backup:
	mkdir -p backups
	@echo dumping backups/laravel_$$(date +%Y-%m-%d_%H-%M).sql.gz
	docker-compose exec db mysqldump -uroot homestead | gzip > backups/laravel_$$(date +%Y-%m-%d_%H-%M).sql.gz

db-restore:
	@if test -z "$(ARGS)"; then \
		$(eval ARGS := backups/`ls -t1 backups/|head -n 1`) \
		echo "no file path given, fallback to $(ARGS)"; \
	fi
	gunzip -c "$(ARGS)" | docker-compose exec -T db mysql -uroot homestead

xdebug:
	$(eval ACTIVE_INTERFACE := `route get default | grep interface | sed 's/interface: //g'`)
	$(eval CURRENT_IP := $(shell ipconfig getifaddr $(ACTIVE_INTERFACE)))
	docker-compose exec php sed -i 's/;zend_extension=xdebug.so/zend_extension = xdebug.so\nxdebug.remote_enable = 1\nxdebug.remote_host = localhost\n/' /etc/php7/conf.d/xdebug.ini
	docker-compose exec php sed -i 's/xdebug.remote_host = .*/xdebug.remote_host = $(CURRENT_IP)/' /etc/php7/conf.d/xdebug.ini
	docker-compose restart php

artisan:
	docker-compose exec php php artisan $(ARGS)

composer:
	docker-compose exec php composer --working-dir=/var/www/html $(ARGS)

# prevents arguments passed beeing evaluated as task names
%:
	@:

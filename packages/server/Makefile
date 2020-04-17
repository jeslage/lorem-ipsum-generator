up:
	docker-compose up

start:
	docker-compose start

stop:
	docker-compose stop

down:
	docker-compose down -v

restart:
	docker-compose restart

db-shell:
	docker-compose exec db mysql -uroot -ppassword lorem-ipsum-db

db-backup:
	mkdir -p backups
	@echo dumping backups/lorem-ipsum-generator_$$(date +%Y-%m-%d_%H-%M).sql.gz
	docker exec -i $$(docker-compose ps -q db) mysqldump -uroot -ppassword lorem-ipsum-db | gzip > backups/lorem-ipsum-generator_$$(date +%Y-%m-%d_%H-%M).sql.gz

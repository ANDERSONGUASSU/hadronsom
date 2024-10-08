ifneq (,$(wildcard ./.env))
include .env
export
ENV_FILE_PARAM = --env-file .env

endif

build:
	docker compose up --build -d --remove-orphans

up: 
	docker compose up -d

down:
	docker compose down

show-logs:
	docker compose logs

show-logs-api:
	docker compose logs api

populate:
	docker-compose exec api python3 manage.py utils/populate.py

migrate:
	docker-compose exec api python3 manage.py migrate

makemigrations:
	docker compose exec api python3 manage.py makemigrations

showmigrations:
	docker compose exec api python3 manage.py showmigrations
	
superuser:
	docker compose exec api python3 manage.py createsuperuser

collectstatic:
	docker compose exec api python3 manage.py collectstatic

imagefields:
	docker compose exec api python3 manage.py process_imagefields --all

down-v:
	docker compose down -v

volume: 
	docker volume inspect hadronsom-src_postgres_data

hadronsom-db:
	docker compose exec postgres-db psql --username=andersonguassu --dbname=hadronsom

format:
	docker compose exec api black .
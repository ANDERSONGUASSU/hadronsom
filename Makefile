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

migrate:
	docker-compose exec api python3 manage.py migrate

makemigrations:
	docker compose exec api python3 manage.py makemigrations

showmigrations:
	docker compose exec api python3 manage.py showmigrations
	
superuser:
	docker compose exec api python3 manage.py createsuperuser

app:
	docker compose exec api python3 manage.py startapp $(name)

collectstatic:
	docker compose exec api python3 manage.py collectstatic

down-v:
	docker compose down -v

volume: 
	docker volume inspect hadronsom-src_postgres_data

hadronsom-db:
	docker compose exec postgres-db psql --username=andersonguassu --dbname=hadronsom


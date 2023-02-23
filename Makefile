MAIN = ./src/main.ts
PLATFORM = --platform linux/amd64
DENO_FLAGS = --allow-net --allow-env --allow-read
IMAGE = app

run:
	deno run $(DENO_FLAGS) $(MAIN)

docker-build:
	docker build -t $(IMAGE) .

docker-run:
	docker run $(PLATFORM) -p 8000:8000 $(IMAGE) run $(DENO_FLAGS) $(MAIN)

up:
	docker run --name dust-app -dp 80:80 dust-app

rebuild:
	docker build -t dust-app .

down:
	docker stop dust-app && docker rm dust-app
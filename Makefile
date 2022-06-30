update:
	rm -rf node_modules package-lock.json
	npm i


build/frontend:
	docker build packages/frontend/ -t=blog_fe

build/backend:
	docker build packages/backend/ -t=blog_be

dockerised/frontend:
	docker run -p 3000:3000 blog_fe

dockerised/backend:
	docker run -p 4000:4000 blog_be

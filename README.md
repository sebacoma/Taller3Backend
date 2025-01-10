# Taller 3 Backend

Este proyecto es el backend desarrollado para el Taller 3. Utiliza Node.js, Express, y MySQL, y está diseñado para desplegarse utilizando Docker y Render.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir APIs REST.
- **MySQL**: Base de datos relacional.
- **Docker**: Para crear y manejar contenedores.
- **Render**: Servicio para desplegar tanto la base de datos como el backend.
- **GitHub Actions**: Automatización del flujo de CI/CD.

## Características principales

- CRUD de datos.
- Conexión con una base de datos MySQL en Render.
- Despliegue automatizado usando Docker y GitHub Actions.



## Requisitos previos

Asegúrate de tener instalados los siguientes programas antes de comenzar:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

## Instalación y configuración

1. Clona el repositorio:
   git clone https://github.com/sebacoma/Taller3Backend.git
   cd Taller3Backend

2. Instala las dependencias: 
	npm install

3. Configura las variables de entorno en un archivo .env:
	DB_HOST=your-database-host
	DB_USER=your-database-user
	DB_PASSWORD=your-database-password
	DB_NAME=your-database-name

4. probar conexion con base de datos

	sequelize db:create
	sequelize db: migrate
	sequelize db:sedd:all


5. Inicia el servidor localmente:
	npm start

## Uso con Docker
1. Construye la imagen de Docker:
	docker build -t taller3-backend .

2. Ejecuta el contenedor:
	docker run -p 3000:3000 --env-file .env taller3-backend

3. Alternativamente, usa docker-compose:
	docker-compose up

## Despliegue
El proyecto está configurado para desplegarse automáticamente en Render al hacer un push a la rama main.

Flujo de CI/CD con GitHub Actions
El archivo deploy.yml se encuentra en .github/workflows y realiza los siguientes pasos:

1. Construcción de la imagen de Docker.
2. Push de la imagen a Docker Hub.
3. Notificación a Render para redeployar el servicio.
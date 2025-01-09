# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración (package.json y package-lock.json)
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia todo el código fuente de tu proyecto al contenedor
COPY . .

# Expone el puerto en el que corre tu aplicación (modifica según tu app)
EXPOSE 4000

# Define el comando para iniciar tu aplicación
CMD ["npm", "start"]

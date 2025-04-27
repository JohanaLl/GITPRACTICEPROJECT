# Usar una imagen oficial de Maven para construir el proyecto
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Establecer directorio de trabajo
WORKDIR /app

# Copiar todo el código al contenedor
COPY . .

# Construir el proyecto (empacarlo como .jar)
RUN ./mvnw clean package -DskipTests

# Usar una imagen más ligera de Java para correr el .jar
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copiar el jar desde la fase de build
COPY --from=build /app/target/*.jar app.jar

# Exponer el puerto 8080
EXPOSE 8080

# Comando para correr la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]

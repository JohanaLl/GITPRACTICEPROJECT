# Usar una imagen oficial de Maven para construir el proyecto
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

COPY . .

# 🔥 AÑADIR ESTA LÍNEA para dar permisos de ejecución
RUN chmod +x mvnw

# Ahora sí, construir el proyecto
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]

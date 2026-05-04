# =========================
# Stage 1: Build React AppSite
# =========================
FROM node:20 AS build

# Рабочая папка внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все исходники (src/ и public/)
COPY . .

# Собираем React-приложение (результат будет в /app/build)
RUN npm run build

# =========================
# Stage 2: Serve with Nginx
# =========================
FROM nginx:alpine

# Копируем собранные файлы в папку Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Если нужно — можно заменить дефолтный конфиг Nginx
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx в форграунд
CMD ["nginx", "-g", "daemon off;"]


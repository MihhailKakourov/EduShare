## Edushare

## Содержимое
- [Ввод](#Ввод)
- [Технологический стек](#Технологический-стек)
- [Возможности](#Возможности)
- [Функциональные требования](#Функциональные-требования)
- [Использование](#Использование)
  - [Подготовка](#Подготовка)
  - [Установка](#Установка)
- [ERD](#ERD)

## Ввод:

**Edushare** — это современный веб-сервис, предназначенный для студентов, стремящихся к обмену учебными материалами и ресурсами. Наша платформа предоставляет удобный доступ к разнообразным учебным материалам, таким как конспекты, учебники и видеоуроки, способствуя сотрудничеству и взаимопомощи среди студентов.

# Разработчики:
[Mihhail Kakourov](https://github.com/MihhailKakourov)
[Artjom Patoka](https://github.com/GparmizanG)

## Технологический стек

- **Express:** Используется для создания надежного и масштабируемого серверного приложения, обеспечивая быстрый и эффективный обмен данными.
  
- **Sequelize:** ORM-библиотека, упрощающая взаимодействие с базой данных MySQL, что позволяет легко управлять моделями данных и выполнять сложные запросы.

- **MySQL:** Реляционная база данных, обеспечивающая высокую производительность и надежность для хранения и обработки учебных материалов.

- **Swagger** — Инструмент, позволяющий разработчикам и пользователям легко изучать доступные эндпоинты API и их функциональность.

## Возможности
- **Регистрация и аутентификация**

- **CRUD операции**

- **Система рейтингов и отзывов**

- **Поиск по категориям и ключевым словам**

## Функциональные требования

- **Гость:**
```
Авторизация
Регистрация
Просмотр пользователей (видно только имя пользователя)
Просмотр материалов
```
- **Пользователь:**
```
Добавление материалов
Добавление комментариев к материалам
Добавление оценки к материалам
Изменение своих материалов
Изменение своих данных
```
- **Администратор:**
```
Управление всеми таблицами
```

## Использование

# Подготовка
Убедитесь, что у вас установлены следующие программы и расширения:
- [NodeJS](https://nodejs.org/en)
- [Visual Studio Code](https://code.visualstudio.com/)
- [XAMPP](https://www.apachefriends.org/ru/index.html)
- [ThunderClient](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

# Установка
1. Склонируйте репозиторий
   ```
   git clone https://github.com/MihhailKakourov/EduShare.git
   ```
2. Выберите директорию с проектом в VSCode
3. Запустите, используя команду ```node app.js```
4. Используя документацию Swagger можете писать запросы

# ERD
![ERD](https://github.com/MihhailKakourov/EduShare/blob/main/ERD.png)
   

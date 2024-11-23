### README.md

# Dashboard

Дашборд для статистики сайтов с использованием React.js + json-server


## Как запустить проект

1. **Клонируйте репозиторий**

   ```bash
   git clone https://github.com/vorpal13/dashboard.git
   ```

2. **Перейдите в папку проекта**

   ```bash
   cd dashboard
   ```

3. **Установите зависимости**

   Выполните следующую команду для установки всех необходимых пакетов:

   ```bash
   npm install
   ```

4. **Запустите приложение**

   Откройте **два терминала**:

   - В первом терминале запустите сервер:

     ```bash
     npm run server
     ```

   - Во втором терминале запустите приложение в режиме разработки:

     ```bash
     npm run dev
     ```

5. **Откройте приложение**

   После выполнения вышеуказанных шагов откройте браузер и перейдите по адресу:

   ```
   http://localhost:5173
   ```

## Структура проекта

- **app/**: Основные точки входа и конфигурация приложения.
- **assets/**: Содержит изображения и другие медиа-файлы.
- **components/**: Содержит переиспользуемые UI-компоненты.
- **layout/**: Компоненты макета приложения.
- **pages/**: Содержит страницы приложения.
- **services/**: Логика для работы с API.
- **styles/**: Глобальные стили.
- **utils/**: Вспомогательные функции и утилиты.

## Основные команды

- `npm run server`: Запускает сервер API.
- `npm run dev`: Запускает приложение в режиме разработки.

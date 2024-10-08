# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Описание проекта

Этот проект создан при помощи библиотеки octokit, для поиска пользователей Github по логину. Вы можете вводить интересующий вас логин в поисковое поле, после чего вам выдадутся все результаты из официальной API Github. Вы можете настраивать сортировку (по убыванию или возрастанию количества репозиториев), а также открывать интересующие вас аккаунты, где увидите дополнителную информацию: аватар пользователя, его логин и ссылку на его профиль в Github, при переходе по которой профиль открывается в новом окне для удобства пользователя. Еще в этом проекте реализована пагинация (разбиение всех результатов на страницы), с помощью которой вы можете просмотреть все результаты, а также узнать точное количество всех страниц. 
Также этот проект адаптирован под мобильные телефоны и планшеты, его удобно смотреть с любых устройств.

Лоадер не реализован, поскольку все результаты приходят быстро, в нем нет необходимости. 

## Technologies used
- React
- React Router
- ESLint
- Prettier
- Webpack
- Babel
- Styled Components

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

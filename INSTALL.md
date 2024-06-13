# installation de nodejs
dans un dossier backend ou server

npm init -y
npm install express
npm i nodemon -D

dans package.json on met les scripts suivants:
    ```	
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
    ```
# installation de reactjs
dans un dossier frontend ou client
npx create-react-app nom_app
npm install axios

dans package.json:
  "proxy": "http://localhost:3000",


# installation de tailwindcss
dans le dossier react client
npm install -D tailwindcss
npx tailwindcss init

dans tailwind.config.js:
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.jsx",],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Ne pas oublier le import "./index.css"; dans app.jsx ou app.js

# Pour lancer le serveur
node nom_app.js



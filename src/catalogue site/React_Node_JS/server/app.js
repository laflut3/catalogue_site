const express = require('express');
const app = express();
const config = require('./config/config');
const apiRoutes = require('./routes/apiRoutes');
const cors = require('cors');

app.use(cors());
//app.use(express.static("public"));

//routes
app.use('/api', apiRoutes);


app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
});


/*

server/
├── config/
│   ├── config.js // sert à stocker les configurations de l'application (port, db, jwt)
│   ├── database.js // sert à se connecter à la base de données MongoDB par exemple
│   └── passport.js // sert à configurer l'authentification l'utilisateur 
├── controllers/
│   └── authController.js // sert à gérer les actions de l'utilisateur (login, register)
├── middlewares/
│   ├── authMiddleware.js // sert à vérifier si l'utilisateur est authentifié
│   └── errorHandler.js // sert à gérer les erreurs HTTP, enregistrer les erreurs dans un journal
├── models/
│   └── User.js // sert à définir le modèle de l'utilisateur (nom, email, mot de passe)
├── routes/
│   └── authRoutes.js // sert à définir les routes pour l'authentification (login, register)
│   └── index.js // sert à regrouper toutes les routes
├── utils/
│   └── tokenUtils.js
├── .env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md

 */
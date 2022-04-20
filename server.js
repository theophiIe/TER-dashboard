// Permet l'utilisation du fichier de configuration .env
require('dotenv').config();

// Permet d'utiliser les lib
const express = require("express");

// Créer une instance d'express
let app = express();
app.disable("x-powered-by");

// Permet de setup EJS
app.set('view engine', 'ejs');

// Permet l'utilisation des fichiers dans public et dans script
app.use('/public', express.static('public'));
app.use('/script', express.static('script'));

// Les routes
// Route vers la page Homepage
app.get('/', (req, res) => {
    res.redirect('/home');
})

// Route vers la page Homepage
app.get('/home', (req, res) => {
    res.render('pages/home');
})

// Permet de rediger toutes les autres url vers la page Home
app.get('/*', (req, res) => {
    res.redirect('/home');
})

app.listen(8080);
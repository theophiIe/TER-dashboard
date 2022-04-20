// Permet l'utilisation du fichier de configuration .env
require('dotenv').config();

// Permet d'utiliser les lib
const express = require("express");

// Include des fichiers du dossier models
const Auteur = require("./models/auteur");
const { EcritPar, Count_auteurs } = require("./models/ecrit_par");
const { Parle_de, Count_personnalite } = require("./models/parle_de");

// Créer une instance d'express
const app = express();
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
});

// Route vers la page Homepage
app.get('/home', async (req, res) => {
    res.render('pages/home');
});

app.get('/chart', async (req, res) => {
    const data_auteurs = await Count_auteurs.count_nombre_auteurs();

    let data = {};
    let other_value = 0;

    for (let dataAuteursKey in data_auteurs) {
        if (dataAuteursKey <= 4) {
            data[data_auteurs[dataAuteursKey].nom] = parseInt(data_auteurs[dataAuteursKey].nombre);
        }
        else {
            other_value += parseInt(data_auteurs[dataAuteursKey].nombre);
        }
    }

    data['other'] = other_value;

    res.render('pages/chart', {data: data});
});

// Permet de rediger toutes les autres url vers la page Home
app.get('/*', (req, res) => {
    res.redirect('/home');
});

app.listen(8080);
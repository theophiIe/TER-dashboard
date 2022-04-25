// Permet l'utilisation du fichier de configuration .env
require('dotenv').config();

// Permet d'utiliser les lib
const express = require("express");

// Include des fichiers du dossier models
const Auteur = require("./models/auteur");
const { Ecrit_par, Count_auteurs} = require("./models/ecrit_par");
const { Parle_de, Count_personnalite } = require("./models/parle_de");
const { Article, Article_mois } = require("./models/article");
const Personnalite = require("./models/personnalite");
const Source = require("./models/source");
const En_lien = require("./models/en_lien");

// Créer une instance d'express
const app = express();
app.disable("x-powered-by");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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
app.get('/home', (req, res) => {
    res.render('pages/home');
});

app.get('/graphe-auteur', async (req, res) => {
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

    res.render('pages/chart_auteur', {data: data});
});

app.get('/graphe-article', async (req, res) => {
    const data_articles_date_creation = await Article_mois.nombre_date_creation_par_mois();
    const data_articles_date_modification = await Article_mois.nombre_date_modification_par_mois();

    let data_date_creation = {};
    let data_date_modification = {};

    for (let dataArticleKey in data_articles_date_creation) {
        data_date_creation[data_articles_date_creation[dataArticleKey].date.format("YYYY-MM")] = parseInt(data_articles_date_creation[dataArticleKey].nombre);
    }

    for (let dataArticleKey in data_articles_date_modification) {
        data_date_modification[data_articles_date_modification[dataArticleKey].date.format("YYYY-MM")] = parseInt(data_articles_date_modification[dataArticleKey].nombre);
    }

    res.render('pages/chart_article', {data_date_creation: data_date_creation, data_date_modification: data_date_modification});
});

app.get('/table', (req, res) => {
    res.redirect('/table/article');
});

app.get('/table/article', async (req, res) => {
    const articles = await Article.find_all()

    res.render('pages/datatable_article', {articles: articles});
});

app.get('/table/auteur', async (req, res) => {
    const auteurs = await Auteur.find_all()

    res.render('pages/datatable_auteur', {auteurs: auteurs});
});

app.get('/table/personnalite', async (req, res) => {
    const personnalites = await Personnalite.find_all()

    res.render('pages/datatable_personnalite', {personnalites: personnalites});
});

app.get('/table/source', async (req, res) => {
    const sources = await Source.find_all()

    res.render('pages/datatable_source', {sources: sources});
});

app.get('/table/en-lien', async (req, res) => {
    const enliens = await En_lien.find_all()

    res.render('pages/datatable_enlien', {enliens: enliens});
});

app.get('/table/ecrit-par', async (req, res) => {
    const ecritpar = await Ecrit_par.find_all()

    res.render('pages/datatable_ecritpar', {ecritpar: ecritpar});
});

app.get('/table/parle-de', async (req, res) => {
    const parledes = await Parle_de.find_all()

    res.render('pages/datatable_parlede', {parledes: parledes});
});

app.get('/informations', (req, res) => {
    res.render('pages/informations');
});

// Permet de rediger toutes les autres url vers la page Home
app.get('/*', (req, res) => {
    res.redirect('/home');
});

app.listen(8080);
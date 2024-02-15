const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const mustacheExpress = require("mustache-express")

/**
 * Configuration de mustache
 * comme moteur de template
 * pour l'extension .mustache
 */
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");

/**
 * Configuration de express
 * pour récupérer les données d'un formulaire
 * et pour servir les fichiers statiques
 * (css, js, images, etc.)
 */
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Routes à ajouter ici
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1><a href="/personnages">Personnages</a>');
})

app.get('/personnages', (req, res) => {

    // TODO changer  
    const personnages = [
        { id: 1, nom: 'Iron man'},
        { id: 2, nom: 'Spider-Man'},
        { id: 3, nom: 'Hulk'},
    ];

    res.render('personnages/personnages', {personnages: personnages});
})

app.get('/personnages/:id', (req, res) => {
    res.send("page d'un seul personnage");
})

app.listen(port, () => {
    console.log(`marvel crud listening on port ${port}`);
})
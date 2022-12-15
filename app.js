const express = require('express')
const  hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico
app.use( express.static('public') )



// Rutas
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Diego',
        titulo: 'Curso Node Js'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Diego',
        titulo: 'Curso Node Js'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Diego',
        titulo: 'Curso Node Js'
    });
});




app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});
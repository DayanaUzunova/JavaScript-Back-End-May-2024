const express = require('express');
const handlebars = require('express-handlebars');
const { router } = require('./controllers/home');

const app = express();

const hbs = handlebars.create({
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use(router);
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => console.log('App is listening on porst 3000!'));


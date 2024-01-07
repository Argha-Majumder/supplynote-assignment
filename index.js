const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const expressLayouts = require('express-ejs-layouts');
const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));
app.use(express.static("./assets"));
app.use(express.urlencoded({ extended: false }));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));

app.listen(port, (err)=> {
    if (err) {
        console.log('Error occurred', err);
    }
    console.log(`Server is running on port ${port}`);
});
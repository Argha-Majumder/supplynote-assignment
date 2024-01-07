const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use('/', require('./routes'));

app.listen(port, (err)=> {
    if (err) {
        console.log('Error occurred', err);
    }
    console.log(`Server is running on port ${port}`);
});
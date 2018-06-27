const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('landing');
});

app.use('/', express.static('views'));
app.listen(3000, () => console.log('App listening on port 3000! I needs work.'));
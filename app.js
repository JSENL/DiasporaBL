const product = require('./routes/product.route'); // Imports routes for the products
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.set("view engine", "ejs");
const mongoose = require('mongoose');
var dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



const morgan = require('morgan');
const mongo = require('mongodb');

// app.get('/events' (req, res) => {
// //     { name: "SmartBear Software", image: "https://smartbear.com/SmartBear/media/images/smartbear-color-logo-s.png" },
// // { name: "Wayfair", image: "https://d2xsegqaa8s978.cloudfront.net/wayfair_0.0.4_staging/assets/logo.png" },
// // { name: "Akamai Technologies", image: "https://www.akamai.com/us/en/multimedia/images/logo/akamai-logo.png" }
// // res.render('events')
// // })
    
app.get('/', (req, res) => {
    res.render('landing');
});

app.use('/', express.static('views'));
app.listen(3000, () => console.log('App listening on port 3000, welcome.'));
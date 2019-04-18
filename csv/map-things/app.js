const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const mongo = require('mongodb');

mongoose.connect('mongodb://jasenml:seralijah@128@ds155252.mlab.com:55252/diasporabl', {
	useNewUrlParser: true;
}, function (error){
	if(error){
		console.log(error); 
	}else{
		console.log("connected to the database");
	}
});
app.set("view engine", "ejs");

var dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



	
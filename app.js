'use strict';

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',//'http://108.2.105.162:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

const db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3030);
app.use(express.static(__dirname + '/'));
app.use('/', routes);

mongoose.connect('mongodb://cvcv101px:21619646px@travelnotes-shard-00-00-ttjfj.mongodb.net:27017,travelnotes-shard-00-01-ttjfj.mongodb.net:27017,travelnotes-shard-00-02-ttjfj.mongodb.net:27017/my-travel-notes?ssl=true&replicaSet=travelNotes-shard-0&authSource=admin', error => {
  if (error) {
    console.error('Database connecting error:', error);
  }
});

db.on('error', error => {
  console.error.bind(console, 'connection error: ', error);
});

db.once('open', () => {
  console.log('Database successfully connected');
});

app.use((req, res, next) => {
  const error = new Error('404 Not exist');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      status: error.status,
      message: error.message
    }
  });
});

const server = app.listen(app.get('port'), () => {
  console.log('Server is listening at:', app.get('port'));
});

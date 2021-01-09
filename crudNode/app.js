const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const user = require('./api/router/User');

const app = express();

const url = 'mongodb://localhost:27017/';
const dbName = 'crudreact';
const path = url + dbName;

mongoose.connect(path, (err) => {
    if (!err) {
        console.log('db connection stablish');
    } else {
        console.log('db connection error');
    }
});
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({origin:null}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });


app.use('/crudreact/', user);

module.exports = app;
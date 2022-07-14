
'use strict';

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path');

// Load static files
app.use(express.static(path.join(__dirname,"../build")));
app.use(express.static('dist'));


// Connect to google cloud datastore
app.enable('trust proxy');
const {Datastore} = require('@google-cloud/datastore');

const datastore = new Datastore({
    projectId: 'qzhu-sps-summer22',
    keyFilename: path.join(__dirname, '../qzhu-sps-summer22-9aeb80bb574c.json')
  });

const insertForm = form => {
return datastore.save({
    key: datastore.key('form'),
    data: form,
});
};


const corsOptions ={
    origin:'*', 
    credentials:true,    //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions));
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello!');
  });

// Get POST form from frontend 
app.post('/form', cors(), function (req, res) {
    console.log(req.body);
    insertForm(req.body);
});

// don't change this when deployed to app engine
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

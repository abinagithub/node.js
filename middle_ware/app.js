const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express')
const logger = require("./logger");
const autonticate = require('./autontication')

// for use of publishing like /readme.txt.
app.use(express.static('public'))
// use for html format in vs code.
app.use(express.urlencoded( { extended: true}))

app.use(helmet());

if (app.get(('env') === 'development')) {
    app.use(morgan('tiny'));
    console.log("Morgan is workiing..")
};

// middleware in express for use in pipeline.
app.use(logger);

// middleware in express for use in pipeline.
app.use(autonticate)
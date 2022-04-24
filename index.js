const express = require('express');
const helmet = require('helmet');
// helmet secures http requests and stuff
const morgan = require('morgan');
// morgan loggs http requests - useful for development
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
// imports env file so it hides password

const app = express();

// Set views
app.set('views', './views');
app.set('view engine', 'ejs');

//

app.use(bodyParser.json());
// when anything happens (app.use), make sure bodyParser runs (activates req.body)

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
// imports route from posts.js
// saying whenever you are at /posts, use the postsRoute imported above

const homeRoute = require('./routes/home');
app.use('/', homeRoute);

app.use(helmet());

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan is enabled');
    // only enable morgan when needed, or in development env
};

console.log("Configuration Name: " + config.get('name')); // gets name property from config files based on env
console.log("Mail Server: " + config.get('mail.host'));

mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connected to DB'));
// connects to db from env file from mongo atlas

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port 3000'));
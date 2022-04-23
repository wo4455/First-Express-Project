const express = require('express');
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

mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connected to DB'));
// connects to db from env file from mongo atlas

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port 3000'));
const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.set('view engine', 'ejs');
//so you don't have to start nodemon in this folder
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  res.render('subreddit', { ...data });
});

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render('random', { rand: num });
  const cats = ['Blue', 'Rocket', 'Montey', 'Stephanie'];
  res.render('cats', { cats });
});

app.get('/cats', (req, res) => {
  const cats = ['Blue', 'Rocket', 'Montey', 'Stephanie'];
  res.render('cats', { cats });
});

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});

const express = require('express');

const app = express();

const User = require('./models/user');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/secret', (req, res) => {
  res.send('Cant see me');
});

app.listen(3000, () => {
  console.log('Serving your app');
});
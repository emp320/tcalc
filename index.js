const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const app = express();
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, function(){
  console.log('server is listening');
});

app.get('/tipcalc', function(req,res){

  res.render('tip');
});

app.post('/tipcalc', function(req,res){
  console.log('body:',req.body);
  const amount = req.body.amount * 1;
  const percent = req.body.percent * 1;
  const r = amount * percent;

  console.log('result:', r);

  res.render('tip', {amount, percent, r});
});

app.get('/hello', function(req, res) {
  res.render('hello');
});

app.get('/hola', function(req, res) {
  res.send('mundo');
});

app.get('/add/:x/:y', function(req, res) {
  const x = req.params.x * 1;
  const y = req.params.y * 1;

  res.render('sum', {x:x, y:y, sum: x + y});
});

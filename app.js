const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, "/frontend")));

app.set('view engine','pug');


app.get('/', (req,res) => {
  res.render(path.join(__dirname+'/frontend/htmlfiles/home.pug'));
});

app.get('/store', (req,res) => {
  res.render(path.join(__dirname+'/frontend/htmlfiles/store.pug'));
});

app.get('/gallery', (req,res) => {
  res.render(path.join(__dirname+'/frontend/htmlfiles/gallery.pug'));
});

app.get('/contact', (req,res) => {
  res.render(path.join(__dirname+'/frontend/htmlfiles/contact.pug'));
});

// app.get('/', (req,res) => {
//   res.render(path.join(__dirname+'/frontend/htmlfiles/gallery.pug'));
// });



app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));
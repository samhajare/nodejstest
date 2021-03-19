const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

console.log(path.join(__dirname,'./public'));

const publicDirectory = path.join(__dirname,'./public');
const viewpath = path.join(__dirname,'./templates/view');
const partialpath = path.join(__dirname,'./templates/partials');
hbs.registerPartials(partialpath);

app.set('view engine','hbs');
app.set('views',viewpath);

app.use(express.static(publicDirectory));

app.get('/',(req,res) => {
    res.render('index',{
      'title':'test | home'
    });
});

app.get('/about',(req,res) => {
  res.render('about',{
    'title':'test | about'
  });
});

app.get("/products",(req,res) =>{
  if(!req.query.search){
   return  res.send({'error':'you must provide search term'})
  }

    console.log(req.query.search)
    res.send({"products":[]})
});

app.get("/about/*", (req,res) => {
  res.send("404 not found about")
});

// app.get('*',(req,res) => {
//   res.send('404 not found')
// });

app.listen(8080, () => {
    console.log("Server is running on 8080");
});
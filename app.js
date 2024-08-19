// C:\Users\govind\OneDrive\Desktop\Handlebar1\app.js
const express = require('express');
const handlebars = require('express-handlebars');
const Authrouter = require('./routers/auth');
const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
// app.use(express.static('public'));
app.use('/authorisation', Authrouter);
const port = 5005;

app.get('/', (req, res)=>{
    // res.render('home', {title:"Welcome to handlebar", message: "r u good"});
     res.render('login', {title:"Welcome to handlebar", message: "r u good"});
})
app.listen(port, ()=>{
    console.log(`server is running at port: ${port}`);
})
const express = require("express");
const path = require("path");
const hbs = require('hbs')
const app = express();
const port = process.env.PORT || 8000;

// public static path 
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,'../temlates/views');
const partials_path = path.join(__dirname,"../temlates/partials")

// console.log(template_path)
// console.log(partials_path)
// console.log(static_path)

//setting view engine
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path)

app.use(express.static(static_path));


// routing 
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})
app.get('*',(req,res)=>{
    res.render('404error',{
        // errormsg:'Opps! Page Not Found'
        errormsg:"There's nothing to see here"
    })
})
app.get("/weather",(req,res)=>{
    res.send('weather is here')
})
app.get("*",(req,res)=>{
    res.send('404error age not fount')
})
app.listen(port,()=>{
    console.log(`listning to the port ${port}`)
})
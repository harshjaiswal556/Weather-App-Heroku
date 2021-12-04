const express = require("express");
const path = require("path");
// const partials = require("pa")
const hbs = require("hbs");
const port = process.env.PORT || 5500;
const app = express();

let staticPath = path.join(__dirname,"/templates");
let templatePath = path.join(__dirname,"/templates");
let partialPath = path.join(__dirname,"/templates");
hbs.registerPartials(partialPath)
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("/indexLight",(req,res)=>{
    res.render("indexLight");
});
app.get("/weatherLight",(req,res)=>{
    res.render("weatherLight");
});
app.get("/aboutLight",(req,res)=>{
    res.render("aboutLight");
});
app.get("*",(req,res)=>{
    res.render("error404");
});

app.listen(port,()=>{
    console.log("Website hosted successfully");
});
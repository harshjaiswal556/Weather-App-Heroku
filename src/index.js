const express = require("express");
const path = require("path");
// const partials = require("pa")
const hbs = require("hbs");
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
app.get("*",(req,res)=>{
    res.render("404error");
});

app.listen(5500,()=>{
    console.log("Website hosted successfully");
});
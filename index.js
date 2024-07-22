const express=require("express");
 
const app=express();
const path=require("path");
const port=8080;

app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
   
});

app.get("/dice",(req,res)=>{
    let diceval= Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval});
});

app.get("/ig/:username",(req,res)=>{
    let data=req.params;
   res.render("instagram.ejs",{data:data});
});



app.listen(port,()=>{
    console.log(`Listening on  port ${port}`);
});


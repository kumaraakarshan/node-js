

const express=require('express');


const app= express();

app.use((req, res, next)=>{
console.log('middle ware!!!');
next();
});
app.use((req, res, next)=>{
    console.log('another middle ware!!!');

    res.send('<h1> hello from express<h1>');
    });

app.listen(4000);

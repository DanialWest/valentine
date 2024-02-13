const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}));


const { MongoClient } = require("mongodb");
const url = 'mongodb+srv://muntinov06:50KZhhpNMhpPuQcH@dan.rjwcnj5.mongodb.net/valentine'
const client = new MongoClient(url);

const db = client.db("valentine");
const coll = db.collection("dateinfo");

app.post("/date", async (req, res) => {
    console.log(req.body.nigga);          // this would be the data sent with the request
    await coll.insertOne({name: req.body.nigga});
    res.redirect('/foods');
})
    app.post("/foods", async (req, res) => {
        console.log(req.body);          // this would be the data sent with the request
        await coll.insertOne({name: req.body});
        res.redirect('/desserts');
    })



    app.post("/desserts", async (req, res) => {
        console.log(req.body);          // this would be the data sent with the request
        await coll.insertOne({name: req.body});
        res.redirect('/activities');
    })

    app.post("/activities", async (req, res) => {
        console.log(req.body);          // this would be the data sent with the request
        await coll.insertOne({name: req.body});
        res.redirect('/lastpage');
    })
   

    app.get('/foods', (req, res)  => {
        res.sendFile(__dirname + '/valentine.github.io-main/food.html')
    })
    app.get('/desserts', (req, res)  => {
        res.sendFile(__dirname + '/valentine.github.io-main/dessert.html')
    })

    app.get('/activities', (req, res)  => {
        res.sendFile(__dirname + '/valentine.github.io-main/activities.html')
    })

    app.get('/lastpage', (req, res)  => {
        res.sendFile(__dirname + '/valentine.github.io-main/lastpage.html')
    })

    app.get('/date', (req, res)  => {
        res.sendFile(__dirname + '/valentine.github.io-main/date.html')
    })
    app.get('/card', (req, res)  => {
        res.sendFile(__dirname + '/valentine.github.io-main/card.html')
    })
    app.get('/index', (req, res)  => {
        res.sendFile(__dirname + '/valentine.github.io-main/index.html')
    })
    app.get('/thankyou', (req, res)  => {
        res.sendFile(__dirname + '/valentine.github.io-main/thankyou.html')
    })

    
    

app.use(express.static(path.join(__dirname, 'valentine.github.io-main')));

app.listen(80, () => {
    console.log("App working BLYa");
});
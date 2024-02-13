const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

var cors = require('cors')

app.use(express.urlencoded({extended:true}));
app.use(cors())

const { MongoClient } = require("mongodb");
const url = 'mongodb+srv://muntinov06:50KZhhpNMhpPuQcH@dan.rjwcnj5.mongodb.net/valentine'
const client = new MongoClient(url);

const db = client.db("valentine");
const coll = db.collection("dateinfo");


    app.post("/foods", async (req, res) => {
        console.log(req.body);          // this would be the data sent with the request
        await coll.insertOne({name: req.body})
        res.redirect('/desserts')
    })



    app.post("/desserts", async (req, res) => {
        console.log(req.body);          // this would be the data sent with the request
        await coll.insertOne({name: req.body})
        res.redirect('/activities')
    })

    app.post("/activities", async (req, res) => {
        console.log(req.body);          // this would be the data sent with the request
        await coll.insertOne({name: req.body})
        res.redirect('/lastpage')
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

    
    

app.use(express.static(path.join(__dirname, 'valentine.github.io-main')));

app.listen(3000, () => {
    console.log("App working BLYa");
});
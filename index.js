const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
const mongoose = require("mongoose");



const { MongoClient } = require("mongodb");
const url = 'mongodb+srv://muntinov06:50KZhhpNMhpPuQcH@dan.rjwcnj5.mongodb.net/valentine'
const client = new MongoClient(url);

const db = client.db("valentine");
const coll = db.collection("dateinfo");

const info = [
    app.post("/foods", async (req, res) => {
        console.log(req.body);          // this would be the data sent with the request
        await coll.insertOne({name: req.body})
    }),
    app.post("/desserts", async (req, res) => {
        console.log(req.body);          // this would be the data sent with the request
        await coll.insertOne({name: req.body})
    }),
    app.post("/activities", async (req, res) => {
        console.log(req.body);          // this would be the data sent with the request
        await coll.insertOne({name: req.body})
    })
];
/*mongoose.connect(url, {
    useNewUrlParser:true,useUnifiedTopology:true
}, (err)=>{
    if(err){
        console.log(err)
    } else{
        console.log("connected")
    }
});*/




/*mongoClient.connect(async function(error, mongo) {

    let db = mongo.db('skillcheck');
    let coll = db.collection('items');
   
});*/



app.post("/desserts", async (req, res) => {
    console.log(req.body);          // this would be the data sent with the request
 
});

app.post("/activities", async (req, res) => {
    console.log(req.body);          // this would be the data sent with the request
   
});
/*const db = async()=> {
    try{
        const con = await mongoose.connect(url)
        console.log('Mongo connected')
    } catch (error){
        console.log('Error Aken')
    }
}*/
 

app.use(express.static(path.join(__dirname, 'valentine.github.io-main')));




  

app.listen(3000, () => {
    console.log("App working BLYa");
});
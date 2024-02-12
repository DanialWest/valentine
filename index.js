const express = require('express');
const path = require('path');
const app = express();
//const mongoose = require('mongoose');



 

app.use(express.static(path.join(__dirname, 'valentine.github.io-main')));




  

app.listen(3000, () => {
    console.log("App working BLYa");
});
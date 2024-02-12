const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'valentine.github.io-main')));

app.post("/foods", (req, res) => {
    console.log(req.body);          // this would be the data sent with the request

});

app.post("/desserts", (req, res) => {
    console.log(req.body);          // this would be the data sent with the request

});

app.post("/activities", (req, res) => {
    console.log(req.body);          // this would be the data sent with the request

});

app.listen(3000, () => {
    console.log("App working BLYa");
});
const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path")
const fs = require("fs")

const data = {
    products: [
        { name: "Myszka", checked: false },
        { name: "Laptop", checked: false },
        { name: "Komputer", checked: false },
        { name: "Monitor", checked: false },
        { name: "Głośniki", checked: false },
        { name: "Słuchawki", checked: false},
        { name: "Mikrofon", checked: false },
        { name: "Klawiatura", checked: false },
        { name: "Pendrive", checked: false },
        { name: "Dupsko czorne", checked: false },
    ],
    shipping: [

        { img: 'dpd.png', option: 'dpd' },
        { img: 'inpost.png', option: 'inpost' },
        { img: 'pp.jfif', option: 'poczta' },
        { img: 'osob.png', option: 'osobiscie' }

    ],
    payment: [

        { img: 'bl.png', option: 'blik' },
        { img: 'paypal-logo.jpg', option: 'paypal' },
        { img: 'vis.png', option: 'visa' },

    ],
}




app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/static/index.html'));
})

app.post('/getFiles', function (req, res) {
    fs.readdir('static/cwiczenia', function (err, files) {
        if (err) {
            return console.log(err);
        }
        res.send(files);
    });
})

app.get('/getData', function (req, res) {
    res.send(JSON.stringify(data))
})

app.listen(PORT, function () {
    console.log(`Serwer działa na porcie: ${PORT}`)
})
app.use(express.static('static'))
app.use(express.static('static/cwiczenia'))
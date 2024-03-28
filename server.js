const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path")
const fs = require("fs")

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


app.listen(PORT, function () {
    console.log(`Serwer działa na porcie: ${PORT}`)
})
app.use(express.static('static'))
app.use(express.static('static/cwiczenia'))
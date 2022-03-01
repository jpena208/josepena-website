const express = require("express");
const app = express();
http = require('http');
fs = require('fs');
path = require('path');

// If port is set in environment variable use that port
// if not, use port 5000
const PORT = process.env.PORT || 5000

app.use(express.static(path.join('C:/Users/jpena208/Documents/GitHub/josepena-website')));

app.get("/", function (req, res) {
    res.sendFile("C:/Users/jpena208/Documents/GitHub/josepena-website/public/index.html");
});

app.listen(PORT, function () {
    console.log("Server started...")
});
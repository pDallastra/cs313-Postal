const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/postalrate.html");
});

app.post('/app', function(req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var price;

    var weight = req.body.weight;
    var type = req.body.type;

    if (type === 'Letters (Stamped)') {
        if (weight < 2) {
            price = 0.55;
        } else if (weight >= 2 && weight < 3) {
            price = 0.70;
        } else if (weight >= 3 && weight < 3.5) {
            price = 0.85;
        } else {
            price = 1;
        }
    }

    if (type === 'Letters (Metered)') {
        if (weight < 2) {
            price = 0.50;
        } else if (weight >= 2 && weight < 3) {
            price = 0.65;
        } else if (weight >= 3 && weight < 3.5) {
            price = 0.80;
        } else {
            price = 0.95;
        }
    }

    if (type === 'Large Envelopes (Flats)') {
        if (weight < 2) {
            price = 1.00;
        } else if (weight >= 2 && weight < 3) {
            price = 1.15;
        } else if (weight >= 3 && weight < 4) {
            price = 1.30;
        } else if (weight >= 4 && weight < 5) {
            price = 1.45;
        } else if (weight >= 5 && weight < 6) {
            price = 1.60;
        } else if (weight >= 6 && weight < 7) {
            price = 1.75;
        } else if (weight >= 7 && weight < 8) {
            price = 1.90;
        } else if (weight >= 8 && weight < 9) {
            price = 2.05;
        } else if (weight >= 9 && weight < 10) {
            price = 2.20;
        } else if (weight >= 10 && weight < 11) {
            price = 2.35;
        } else if (weight >= 11 && weight < 12) {
            price = 2.50;
        } else if (weight >= 12 && weight < 13) {
            price = 2.65;
        } else {
            price = 2.80;
        }
    }

    if (type === 'First-Class Package Service--Retail') {
        if (weight < 5) {
            price = 3.66;
        } else if (weight >= 5 && weight < 9) {
            price = 4.39;
        } else if (weight >= 9 && weight < 13) {
            price = 5.19;
        } else {
            price = 5.71;
        }
    }

    if (weight === '') {
        price = 0;
    }

    res.render('postal', {
        price: price,
        weight: weight,
        type: type
    });

});

app.listen(3000, function() {
    console.log("Running on port 3000");
});
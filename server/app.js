var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
module.exports = app;

var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../index.html');

var FlashCardModel = require('./models/flash-card-model');

app.use(express.static(publicPath));

app.use('/bower_components',express.static(path.join(__dirname,'../bower_components')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});


app.get('/cards', function (req, res) {

    var modelParams = req.query.category ? { category: req.query.category } : {};

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 1000);
    });

});

app.get('/cards/:id',function(req,res){
    var modelParams = req.params.id ? { _id: req.params.id } : {};
    FlashCardModel.findOne(modelParams,function(err,card){
        if(err) console.log("Error finding one card")
        else{
            res.send(card)
        }
    })
})

app.post('/cards', function (req, res) {

    var card = req.body;

    FlashCardModel.create(card)
    .then(function (createdCard) {
        res.send(createdCard);
    }, function (err) {
        res.status(500).send(err.message);
    });

});

app.post('/cards/update',function (req,res){
    var card = req.body
    FlashCardModel.findOneAndUpdate({_id: card._id }, card, {},function (err,card){
        if(err)
            res.json("update failed")
        else
            res.json("update successful")
    })
})

app.post('/cards/delete',function(req,res){
    var card = req.body
    FlashCardModel.findOneAndRemove({_id: card._id }, {},function (err,card){
        if(err)
            res.json("delete failed")
        else
            res.json("delete successful")
    })
})
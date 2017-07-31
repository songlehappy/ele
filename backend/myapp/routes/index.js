var express = require('express');
var router = express.Router();
var https = require("https");
/* GET home page. */
router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});




router.get('/foodlist', function (req, res, next) {
  var lg=req.query.latitude;
  var lt=req.query.longitude;
  var dataStr="";
  https.get('https://mainsite-restapi.ele.me/shopping/v2/entries?latitude='+lg+'&longitude='+lt+'&templates[]=main_template', (response) => {
    response.on('data', (d) => {
        dataStr=dataStr+d;   
    });
    response.on('end',()=>{
      res.send(dataStr);
    })
  })
});
router.get('/hotkey', function (req, res, next) {
  var lg=req.query.latitude;
  var lt=req.query.longitude;
  var dataStr="";
  https.get('https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=' + lg + '&longitude=' + lt, (response) => {
    response.on('data', (d) => {
        dataStr=dataStr+d;   
    });
    response.on('end',()=>{
      res.send(dataStr);
    })
  })
});
router.get('/weather', function (req, res, next) {
  var lg=req.query.latitude;
  var lt=req.query.longitude;
  var dataStr="";
  https.get('https://mainsite-restapi.ele.me/bgs/weather/current?latitude=' + lg + '&longitude=' + lt, (response) => {
    response.on('data', (d) => {
        dataStr=dataStr+d;   
    });
    response.on('end',()=>{
      res.send(dataStr);
    })
  })
});
router.get('/location', function (req, res, next) {
  var lg=req.query.latitude;
  var lt=req.query.longitude;
  var dataStr="";
  https.get('https://mainsite-restapi.ele.me/bgs/poi/reverse_geo_coding?latitude=' + lg + '&longitude=' + lt, (response) => {
    response.on('data', (d) => {
        dataStr=dataStr+d;   
    });
    response.on('end',()=>{
      res.send(dataStr);
    })
  })
});

module.exports = router;

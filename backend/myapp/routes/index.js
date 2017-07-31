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
router.get('/index1', function (res, res, next) {
  var dataStr="";
  var r
  https.get('https://mainsite-restapi.ele.me/shopping/v2/entries?latitude=22.555259&longitude=113.884019&templates[]=main_template', (response) => {
    response.on('data', (d) => {
        dataStr=dataStr+d;   
    });
    response.on('end',()=>{
      res.send(dataStr);
    })
  })
});

module.exports = router;

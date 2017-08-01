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
  var lg = req.query.latitude;
  var lt = req.query.longitude;
  var dataStr = "";
  https.get('https://mainsite-restapi.ele.me/shopping/v2/entries?latitude=' + lg + '&longitude=' + lt + '&templates[]=main_template', (response) => {
    response.on('data', (d) => {
      dataStr = dataStr + d;
    });
    response.on('end', () => {
      res.send(dataStr);
    })
  })
});
router.get('/hotkey', function (req, res, next) {
  var lg = req.query.latitude;
  var lt = req.query.longitude;
  var dataStr = "";
  https.get('https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=' + lg + '&longitude=' + lt, (response) => {
    response.on('data', (d) => {
      dataStr = dataStr + d;
    });
    response.on('end', () => {
      res.send(dataStr);
    })
  })
});
router.get('/weather', function (req, res, next) {
  var lg = req.query.latitude;
  var lt = req.query.longitude;
  var dataStr = "";
  https.get('https://mainsite-restapi.ele.me/bgs/weather/current?latitude=' + lg + '&longitude=' + lt, (response) => {
    response.on('data', (d) => {
      dataStr = dataStr + d;
    });
    response.on('end', () => {
      res.send(dataStr);
    })
  })
});
router.get('/location', function (req, res, next) {
  var lg = req.query.latitude;
  var lt = req.query.longitude;
  var dataStr = "";
  https.get('https://mainsite-restapi.ele.me/bgs/poi/reverse_geo_coding?latitude=' + lg + '&longitude=' + lt, (response) => {
    response.on('data', (d) => {
      dataStr = dataStr + d;
    });
    response.on('end', () => {
      res.send(dataStr);
    })
  })
});
//index店面信息http://localhost:3000/indxeshopdata
router.get('/indexshopdata', function (req, res, next) {

  var dataStr = "";
  https.get('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=22.533012&longitude=113.930475&offset=10&limit=10&extras[]=activities&terminal=h5', (response) => {
    response.on('data', (d) => {
      dataStr = dataStr + d;
    });
    response.on('end', () => {
      res.send(dataStr);
    })
  })
});

router.get('/shopsort',function(req,res,next){
  var dataStr="";
  var lg=req.query.latitude;
  var lt=req.query.longitude;
  https.get("https://mainsite-restapi.ele.me/shopping/v2/restaurant/category?latitude="+lg+"&longitude="+lt,function(response){
    response.on('data',(d)=>{
      dataStr=dataStr+d;
    });
    response.on('end',()=>{
      res.send(dataStr);
    })
  })
})
//shop店面商品信息http://localhost:3000/shopdetial
router.get('/shopgoods', function (req, res, next) {
  var id = req.query.id;
  var dataStr = "";
  https.get('https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id=' + id, (response) => {
    response.on('data', (d) => {
      dataStr = dataStr + d;
    });
    response.on('end', () => {
      res.send(dataStr);
    })
  })
});

//shop店面品论信息http://localhost:3000/shopdetial
router.get('/shopcomment', function (req, res, next) {
  var id = req.query.id;
  var dataStr = "";
  https.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/' + id + '/ratings?has_content=true&offset=0&limit=10', (response) => {
    response.on('data', (d) => {
      dataStr = dataStr + d;
    });
    response.on('end', () => {
      res.send(dataStr);
    })
  })
});

//shop店面上部分信息http://localhost:3000/shophead
router.get('/shophead', function (req, res, next) {
  // console.log(req.query)
  var id = req.query.id;
  var dataStr = "";
  https.get('https://mainsite-restapi.ele.me/shopping/restaurant/' + id + '?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&latitude=22.555259&longitude=113.884019', (response) => {
    response.on('data', (d) => {
      dataStr = dataStr + d;
    });
    response.on('end', () => {
      res.send(dataStr);
    })
  })
});

//shop店面score信息http://localhost:3000/shopscore
router.get('/shopscore', function (req, res, next) {
  // console.log(req.query)
  var id = req.query.id;
  var dataStr = "";
  https.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/' + id + '/ratings/scores', (response) => {
    response.on('data', (d) => {
      dataStr = dataStr + d;
    });
    response.on('end', () => {
      res.send(dataStr);
    })
  })
});

//shop店面tag信息http://localhost:3000/shoptag
router.get('/shoptag', function (req, res, next) {
  // console.log(req.query)
  var id = req.query.id;
  var dataStr = "";
  https.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/' + id + '/ratings/tags', (response) => {
    response.on('data', (d) => {
      dataStr = dataStr + d;
    });
    response.on('end', () => {
      res.send(dataStr);
    })
  })
});
module.exports = router;

var express = require('express')
var router = express.Router() // 함수의 ()괄호가 아닌 객체의 ()괄호

// Get users Listen
// get Method Parameter = 2
// 1. endpoint -> http://localhost:3000/calender
// 2. 콜백함수 function(req[요청],res[응답],next[미들웨어 호출함수])
router.get("/", function(req,res,next){
  res.send('Calender Page List')
})
router.get("/calender01", function(req,res,next){
  res.render('index', {title : 'Annual Schedule', pageName :'pages/calender/calender01.ejs'})
})
router.get("/calender02", function(req,res,next){
  res.render('index', {title : 'Monthly Schedule', pageName :'pages/calender/calender02.ejs'})
})
router.get("/calender03", function(req,res,next){
  res.render('index', {title : 'Weekly Schedule', pageName :'pages/calender/calender03.ejs'})
})
module.exports = router;
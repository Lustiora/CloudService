var express = require('express')
var router = express.Router() // 함수의 ()괄호가 아닌 객체의 ()괄호

router.get("/",function(req,res,next){
  res.send('Youtube Favorites List')
})
router.get("/youtube01",function(req,res,next){
  res.render('index',{title:'POP-List', pageName:'pages/youtube/youtube01.ejs'})
})
router.get("/youtube02",function(req,res,next){
  res.render('index',{title:'JPOP-List', pageName:'pages/youtube/youtube02.ejs'})
})
router.get("/youtube03",function(req,res,next){
  res.render('index',{title:'Favorites-List', pageName:'pages/youtube/youtube03.ejs'})
})
module.exports = router;
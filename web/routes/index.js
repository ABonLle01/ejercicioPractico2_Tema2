var express = require('express');
var router  = express.Router();

var datos   = require("../data/dataprovider");

router.get('/', function(req, res, next) {
  const articulos   = datos.getAllPosts();
  const categorias  = datos.getCategories();
  res.render('home', { articles: articulos, categories: categorias });
});

router.get('/entrada', function(req,res){
  const articulos   = datos.getAllPosts();
  const categorias  = datos.getCategories();
  res.render('home', { articles: articulos, categories: categorias });
});

router.get('/entradas/:id', function(req,res){
  const entrada = datos.getPostById(req.params.id);
  res.send(entrada)
});

module.exports = router;

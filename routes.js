const express = require('express');
const routes = express.Router()

const receitas = require("./data");


routes.get('/', function(req, res){
    return res.render("index", { items: receitas})
});


routes.get('/recipes', function(req, res){
    return res.render("recipes", { items: receitas})
});

routes.get('/recipes/create', function(req, res){
    return res.render("/recipes/create")
}); 

routes.get('/about', function(req, res){
    return res.render("about")
});


routes.get('/recipe/:id', function (req, res) {
    const recipeIndex = req.params.id;
    const recipe = receitas.find((recipe) => {
      return recipe.id == recipeIndex;
    });
  
    if (!recipe) {
      return res.send("Receita não encontrada!")
    }
  
    res.render("recipe", { data: recipe });
});

 

module.exports = routes
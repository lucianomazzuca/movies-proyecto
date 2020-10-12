const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {
    list: function(req, res){
        db.Movies.findAll()
        .then(function(peliculas) {
            res.render('index', {
                css: "index.css",
                title: 'Bienvenido'
            })
        })
    },
    detail: function(req,res){
        db.Movies.findByPk(req.params.id)
        .then(function(pelicula) {
            console.log(pelicula)
            res.send(pelicula.title)
        })
    },
    new: function(req,res){

    },
    recommended: function(req,res){
        res.send('recommended')
    },
    search: function(req, res){
        //probably use findOne()
        //db.Usuario.findOne({ where: { name: 'Tony}})
    }
}
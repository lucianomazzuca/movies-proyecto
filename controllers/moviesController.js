const db = require('../database/models');
const sequelize = db.sequelize;

module.exports = {
    list: function(req, res){
        db.Movies.findAll()
        .then(function(peliculas) {
            res.render('list', {
                css: "list.css",
                title: 'Bienvenido',
                peliculas
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
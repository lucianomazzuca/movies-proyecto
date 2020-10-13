const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {
    list: function(req, res){
        db.Movies.findAll()
        .then(function(peliculas) {
            res.render('list', {
                css: "list.css",
                title: 'Listado',
                titlePage: 'Listado de películas',
                peliculas
            })
        })
    },
    detail: function(req,res){
        db.Movies.findByPk(req.params.id)
        .then(function(pelicula) {
            console.log(pelicula)
            res.render('detail', {
                css: 'detail.css',
                title: 'Detalles',
                pelicula
            })
        })
    },
    new: function(req,res){
        db.Movies.findAll({
            order: [
                ["release_date", "DESC"]
            ],
            limit: 5
        })
        .then(function(peliculas) {
            console.log(peliculas)
            res.render('list', {
                css: 'list.css',
                title: 'Nuevos',
                titlePage: 'Ultimas películas',
                peliculas
            })
        })
    },
    recommended: function(req,res){
        db.Movies.findAll({
            where: {
                rating: {[Op.gt] : 8}
            }
        })
        .then(function(peliculas) {
            res.render('list', {
                css: 'list.css',
                title: 'Recomendaciones',
                titlePage: 'Peliculas mejor valoradas',
                peliculas
            })
        })
    },
    search: function(req, res){
        //probably use findOne()
        //db.Usuario.findOne({ where: { name: 'Tony}})
    }
}
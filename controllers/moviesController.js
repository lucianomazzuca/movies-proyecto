const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

module.exports = {
    list: function (req, res) {
        db.Movies.findAll().then(function (peliculas) {
            res.render("list", {
                css: "list.css",
                title: "Listado",
                titlePage: "Listado de películas",
                peliculas,
            });
        });
    },
    detail: function (req, res) {
        db.Movies.findByPk(req.params.id).then(function (pelicula) {
            console.log(pelicula);
            res.render("detail", {
                css: "detail.css",
                title: "Detalles",
                pelicula,
            });
        });
    },
    new: function (req, res) {
        db.Movies.findAll({
            order: [["release_date", "DESC"]],
            limit: 5,
        }).then(function (peliculas) {
            console.log(peliculas);
            res.render("list", {
                css: "list.css",
                title: "Nuevos",
                titlePage: "Ultimas películas",
                peliculas,
            });
        });
    },
    recommended: function (req, res) {
        db.Movies.findAll({
            where: {
                rating: { [Op.gt]: 8 },
            },
        }).then(function (peliculas) {
            res.render("list", {
                css: "list.css",
                title: "Recomendaciones",
                titlePage: "Peliculas mejor valoradas",
                peliculas,
            });
        });
    },
    search: function (req, res) {
        //probably use findOne()
        //db.Usuario.findOne({ where: { name: 'Tony}})
        console.log(req.body.search);

        db.Movies.findAll({
            where: {
                title: { [Op.like]: "%" + req.body.search + "%" },
            },
        }).then(function (peliculas) {
            res.render("list", {
                css: "list.css",
                title: "Resultado",
                titlePage: "Resultados de la búsqueda",
                peliculas,
            });
        });
    },
    createForm: function (req, res) {
        res.render("create", {
            css: "create.css",
            title: "Agregar",
        });
    },
    create: function (req, res) {
        db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release,
            length: req.body.length
        });

        res.redirect('/movies');
    },
    edit: function(req, res) {
        db.Movies.findByPk(req.params.id)
        .then(function(pelicula) {
            console.log(pelicula)
            res.render('edit', {
                css: 'edit.css',
                title: 'Editar',
                pelicula
            })
        })

    },
    update : function(req, res) {
        db.Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release,
            length: req.body.length
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/movies/detail/' + req.params.id);
    },
    delete: function(req, res) {
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/movies');
    }
};

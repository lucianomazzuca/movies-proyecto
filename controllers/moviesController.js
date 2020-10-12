
const db = require('../database/models');

module.exports = {
    index: function(req, res){
        db.Movies.findAll()
        .then(peliculas => {
            res.send(peliculas);
        })
        .catch(error => {
            res.send(error);
        })
    },
    detail: function(req,res){

    },
    new: function(req,res){

    },
    recommended: function(req,res){
        res.send('recommended')
    },
    search: function(req, res){

    }
}
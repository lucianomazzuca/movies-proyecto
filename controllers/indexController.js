module.exports = {
    home: function(req, res){
        res.render('index', {
            css: 'index.css',
            title: 'Bienvenido'
        })
    }
}
module.exports = function(app){

    app.get('/noticias', function(req, res){

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.noticiasModel(connection);

        noticiasModel.getNoticias(function(erro, result){
            res.render("noticias/noticias", {noticias : result });
        });
    });
};
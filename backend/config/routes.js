module.exports = app => {
    app.post('/cadastrarAmeaca', app.api.controllers.ameacaController.salvarAmeaca)
    app.get('/listarAmeaca', app.api.controllers.ameacaController.listarAmeaca)
}
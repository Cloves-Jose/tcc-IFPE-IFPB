module.exports = app => {
    app.post('/signup', app.api.user.save)

    app.post('/register', app.api.menace.save)
    app.get('/getMenace', app.api.menace.getMenace)
}
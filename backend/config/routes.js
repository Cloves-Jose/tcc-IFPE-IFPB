module.exports = app => {
    /**
     * User
     */
    app.post('/signup', app.api.user.save)

    /**
     * Menace
     */
    app.post('/register', app.api.menace.save)
    app.get('/getMenace', app.api.menace.getMenace)

    /**
     * Register menace
     */
    app.post('/registerMenace', app.api.register_menace.save)
}
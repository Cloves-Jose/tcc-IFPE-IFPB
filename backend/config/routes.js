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
    app.delete('/deleteMenace/:id', app.api.menace.deleteMenace)

    /**
     * Register menace
     */
    app.post('/registerMenace', app.api.register_menace.save)
    app.get('/getGeolocation', app.api.register_menace.getGeolocation)
}
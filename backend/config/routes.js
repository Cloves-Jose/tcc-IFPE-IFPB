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
    app.put('/update/:id', app.api.menace.updateMenace)

    /**
     * Register menace
     */
    app.post('/registerMenace', app.api.register_menace.save)
    app.get('/getGeolocation', app.api.register_menace.getGeolocation)

    /**
     * Category
     */
    app.post('/registerCategory', app.api.category.save)
    app.get('/getCategory', app.api.category.getCategory)
    app.put('/updateCategory/:id', app.api.category.updateCategory)
    app.delete('/deleteCategory/:id', app.api.category.deleteCategory)
}
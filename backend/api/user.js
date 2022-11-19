module.exports = app => {

    const save = (req, res) => {
        app.db('users')
            .insert({
                name: req.body.name,
                email: req.body.email.toLowerCase(),
                password: req.body.password
            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    return { save }
}
const bcrypt = require('bcrypt')

module.exports = app => {

    /**
     * Realiza a criptografia da senha do 
     * novo usuário cadastrado.
     * 
     * @param {password} password 
     * @param {*} callback 
     */
    const _obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => callback(hash))
        })
    }

    /**
     * Salva um novo usuário no banco de dados.
     * 
     * @param {req.body} req 
     * @param {res.status} res 
     */
    const save = (req, res) => {

        _obterHash(req.body.password, hash => {
            const password = hash

            app.db('users')
                .insert({
                    name: req.body.name,
                    email: req.body.email.toLowerCase(),
                    password
                })
                .then(_ => res.status(201).send())
                .catch(err => res.status(400).json(err))
        })
    }

    return { save }
}
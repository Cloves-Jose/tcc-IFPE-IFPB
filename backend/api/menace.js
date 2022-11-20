module.exports = app => {

    /**
     * Lista todas as ameaças registradas
     * 
     * @param {*} req 
     * @param {res.status.json} res 
     */
    const getMenace = (req, res) => {
        app.db('menace')
            .select({
                name: 'name',
                description: 'description'
            })
            .then((menace) => {
                return res.status(200).json(menace)
            })
            .catch((err) => {
                return res.status(400).json(err)
            })

    }

    /**
     * Salva uma nova ameça na lista de ameacas
     * @param {req.body} req 
     * @param {res.status} res 
     * @returns 
     */
    const save = (req, res) => {
        
        if(!req.body.name.trim()) {
            return res.status(400).send('Título é um campo obrigatório')
        }

        if(!req.body.description.trim()) {
            return res.status(400).send('Descrição é um campo obrigatório')
        }

        app.db('menace')
            .insert({
                name: req.body.name,
                description: req.body.description
            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    }

    return { save, getMenace }
}
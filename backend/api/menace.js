module.exports = app => {

    const date = new Date()

    /**
     * Lista todas as ameaças registradas
     * 
     * @param {*} req 
     * @param {res.status.json} res 
     */
    const getMenace = (req, res) => {
        app.db('menace')
            .select({
                id: 'id',
                name: 'name',
                photo: 'photo',
                description: 'description',
                created_at: 'created_at',
                update_at: 'updated_at',
                deleted_at: 'deleted_at'
            })
            .then((menace) => {
                return res.status(200).json(menace)
            })
            .catch((err) => {
                return res.status(400).json(err)
            })
    }

    const deleteMenace = (req, res) => {
        app.db('menace')
            .where({ id: req.params.id })
            .update({ deleted_at: date.toISOString() })
            .then(() => res.status(204).send())
            .catch(err => res.status(500).json(err))
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
                photo: req.body.photo,
                description: req.body.description,
                created_at: req.body.created_at,
            })
            .then(_ => res.status(201).send())
            .catch(err => res.status(400).json(err))
    }

    return { save, getMenace, deleteMenace }
}
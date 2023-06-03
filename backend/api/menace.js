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
                title: 'title',
                photo: 'photo',
                dangerousness: 'dangerousness',
                category: 'category',
                risk: 'risk',
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
    /**
     * Deletar ameaça
     * 
     * @param {*} req 
     * @param {*} res 
     */
    const deleteMenace = (req, res) => {
        app.db('menace')
            .where({ id: req.params.id })
            .update({ deleted_at: date.toISOString() })
            .then(() => res.status(204).send())
            .catch(err => res.status(500).json(err))
    }
    /**
     * Atualizar ameaça
     * @param {*} req 
     * @param {*} res 
     */
    const updateMenace = (req, res) => {
        const menace = { ...req.body }
        // console.log(menace)
        if(menace.id) {
            app.db('menace')
                .update(menace)
                .where({ id: menace.id })
                .whereNull('deleted_at')
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    /**
     * Salva uma nova ameça na lista de ameacas
     * @param {req.body} req 
     * @param {res.status} res 
     * @returns 
     */
    const save = (req, res) => {
        // console.log(req.body)
        // if(!req?.body?.name?.trim()) {
        //     return res.status(400).send('Título é um campo obrigatório')
        // }

        // if(!req?.body?.description?.trim()) {
        //     return res.status(400).send('Descrição é um campo obrigatório')
        // }

        app.db('menace')
            .insert({
                title: req.body.title,
                photo: req.body.photo,
                dangerousness: req.body.dangerousness,
                category: req.body.category,
                risk: req.body.risk,
                description: req.body.description,
                created_at: req.body.created_at,
            })
            .then(_ => res.status(201).send())
            .catch(err => res.status(400).json(err))
    }

    return { save, getMenace, deleteMenace, updateMenace }
}
module.exports = app => {

    const save = (req, res) => {

        if(!req.body.age.trim()) {
            return res.status(400).send('Idade é um campo obrigatório')
        }

        if(!req.body.sex.trim()) {
            return res.status(400).send('Sexo é um campo obrigatório')
        }

        app.db('register_menace')
            .insert({
                age: req.body.age,
                sex: req.body.sex,
                reside_menace: req.body.reside_menace,
                description: req.body.description,
                image: req.body.image,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                menace_id: req.body.menace_id
            })
            .then(_ => res.status(201).send())
            .catch(err => res.status(400).json(err))
    }

    return { save }
}
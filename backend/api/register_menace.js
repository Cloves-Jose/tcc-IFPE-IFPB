module.exports = app => {
    /**
     * Puxa coordenadas de geolocatlização para exibir no mapa (web)
     * 
     * @param {*} req 
     * @param {*} res 
     */
    const getGeolocation = async (req, res) => {
        await app.db('register_menace')
            .select({
                latitude: 'latitude',
                longitude: 'longitude',
                created_at: 'created_at',
                updated_at: 'updated_at',
                deleted_at: 'deleted_at',
                title_menace: 'title_menace',
                menace_id: 'menace_id',
                description: 'description'
            })
            .then((geolocation) => {
                res.status(200).json(geolocation.map((item) => {
                    return {
                        type: "Feature",
                        properties: {
                            title: item.title_menace,
                            description: item.description
                        },
                        geometry: {
                            coordinates: [item.longitude, item.latitude],
                            type: "Point"
                        }
                    }
                }))
            })
            .catch((err) => {
                return res.status(400).json(err)
            })
    }

    /**
     * Registrando uma nova ameaça (mobile)
     * 
     * @param {req.body} req 
     * @param {res.status} res 
     * @returns 
     */
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
                title_menace: req.body.title_menace,
                description: req.body.description,
                image: req.body.image,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                created_at: req.body.created_at,
                menace_id: req.body.menace_id
            })
            .then(_ => res.status(201).send())
            .catch(err => res.status(400).json(err))
    }

    return { save, getGeolocation }
}
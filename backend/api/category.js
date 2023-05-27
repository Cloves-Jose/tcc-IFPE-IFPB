module.exports = app => {

    // const getCategory = (req, res) => {
    //     app.db('category')
    //         .select({
    //             id: "id",
    //             title: "title",
    //             created_at: "created_at"
    //         })
    //         .then((category) => {
    //             return res.status(200).json(category)
    //         })
    //         .category((err) => {
    //             return res.status(400).json(err)
    //         })
    // }

    const getCategory = (req, res) => {
        app.db('category')
            .select({
                id: 'id',
                title: 'title',
                created_at: 'created_at',
                updated_at: 'updated_at',
                deleted_at: 'deleted_at'
            })
            .then((category) => {
                return res.status(200).json(category)
            })
            .catch((err) => {
                return res.status(400).json(err)
            })
    }

    const save = (req, res) => {

        app.db('category')
            .insert({
                title: req.body.title,
                created_at: req.body.created_at
            })
            .then(_ => res.status(201).send())
            .catch(err => res.status(400).json(err))
    }

    return { save, getCategory }
}
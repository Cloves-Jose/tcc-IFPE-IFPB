module.exports = app => {

    function salvarRegistro(registro){
        app.db('tb_cadastroAmeaca').insert(registro).then(_=>_)
    }

    async function listarAmeaca() {
        await app.db('tb_cadastroAmeaca')
            .select(
                'tipo_ameaca', 
                'idade', 'genero', 
                'reside_ameaca', 
                'descricao', 
                'descricao_imagem', 
                'latitude', 
                'longitude').then(_=>_)
    }

    return { salvarRegistro, listarAmeaca }
}
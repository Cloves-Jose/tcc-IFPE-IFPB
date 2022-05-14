const mensagens = require('../language/pt-BR.json')
// const mensagens = require('../language/en-US.json')
// const mensagens = require('../language/es-ES.json')

module.exports = app => {

    const { existeOuErro } = app.api.helpers.validacoes

     salvarAmeaca = async (req, res) => {

        const ameaca = {...req.body}

        try {    
            existeOuErro(ameaca.tipo_ameaca, mensagens.erroValidacaoAmeaca.tipoAmeaca)
            existeOuErro(ameaca.idade, mensagens.erroValidacaoAmeaca.idade)
            existeOuErro(ameaca.genero, mensagens.erroValidacaoAmeaca.genero)
            existeOuErro(ameaca.reside_ameaca, mensagens.erroValidacaoAmeaca.resideAmeaca)
            existeOuErro(ameaca.latitude, mensagens.erroValidacaoAmeaca.dadosGeograficos)
            existeOuErro(ameaca.longitude, mensagens.erroValidacaoAmeaca.dadosGeograficos)

            await app.api.services.ameacaService.salvarRegistro(ameaca)

            res.status(201).json()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    listarAmeaca = async (req, res) => {
        try {
            const resultado = await api.services.ameacaService.listarAmeaca()
            console.log(resultado)
            res.status(200).json(resultado)
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    return { salvarAmeaca, listarAmeaca }
}
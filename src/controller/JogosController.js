import {games} from '../models/jogos.js'

export const getIndex = async (req, res) => {
    try {
        const jogos = await games.findAll()
        res.render('index.ejs', {
            jogos
        })
    }

    catch(err) {
        console.log(err.message)
        res.send(err.message)
    }
}

export const singup = (req, res) => {
    try {
        res.render('singup.ejs')
    }
    catch(err) {
        console.log(err.message)
        res.send(err.message)
    }
}

export const postAdd = async (req, res) => { // Criar formulario
    try {
        const {jogo, imagem, plataforma, genero, descricao, ano} = req.body;
        await games.create({jogo, imagem, plataforma, genero, descricao, ano})
        console.log(req.body)
    }

    catch(err) {
        res.send(err.message)
    }
}

export const getDetalhes = async (req, res) => { // Detalhes do id(catalogo) escolhido
    try {
        const jogos = await games.findByPk(req.params.id)
        res.render('detalhes', {
            jogos
        })
    }
    catch(err) {
        res.send(err.message)
    }
}

export const getDelete = async (req, res) => {
    try {
        await games.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/')
    }
    catch(err) {
        res.send(err.message)
    }
}

export const getBack = (req, res) => {
    try {
        res.redirect('/')
    }

    catch(err) {
        res.send(err.message)
    }
}
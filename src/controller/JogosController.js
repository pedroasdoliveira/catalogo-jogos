import {games} from '../models/jogos.js'

export const getIndex = async (req, res) => { // config 
    try {
        const jogos = await games.findAll({
            order: [["jogo", "ASC"]] // ordenar os cards por ordem alfabetica
        })
        res.status(200).render('index.ejs', {
            jogos,
            cardDel: null,
        })
    }

    catch(err) {
        console.log(err.message)
        res.send(err.message)
    }
}

export const singup = (req, res) => { // renderiza a pagina de cadastros
    try {
        res.status(200).render('singup.ejs')
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export const postAdd = async (req, res) => { // Criar formulario
    try {
        const {jogo, imagem, plataforma, genero, ano, descricao} = req.body;
        await games.create({jogo, imagem, plataforma, genero, ano, descricao})
        console.log(req.body)
        res.status(200).redirect('/')
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

export const getDelete = async (req, res) => { // Deletar informações
    try {
        await games.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).redirect('/')
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export const getBack = (req, res) => { // Redirecionar a pagina inicial
    try {
        res.status(200).redirect('/')
    }

    catch(err) {
        res.send(err.message)
    }
}

export const getEditar = async (req, res) => { // Renderizar a pagina de editar
    try {
        const game = await games.findByPk(req.params.id)
        res.status(200).render('edit.ejs', {
            game
        })
    }
    catch(err) {
        res.send(err.message)
    }
}

export const postEditar = async (req, res) => {
    try {
        const {jogo, imagem, plataforma, genero, ano, descricao} = req.body
        await games.update({
            jogo: jogo,
            imagem: imagem, 
            plataforma: plataforma, 
            genero: genero, 
            ano: ano,
            descricao: descricao
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/')
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export const getById = async (req, res) => {
    try {
        const method = req.params.method;
        const jogos = await games.findAll();
        const card = await games.findByPk(req.params.id);

        if (method == 'del') {
            res.render('index', {
                jogos,
                cardDel: card,
            });
        }
    }

    catch(err) {
        res.status(500).send(err.message)
    }
}
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
    }
}


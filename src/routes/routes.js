import express from 'express'
import {getIndex, singup, getDetalhes, getDelete, getBack, postAdd} from '../controller/JogosController.js'

export const routes = express.Router()

routes.get('/', getIndex)

routes.get('/cadastro', singup)

routes.get('/detalhes/:id', getDetalhes)

routes.get('/delete/:id', getDelete)

routes.get('/voltar', getBack)

routes.post('/add', postAdd)
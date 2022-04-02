import express from 'express'
import {getIndex, singup, getDetalhes, getDelete, getBack, postAdd, getEditar, postEditar} from '../controller/JogosController.js'

export const routes = express.Router()

routes.get('/', getIndex) // pagina inicial

routes.get('/cadastro', singup) // ir para form

routes.get('/detalhes/:id', getDetalhes) // ir para detalhes do catalogo por id

routes.get('/delete/:id', getDelete) // deletar informações

routes.get('/voltar', getBack) // voltar a pagina inicial

routes.post('/add', postAdd) //adicionar infos do form

routes.get('/editar/:id', getEditar) // acessar pagina editar

routes.post('/editar/:id', postEditar) // Editar informações
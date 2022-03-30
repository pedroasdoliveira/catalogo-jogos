import express from 'express'
import {getIndex} from '../controller/JogosController.js'

export const routes = express.Router()

routes.get('/', getIndex)
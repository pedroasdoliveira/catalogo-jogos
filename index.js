import express from 'express';
import path from 'path';
import {routes} from './src/routes/routes.js'
import dotenv from 'dotenv'

dotenv.config()

const server = express();
server.set('view engine', 'ejs');

server.use(routes)

const __dirname = path.resolve(path.dirname(''));
server.use(express.static(path.join(__dirname, 'public')));

server.use(express.urlencoded({extended: true}))
server.use(express.json())

const port = process.env.PORT || 3006
server.listen(port, () => {
    console.log(`Servidor conectado na porta ${port} => ${__dirname}.`)
})
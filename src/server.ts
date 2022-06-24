import express, {Request, Response} from 'express';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';
import Routes from './routes/routes'

// Definir server
const server = express();

// Definir view-engine
server.set("view engine", "mustache")
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(Routes);

// Pasta com Arquivos Estaticos
server.use(express.static('public'));

// Porta do Servidor
server.listen(process.env.PORT);
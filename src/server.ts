import express, {Request, Response, urlencoded} from 'express';
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

// Pasta com Arquivos Estaticos
server.use(express.static('public'));

// Receber dados pelo metodo Post
server.use(express.urlencoded({extended: true}));

// Rotas
server.use(Routes);

// Porta do Servidor
dotenv.config();
server.listen(process.env.PORT);
import { Request, Response } from 'express';
import { sequelize } from '../instances/mysql';

export const getLogin = async (req: Request, res:Response)=>{

    try {
        await sequelize.authenticate()
        console.log("Conectado ao Banco de Dados");
    } catch (error) {
        console.log("Erro ao Conectar ao Banco de Dados: ", error);
    }

    res.render('login');
    
};

export const postLogin = async (req: Request, res: Response)=>{

};
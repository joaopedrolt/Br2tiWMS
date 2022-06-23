import { Request, Response } from 'express';
import { sequelize } from '../instances/mysql';

export const getCpu = async (req: Request, res:Response)=>{

    res.render('estoque');
    
};
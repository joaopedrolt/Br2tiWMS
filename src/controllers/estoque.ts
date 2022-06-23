import { Request, Response } from 'express';
import { sequelize } from '../instances/mysql';

export const getCpu = (req: Request, res: Response)=>{

    res.render('estoque');

};
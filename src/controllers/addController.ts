import { Request, Response } from 'express';

const showAddCpu: boolean = true;

export const getAdd = async (req: Request, res:Response)=>{

    res.render('estoque', {
        showAddCpu
    });
    
};
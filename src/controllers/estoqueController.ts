import { Request, Response } from 'express';
import { Cpu } from '../models/Cpu';

const showCpu: boolean = true;

export const getCpu = async (req: Request, res:Response)=>{

    var processadores;

    try {
        processadores = await Cpu.findAll();
        //console.log("9999999999999999999999999::: ", JSON.stringify(processadores));
    } catch (error) {
        console.log("Erro ao carregar os procesadores: ", error);
    }

    res.render('estoque', {
        processadores,
        showCpu
    });
    
};
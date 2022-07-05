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

    res.render('estoqueCpu', {
    });
    
};

export const addIdade = async (req: Request, res:Response)=>{
    let id = req.params.id
    
    try {

        let rowResults = await Cpu.findAll({
            where: {id}
        })
        
        if (rowResults.length > 0 ){
            let row = rowResults[0]; 
            row.quantidade++;
            await row.save();
        }

    } catch (error) {
        console.log("Erro ao Atualizar o valor: ", error)
    }

    res.redirect("/estoque/cpu")
};


export const diminuirIdade = async (req: Request, res:Response)=>{
    let id = req.params.id
    
    try {

        let rowResults = await Cpu.findAll({
            where: {id}
        })
        
        if (rowResults.length > 0 ){
            let row = rowResults[0]; 
            row.quantidade--;
            await row.save();
        }

    } catch (error) {
        console.log("Erro ao Atualizar o valor: ", error)
    }

    res.redirect("/estoque/cpu")
};
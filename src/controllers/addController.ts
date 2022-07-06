import { Request, Response } from 'express';
import { Cpu } from '../models/Cpu';

var showAddAlert = false;

export const getAdd = (req: Request, res:Response)=>{

    res.render('addCpu', {
    });
    
};

export const postAdd = async (req: Request, res:Response)=>{
    
    let error = false;
    
    let modelo = req.body.modelo;
    console.log(modelo);
    let quantidade = req.body.quantidade;
    let gaveta = req.body.gaveta;

    if(modelo != "" && quantidade != ""){
        try {
            quantidade = parseInt(quantidade);
            gaveta = parseInt(quantidade);
            console.log(gaveta);
/*             await Cpu.create({
                modelo,
                quantidade,
                gaveta
            }); */

            showAddAlert = true;

            res.redirect('/estoque/cpu');

        } catch (error) {
            console.log("Não foi possivel add esse item: ");
        }

        res.redirect('/estoque/cpu');

    }else{
        error = true
        console.log(error);
        res.render('addCpu', {
            error
        });    
    }
    
};

export function getAddAlert(){
    return showAddAlert;
}

export function setAddAlert(){
    showAddAlert = false;
}
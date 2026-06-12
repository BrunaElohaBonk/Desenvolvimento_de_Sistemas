import { Request, response, Response } from "express";
import { registerChamadoDto, updateChamadoDto } from "../dtos/chamadoDTO";
import { prisma } from "../lib/prisma";
import { registerChamado } from "../services/chamado.service";

export default class ChamadoController {
    static async create(req: Request, res: Response){
        const data: registerChamadoDto = req.body
        try{
            await registerChamado(data)
            return res.status(200).send({ response: "Chamado registrado com sucesso!"})
        }
        catch(e){
            return res.status(500).send({ response: "Ocorreu algum erro no servidor!"})
        }
    }
        
    static async show(req: Request, res: Response){
        const chamados = await prisma.chamado.find()
        return res.status(200).send({ response: chamados })
    }
        
    static async showById(req: Request, res: Response){
        const {id} = req.params;
        const exist = await prisma.chamado.findById(id);
        if(!exist) {
            return res.status(404).send({response:"Chamado não encontrado."})
        }

        return res.status(200).send(exist)
    }
        
    static async update(req: Request, res: Response){
        const {id} = req.params
        const {title, description, sector, priority, status, createdAt} = req.body
        await prisma.chamado.findByIdAndUpdate(id, {title, description, sector, priority, status, createdAt})
        return res.status(200).send({ response: `Chamado ${title} atualizado!`})
    }
        
    static async delete(req: Request, res: Response){
        const {id} = req.params
        await prisma.chamado.findByIdAndDelete(id)
        return res.status(200).send({ response: "Chamado deletado!" })
    }
        
    static async start(req: Request, res: Response){
        
    }
       
    static async finish(req: Request, res: Response){
        
    }
}
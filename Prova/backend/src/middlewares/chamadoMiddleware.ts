import { NextFunction, Request, Response} from "express";
import { prisma } from "../lib/prisma.js";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const {title, description, sector, priority, status} = req.body
        if(!title || !description || !sector || !priority || !status){
            return res.status(400).send({response: `Preencha todos os campos para prosseguir!`})
        }
}

export const validateUpdate = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { title } = req.body
    const { description } = req.body
    const { sector } = req.body
    const { priority } = req.body
    const { status } = req.body
    const { createdAt } = req.params

    const titleExists = prisma.chamado.findById(id);

    if(titleExists == title){
        return res.status(400).send({response: `O chamado já existe.`})
    }
    next();
}

export const validateDelete = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { title } = req.body
    const { description } = req.body
    const { sector } = req.body
    const { priority } = req.body
    const { status } = req.body
    const { createdAt } = req.params

    const deletar = prisma.chamado.findById(id)

    if(!deletar){
        return res.status(400).send({response: `Chamado não existe`})
    }
    next();
}
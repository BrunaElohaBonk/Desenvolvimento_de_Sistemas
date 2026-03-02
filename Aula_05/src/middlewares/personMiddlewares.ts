import { Request, Response, NextFunction, response } from "express";
import Person from "../models/Person";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, lastname } = req.body
    if(!name || !lastname){
        return res.status(400).send({response: `Existem dados vazios.`})
    }

    next();
}

export const validateUpdate = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const { name } = req.body
    const { lastname } = req.body
    const nameExists = await Person.findById(id);
    const lastnameExists = await Person.findById(id);
    if(nameExists == name || lastnameExists == lastname){
        return res.status(400).send({response: `O usuário já existe.`})
    }

    next();
}

export const validateDelete = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const deletar = await Person.findById(id)
    if(!deletar){
        return res.status(400).send({response: `Usuário não existe`})
    }

    next();
}
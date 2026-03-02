import { Request, Response } from "express";
import Person from "../models/Person.ts";

class PersonController {
    static async getUsers(req: Request, res: Response) {
        const users = await Person.find()
        return res.status(200).send({ response: users })
    }
    static async postUsers(req: Request, res: Response) {
        const users = await Person.find()
        const { name, lastname } = req.body
        return res.status(200).send({ response: `Usuário ${name} ${lastname} cadastrado!` })
    }
}


export default PersonController
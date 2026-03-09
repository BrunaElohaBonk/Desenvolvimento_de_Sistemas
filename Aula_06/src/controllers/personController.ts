import { Request, Response } from "express";
import Person from "../models/Person.ts";

class PersonController {
    static async getUsers(req: Request, res: Response) {
        const users = await Person.find()
        return res.status(200).send({ response: users })
    }

    static async postUsers(req: Request, res: Response) {
        const { name, lastname } = req.body
        const users = new Person({ name, lastname })
        await users.save()
        return res.status(200).send({ response: `Usuário ${name} ${lastname} cadastrado!` })
    }

    static async putUsers(req: Request, res: Response) {
        const {id} = req.params
        const {name, lastname} = req.body
        await Person.findByIdAndUpdate(id, {name, lastname})
        return res.status(200).send({ response: "Usuário atualizado!"})
    }

    static async deleteUsers(req: Request, res: Response) {
        const {id} = req.params
        await Person.findByIdAndDelete(id)
        return res.status(200).send({ response: "Usuário deletado!" })
    }
}

export default PersonController
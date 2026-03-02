import express, { Request, response, Response, Router } from 'express';
import Person from '../models/Person.ts'
import PersonController from '../controllers/personController.ts';
const router: Router = express.Router();

router
    .post('/cadastro', PersonController.postUsers)
    .get('/usuarios', PersonController.getUsers)

    // .post('/add', async(req: Request, res: Response) => {
    //     const {name, lastname,age } = req.body
    //     const person = new Person({name,lastname,age})
    //     await person.save()
    //     res.status(200).send({ response: `Bem vindo ${name}` })
    // })

    // .get('/access', async(req: Request, res: Response) => {
    //     const people = await Person.find({name:"Lays"})
    //     res.status(200).send({response:people})
    // })
    // .get('/access/:id', async(req: Request, res: Response) => {
    //     const people = await Person.findById
    //     return res.status(500).send({response:people })
    // })
    
    // .put('/update/:id', (req: Request, res: Response) => {
    //     const { name, email, tipo, ativo } = req.body
    //     const { id } = req.params
    //     let idzao = Number(id)
    //     res.status(500).send({})
    // })
    
    // .get('/filter', (req: Request, res: Response) => {
    //     const { tipo } = req.query
    //     res.status(200).send({ })
    // })
    // .patch('/updateName/:id', (req: Request, res: Response) => {
    //     const { name } = req.body
    //     const { id } = req.params
    //     let idzao = Number(id)
    //     res.status(200).send({ response: `Dados do usuario ${name} está atualizado` })

    // })
    // .patch('/updateAtivo/:id', (req: Request, res: Response) => {
    //     const { ativo } = req.body
    //     const { id } = req.params
    //     let idzao = Number(id)
       
    //     res.status(200).send({ response: `Dados do usuario está atualizado` })

    // })
    // .delete('/delete/:id', (req: Request, res: Response) => {
    //     const { id } = req.params
    //     let idzao = Number(id)

    // })

export default router;
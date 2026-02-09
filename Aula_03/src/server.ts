import express, { response } from 'express'
import routes from './routes/routes.ts'

const port = 8080
const app = express()

routes(app)

app.get('/', (req, res) => {
    res.status(200).send({response: "Api funcionando!"})
})

// const pessoas = [
//     {
//         nome: "Vitoria"
//     },
//     {
//         nome: "Thales"
//     }
// ]

// const pessoa = {
//     name: "Bruna",
//     lastname: "Bonk"
// }

// app.get('/objeto', (req, res) => {
//     res.send({ pessoa: pessoa })
// })

// app.get('/direto', (req, res) => {
//     res.send({ pessoas })
// })

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
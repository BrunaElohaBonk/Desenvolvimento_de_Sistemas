import express, { response } from 'express'

const port = 8080
const app = express()

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
import express, { response } from 'express'

const port = 8080
const app = express()

app.get('/',(req,res) => {
    res.status(200).send({response: "API Funcionando!"})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
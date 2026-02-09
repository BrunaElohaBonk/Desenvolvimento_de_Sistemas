import express, { response } from 'express'

const port = 8080
const app = express()

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
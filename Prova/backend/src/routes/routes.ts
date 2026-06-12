import { Express } from 'express'
import express from 'express'
import chamado from './chamados.js'

export default function (app: Express) {
    app
       .use(express.json())
       .use('/api/chamados', chamado)

}
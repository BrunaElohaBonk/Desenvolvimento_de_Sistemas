import { Express } from 'express';
import express from 'express'
import auth from './auth.ts'
import Product from '../routes/product.ts';


export default function (app: Express) {
app
    .use(express.json())
    .use('/api/auth/product', Product)
    .use('/api/auth', auth)
}
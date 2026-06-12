import { Params } from "react-router-dom"
import { registerChamadoDto, updateChamadoDto } from "../dtos/chamadoDTO.js"
import { prisma }  from '../lib/prisma.js'

export const registerChamado = async (data: registerChamadoDto)=>{
   const { id, title, description, sector, priority, status, createdAt } = data
   return await prisma.chamado.create({
      data: {id, title, description, sector, priority, status, createdAt}
   })
}

export const showChamados = async ()=>{
   return await prisma.chamado.findMany()
}

export const showChamadoById = async (id: Params)=>{
   return await prisma.chamado.findMany(id)
}

export const updateChamado = async (id: Params, data: updateChamadoDto)=>{
   const { title, description, sector, priority, status, createdAt } = data
   return await prisma.chamado.update(id)({
      data: {id, title, description, sector, priority, status, createdAt}
   })
}

export const deleteChamado = async (id: Params)=>{
   return await prisma.chamado.delete(id)
}

export const startChamado = async (id: Params)=>{
   
}

export const finishChamado = async (id: Params)=>{
   
}
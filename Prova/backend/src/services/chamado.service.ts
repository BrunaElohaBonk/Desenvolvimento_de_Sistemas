import { registerChamadoDto, updateChamadoDto } from "../dtos/chamadoDTO"
import { prisma }  from '../lib/prisma'

export const registerChamado = async (data: registerChamadoDto)=>{
   const { id, title, description, sector, priority, status, createdAt } = data
   return await prisma.chamado.create({
      data: {id, title, description, sector, priority, status, createdAt}
   })
}

export const showChamados = async ()=>{
   return await prisma.chamado.findMany()
}

export const showChamadoById = async (id)=>{
   const {id} = req.params
   return await prisma.chamado.findMany(id)
}

export const updateChamado = async (id,data)=>{
}

export const deleteChamado = async (id)=>{
}

export const startChamado = async (id)=>{
}

export const finishChamado = async (id)=>{
}
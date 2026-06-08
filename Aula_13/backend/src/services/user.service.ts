import { registerUserDto, updateUserDto } from "../dtos/userDTO"
import { prisma }  from '../lib/prisma'

export const registerUser = async (data: registerUserDto) => {
   const { name, email, password } = data
    return await prisma.user.create({
    data: {name, email, password}
   })
}

export const showUsers = async () => {
   return await prisma.user.findMany()
}

export const updateUser = async (data: updateUserDto) => {
   
}

export const deleteUser = async (data: updateUserDto) => {
   
}
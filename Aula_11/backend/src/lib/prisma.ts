import { PrismaClient } from "@prisma/client/extension"

// npm i @prisma/client

export const prisma = new PrismaClient({
    log: ['query']
})
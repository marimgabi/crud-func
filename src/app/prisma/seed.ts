import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.funcionario.create({
        data: {
            name: "Funcionario 1",
            email: "teste@email.com",
            department: "rh",
            date: new Date()
        }
    })
}

main().then(async () => {
    await prisma.$disconnect
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect
    process.exit(1)
})
import { NextResponse } from "next/server";
import prisma from "@/app/prisma/client";

/**
 * @swagger
 * /api/funcionario:
 *   get:
 *     description: Retorna todos os funcionários cadastrados
 *     responses:
 *       200:
 *         description: Sucess.
 *       500:
 *         description: API error.
 */
export const GET = async (req: Request) => {
    
    try{
        const funcionarios = await prisma.funcionario.findMany() 
        return NextResponse.json(funcionarios, {status: 200})
    } catch (err) {
        return NextResponse.json(
            {message: "Error", err},
            {status: 500}
        )
    }

};

/**
 * @swagger
 * /api/funcionario:
 *   post:
 *     description: Cadastra um novo funcionário
 *     responses:
 *       201:
 *         description: Created.
 *       500:
 *         description: API error.
 */
export const POST = async (req: Request) => {
    // const funcionario = await req.json()

    try{
        const funcionario = await req.json()
        
        const data = await prisma.funcionario.create({
            data: funcionario
        })

        return NextResponse.json(data, {status: 201})
    } catch (err){
        return NextResponse.json(
            {message: "Error", err},
            {status: 500}
        )
    }
}
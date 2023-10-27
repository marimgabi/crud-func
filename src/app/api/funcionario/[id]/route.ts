import { NextResponse } from "next/server"
import prisma from "@/app/prisma/client"

/**
 * @swagger
 * /api/funcionario:
 *   get:
 *     description: Busca funcionário por ID
 *     responses:
 *       200:
 *         description: Created.
 *       500:
 *         description: API error.
 *     params:
 *       id:
 *         description: ID do funcionário 
 */
export const GET = async (
    req: Request,
    {params}: {params: {id: number}} 
) => {
    try{
        const funcionario = await prisma.funcionario.findFirstOrThrow({
            where: {
                id: +params.id
            }
        })
        return NextResponse.json(
            funcionario,
            {status: 200}
        )
    }catch(err){
        return NextResponse.json(
            {message: "Error", err},
            {status: 500}
        )         
    }
}

export const PUT = async (
    req: Request,
    {params}: {params: {id: number}}
    ) => {
    try{
        const request = await req.json()
        const {name, email, department} = request 

        const funcionario = await prisma.funcionario.update({
            where: {
                id: +params.id
            },
            data: {
                name: name,
                email: email,
                department: department
            }
        })
        return NextResponse.json(
            funcionario,
            {status: 200}
        )
    }catch(err){
        return NextResponse.json(
            {message: "Error", err},
            {status: 500}
        )         
    }
}

export const DELETE = async (
    req: Request,
    {params}: {params: {id: number}} ) => {
    try{
        const funcionario = await prisma.funcionario.delete({
            where: {
                id: +params.id
            }
        })
        return NextResponse.json(
            funcionario,
            {status: 200}
        )
    }catch(err){
        return NextResponse.json(
            {message: "Error", err},
            {status: 500}
        )         
    }
}
'use server'

import bcrypt from "bcrypt";
import prisma from "./prisma";

export async function saltAndHashPassword(password: string): Promise<string>{
    console.log(password)
    const hashedPassword = bcrypt.hashSync(password, 10)
    console.log(hashedPassword)
    return hashedPassword
}

export async function isCorrectPassword(password: string, hashedPassword: string): Promise<boolean>{
    console.log(password)
    const result = bcrypt.compareSync(password, hashedPassword)
    console.log(result)
    return result
}

export async function getUserFromDb(email: string){
    if (!email) throw new Error("Datos requeridos");

    const user = await prisma.user.findFirst({
        where: {
            email: email,
        }
    });

    return user
}
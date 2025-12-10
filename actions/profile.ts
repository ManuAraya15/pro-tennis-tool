"use server"

import { auth } from "@/auth"
import { User } from "@/generated/prisma"
import prisma from "@/lib/prisma"

export async function getProfileInfo(): Promise<ActionResponse<User>> {

    try {
        const session = await auth()
        const userId = session?.user?.id

        if (!userId) return {
            message: "Hubo un problema al obtener el id de la session",
            success: false
        }

        const user: User | null = await prisma.user.findFirst(
            {
                where: {
                    id: parseInt(userId)
                },
            }
        )

        if (!user) return {
            success: false,
            message: "Usuario no encontrado"
        }

        return {
            message: "Perfil encontrado",
            success: true,
            data: user
        }

    } catch (error) {
        console.log(error)
        return {
            message: error + "",
            success: false
        }
    }
}

export async function updateProfileInfo(prevState: any, formData: FormData): Promise<ActionResponse<User>> {

    try {

        const name: string | null = formData.get('name') as string | null
        const age: string | null = formData.get('age') as string | null
        const sex: string | null = formData.get('sex') as string | null
        const objectives: string | null = formData.get('objectives') as string | null
        const avilability: string | null = formData.get('avilability') as string | null

        console.log(name)
        console.log(age)
        console.log(sex)
        console.log(objectives)
        console.log(avilability)
        

        const session = await auth()
        const userId = session?.user?.id

        if (!userId) return {
            message: "Hubo un problema al obtener el id de la session",
            success: false
        }

        const user: User | null = await prisma.user.update(
            {
                where: {
                    id: parseInt(userId)
                },
                data: {
                    name: name? name: undefined,
                    age: age? parseInt(age): undefined,
                    sex: sex? sex: undefined,
                    objectives: objectives? objectives: undefined,
                    avilability: avilability? avilability: undefined,
                }
            }
        )

        if (!user) return {
            success: false,
            message: "Usuario no encontrado"
        }

        return {
            message: "Perfil actulizado",
            success: true,
            data: user
        }

    } catch (error) {
        console.log(error)
        return {
            message: error + "",
            success: false
        }
    }
}
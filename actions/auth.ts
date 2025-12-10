'use server'

import { signIn } from "@/auth"
import { User } from "@/generated/prisma"
import { saltAndHashPassword } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { AuthError } from "next-auth"

export async function signup(prevState: any, formData: FormData): Promise<ActionResponse<User>> {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirm-password') as string

    if (!email || !password || !confirmPassword) return {
        message: "Debe completar todos los campos",
        success: false
    }
    if (password !== confirmPassword) return {
        message: "Las contraseñas no coinciden",
        success: false
    }
    const userCheck = await prisma.user.findFirst({ where: { email: email } })
    if (userCheck) return {
        success: false,
        message: "Usted ya se ha registrado con este correo",
    }

    const hashedPassword = await saltAndHashPassword(password)

    const user = await prisma.user.create({
        data: {
            email: email,
            password: hashedPassword,
        }
    })

    await signIn("credentials", { email, password, redirectTo: "/matches" })

    return {
        success: true,
        message: "Usuario creado",
        data: user
    }
}

export async function login(prevState: any, formData: FormData): Promise<ActionResponse<void>> {
    try {
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        if (!email || !password) return {
            success: false,
            message: "Debe completar los campos"
        }

        // Check user email in db exist
        const user = await prisma.user.findFirst({ where: { email: email } })
        if (!user) return {
            success: false,
            message: "Email no registrado"
        }

        await signIn("credentials", { email, password, redirectTo: "/matches" })
        console.log()
        return {
            success: true,
            message: "Bienvenido " + email
        }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        success: false,
                        message: 'Credenciales inválidas. Verifica tu email y contraseña.'
                    };
                case 'CallbackRouteError':
                    // Podría indicar un error durante la sesión o JWT.
                    return {
                        success: false,
                        message: 'Error interno de autenticación. Intenta de nuevo.'
                    };
                default:
                    return {
                        success: false,
                        message: 'Error desconocido de autenticación.'
                    };
            }
        }
        if (error instanceof Error) {
            if (error.message === 'NEXT_REDIRECT') {
                throw error
            }
            console.log(error)
            return {
                success: false,
                message: error.message
            }
        }

        return {
            success: false,
            message: error + ""
        }
    }
}
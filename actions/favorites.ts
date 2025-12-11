'use server'

import { auth } from "@/auth";
import { User } from "@/generated/prisma";
import prisma from "@/lib/prisma";

export async function addFavoritePlayer(playerId: number): Promise<ActionResponse<User>> {
    try {
        const session = await auth()
        const userId = session?.user?.id

        if (!userId) return {
            success: false,
            message: "Problema al obtener el id de la sesion"
        }

        const user: User | null = await prisma.user.update({
            data: {
                favorites: {
                    connect: {
                        id: playerId
                    }
                }
            }, 
            where: {
                id: parseInt(userId)
            }
        })

        if (!user) return {
            success: false,
            message: "Usuario no encontrado"
        }

        return {
            success: true,
            message: "Jugador agregado a favoritos",
            data: user
        }

    } catch (error) {
        return {
            success: false,
            message: error + ""
        }
    }
}

export async function deleteFavoritePlayer(playerId: number): Promise<ActionResponse<User>> {
    try {
        const session = await auth()
        const userId = session?.user?.id

        if (!userId) return {
            success: false,
            message: "Problema al obtener el id de la sesion"
        }

        const user: User | null = await prisma.user.update({
            data: {
                favorites: {
                    disconnect: {
                        id: playerId
                    }
                }
            }, 
            where: {
                id: parseInt(userId)
            }
        })

        if (!user) return {
            success: false,
            message: "Usuario no encontrado"
        }

        return {
            success: true,
            message: "Jugador removido de los favoritos",
            data: user
        }

    } catch (error) {
        return {
            success: false,
            message: error + ""
        }
    }
}

export async function getFavoritePlayers(): Promise<ActionResponse<Array<User>>> {
    try {
        const session = await auth()
        const userId = session?.user?.id

        if (!userId) return {
            success: false,
            message: "Problema al obtener el id de la sesion"
        }

        const user = await prisma.user.findFirst({ 
            where: {
                id: parseInt(userId)
            },
            include: {
                favorites: true
            }
        })

        if (!user) return {
            success: false,
            message: "Usuario no encontrado"
        }

        return {
            success: true,
            message: "Jugador agregado a favoritos",
            data: user.favorites
        }

    } catch (error) {
        return {
            success: false,
            message: error + ""
        }
    }
}
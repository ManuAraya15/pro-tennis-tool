"use server"

import { auth } from "@/auth"
import { Match, User } from "@/generated/prisma"
import prisma from "@/lib/prisma"

export async function addMatch(prevState: any, formData: FormData): Promise<ActionResponse<Match>> {
    try {
        const dateString = formData.get('date') as string

        console.log(dateString)
        const date = new Date(dateString);
        const location = formData.get('location') as string
        const title = formData.get('title') as string
        console.log(date)
        console.log(location)
        console.log(title)



        const session = await auth()
        console.log(session)
        const sessionUserId = session?.user?.id
        console.log(sessionUserId)

        if (!sessionUserId) return {
            success: false,
            message: "Usuario no autenticado"
        }

        const newMatch = await prisma.match.create({
            data: {
                date: date,
                location: location,
                title: title,
                adminId: parseInt(sessionUserId)
            }
        })
        console.log(newMatch)

        return {
            success: true,
            message: "Partido creado",
            data: newMatch
        }
    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: error + "",
        }
    }
}

export async function getMatches(): Promise<ActionResponse<Array<Match>>> {
    try {

        const session = await auth()
        const sessionUserId = session?.user?.id

        if (!sessionUserId) return {
            message: "Debe iniciar sesion para obtener sus partidos",
            success: false
        }

        const matches = await prisma.match.findMany(
            {
                where: {
                    AND: [
                        {

                            OR: [
                                {
                                    adminId: parseInt(sessionUserId)
                                },
                                {
                                    players: {
                                        some: {
                                            id: parseInt(sessionUserId)
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            date: {
                                gt: new Date()
                            }
                        }
                    ]
                },
                orderBy: {
                    date: 'asc'
                }
            }
        )

        return {
            message: "Partidos obtenidos",
            success: true,
            data: matches
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: error + "",
        }
    }
}
export async function getMatchInvitations(): Promise<ActionResponse<Array<Match>>> {
    try {

        const session = await auth()
        const sessionUserId = session?.user?.id

        if (!sessionUserId) return {
            message: "Debe iniciar sesion para obtener sus partidos",
            success: false
        }

        const invitations = await prisma.match.findMany(
            {
                where: {
                    OR: [
                        {
                            usersInvited: {
                                some: {
                                    id: parseInt(sessionUserId)
                                }
                            }
                        }
                    ]
                },
            }
        )

        return {
            message: "Partidos obtenidos",
            success: true,
            data: invitations
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: error + "",
        }
    }
}

export async function getLastResults(): Promise<ActionResponse<Array<Match>>> {
    try {

        const session = await auth()
        const sessionUserId = session?.user?.id

        if (!sessionUserId) return {
            message: "Debe iniciar sesion para obtener sus partidos",
            success: false
        }

        const matches = await prisma.match.findMany(
            {
                where: {
                    AND: [
                        {

                            OR: [
                                {
                                    adminId: parseInt(sessionUserId)
                                },
                                {
                                    players: {
                                        some: {
                                            id: parseInt(sessionUserId)
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            date: {
                                lt: new Date()
                            }
                        }
                    ]
                },
                orderBy: {
                    date: 'asc'
                }
            }
        )

        return {
            message: "Partidos obtenidos",
            success: true,
            data: matches
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: error + "",
        }
    }
}

export type MatchDetailInterface = Match & {
    admin: User,
    players: User & {
        favoritesBy: User[]
    }[],
    usersInvited: User & {
        favoritesBy: User[]
    }[]
}

export async function getMatch(id: string) {
    try {

        const match = await prisma.match.findFirst(
            {
                where: {
                    id: parseInt(id)
                },
                include: {
                    admin: true,
                    players: {
                        include: {
                            favoritedBy: true
                        }
                    },
                    usersInvited: {
                        include: {
                            favoritedBy: true
                        }
                    },
                }
            }
        )

        if (!match) return {
            message: "Partido no encontrado",
            success: false
        }

        return {
            message: "Partido obtenido",
            success: true,
            data: match
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: error + "",
        }
    }
}

export async function invitePlayer(prevState: any, formData: FormData): Promise<ActionResponse<Match>> {
    try {
        const matchId = formData.get('matchId') as string
        const playerId = formData.get('playerId') as string

        if (!matchId) return {
            message: "Ha habido un problema para enviar el id del partido",
            success: false
        }

        if (!playerId) return {
            message: "Debe seleccionar un jugador",
            success: false
        }

        console.log(matchId)
        console.log(playerId)

        const match: Match | null = await prisma.match.update(
            {
                data: {
                    usersInvited: {
                        connect: {
                            id: parseInt(playerId)
                        }
                    }
                },
                where: {
                    id: parseInt(matchId)
                },
            }
        )

        console.log(match)

        if (!match) return {
            message: "No se pudo encontrar el partido",
            success: false
        }

        return {
            message: "Invitacion enviada",
            success: true,
            data: match
        }

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: error + "",
        }
    }
}


export interface OptionUsers {
    id: number,
    email: string,
}


export async function getOptionUsers(userId: string): Promise<OptionUsers[]> {
    try {
        const users: User[] | null = await prisma.user.findMany(
            {
                where: {
                    id: {
                        not: parseInt(userId)
                    }
                },
            }
        )


        if (users === null || users === undefined) return []

        return users

    } catch (error) {
        console.log(error)
        return []
    }
}

export async function acceptInvitation(matchId: number): Promise<ActionResponse<Match>> {

    try {
        const session = await auth()
        const userId = session?.user?.id

        if (!userId) return {
            message: "Hubo un problema al obtener el id de la session",
            success: false
        }
        const match: Match | null = await prisma.match.update(
            {
                where: {
                    id: matchId
                },
                data: {
                    usersInvited: {
                        disconnect: {
                            id: parseInt(userId)
                        }
                    },
                    players: {
                        connect: {
                            id: parseInt(userId)
                        }
                    }
                }
            }
        )

        return {
            message: "invitacion aceptada",
            success: true,
            data: match
        }

    } catch (error) {
        console.log(error)
        return {
            message: error + "",
            success: false
        }
    }
}
export async function declineInvitation(matchId: number): Promise<ActionResponse<Match>> {

    try {
        const session = await auth()
        const userId = session?.user?.id

        if (!userId) return {
            message: "Hubo un problema al obtener el id de la session",
            success: false
        }

        const match: Match | null = await prisma.match.update(
            {
                where: {
                    id: matchId
                },
                data: {
                    usersInvited: {
                        disconnect: {
                            id: parseInt(userId)
                        }
                    },
                }
            }
        )

        return {
            message: "Invitacion rechazada",
            success: true,
            data: match
        }

    } catch (error) {
        console.log(error)
        return {
            message: error + "",
            success: false
        }
    }
}

export async function updateMatch(prevState: any, formData: FormData): Promise<ActionResponse<Match>> {

    try {

        const matchId: string | null = formData.get('matchId') as string | null
        const title: string | null = formData.get('title') as string | null
        const dateString: string | null = formData.get('date') as string | null
        const result: string | null = formData.get('result') as string | null
        const location: string | null = formData.get('location') as string | null

        console.log(matchId)
        console.log(title)
        console.log(dateString)
        console.log(result)
        console.log(location)

        if (!matchId) return {
            message: "Hubo un problema al obtener el id del partido",
            success: false
        }

        const match: Match | null = await prisma.match.update(
            {
                where: {
                    id: parseInt(matchId)
                },
                data: {
                    title: title ? title : undefined,
                    date: dateString ? new Date(dateString) : undefined,
                    location: location ? location : undefined,
                    result: result ? result : undefined,
                }
            }
        )
        console.log(match)

        if (!match) return {
            success: false,
            message: "Partido no encontrado"
        }

        return {
            message: "Partido actualizado",
            success: true,
            data: match
        }

    } catch (error) {
        console.log(error)
        return {
            message: error + "",
            success: false
        }
    }
}

export async function deletePlayerFromMatch(matchId: number, playerId: number): Promise<ActionResponse<Match>> {

    try {
        const match: Match | null = await prisma.match.update(
            {
                where: {
                    id: matchId
                },
                data: {
                    players: {
                        disconnect: {
                            id: playerId
                        }
                    }
                }
            }
        )
        console.log(match)

        if (!match) return {
            success: false,
            message: "No se pudo encontrar el partido"
        }

        return {
            message: "Jugador removido del partido",
            success: true,
            data: match
        }

    } catch (error) {
        console.log(error)
        return {
            message: error + "",
            success: false
        }
    }
}

export async function deleteinvitationFromMatch(matchId: number, playerId: number): Promise<ActionResponse<Match>> {

    try {
        const match: Match | null = await prisma.match.update(
            {
                where: {
                    id: matchId
                },
                data: {
                    usersInvited: {
                        disconnect: {
                            id: playerId
                        }
                    }
                }
            }
        )
        console.log(match)

        if (!match) return {
            success: false,
            message: "No se pudo encontrar el partido"
        }

        return {
            message: "invitacion eliminada",
            success: true,
            data: match
        }

    } catch (error) {
        console.log(error)
        return {
            message: error + "",
            success: false
        }
    }
}
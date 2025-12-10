import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUserFromDb, isCorrectPassword } from "./lib/auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    jwt({ token, user }) {
      if (user) { 
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id as string
      return session
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Contraseña",
          placeholder: "*********",
        },
      },
      authorize: async (credentials) => {
        try {
          let user = null

          const rawPassword = credentials?.password
          const email = credentials?.email
          if (typeof rawPassword !== "string" || typeof email !== "string") return null

          user = await getUserFromDb(email)
          if (!user) {
            return null
          }

          const passwordMatch = await isCorrectPassword(rawPassword, user.password)
          if (!passwordMatch) return null

          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name,
          }

        } catch (error) {
          console.log(error)
          if (error instanceof Error) {
            console.log(error)
            throw new Error(error.message)
          }
          throw new Error("Error de autenticación")
        }
      },
    })
  ],
})
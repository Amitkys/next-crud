import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from '@/app/lib/prisma'
import {JWT} from 'next-auth/jwt'

const handler =  NextAuth({
    //configure jwt
    session: {
        strategy:  'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    //configure Authentication Providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    //prisma adapter to store users in db
    adapter: PrismaAdapter(prisma),
    callbacks: {
        //called when a jwt is created
        async jwt({token, user}: {token: JWT; user?: any}) {
            if(user) {
                token.id = user.id // store userId in the token
            }
            return token;
        },
        // called whenever a session is checked
        async session({session, token}: {session:any; token: JWT}){
            if(token) {
                session.user.id = token.id // add user id to the session
            }
            return session;
        },
         async redirect({ url, baseUrl }) {
            // Always redirect to the dashboard after login
            return `${baseUrl}/todos`;
        },

    },
})

export {handler as GET, handler as POST};
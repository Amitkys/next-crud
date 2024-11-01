import { authOptions } from "@/app/lib/auth";
import NextAuth from "next-auth";
// Define and export authOptions for reuse
/*
export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: any }) {
            if (user) {
                token.id = (user as any).id;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: JWT }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        },
        async redirect({ url, baseUrl }) {
            return `${baseUrl}/todos`;
        },
    },
};
*/

// Export the handler for the NextAuth API route
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };





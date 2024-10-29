"use client";

import { signIn, useSession } from "next-auth/react";

export function Navbar() {
    const { data: session, status } = useSession();

    if (!session) {
        return (
            <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>sign in with google</button>
        )
    }
}
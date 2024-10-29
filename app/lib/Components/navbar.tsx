"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function Navbar() {
    const { data: session, status } = useSession();

    if (!session) {
        return (
            <button onClick={() => signIn('google')}>sign in with google</button>
        )
    }

    return (
        <div>
            <span>
                <p>Welcome {session?.user.name}</p>
                <button onClick={() => signOut()}>logout</button>
            </span>
        </div>
    )
}
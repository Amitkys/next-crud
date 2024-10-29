"use client";

import { useSession } from "next-auth/react";

export function Navbar() {
    const {data:session, status} = useSession();
    return (
        <div>
            <p> Welcome: {session?.user.name}</p>

        </div>
    )
}
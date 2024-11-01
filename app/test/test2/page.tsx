"use client";

import { useRouter } from "next/navigation";

export default function (){
    const router = useRouter();
    return (
        <div>
            <h1>this is test 2</h1>
            <button onClick={() => router.push('/todos')}>click</button>
        </div>
    )
}
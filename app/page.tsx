"use client";
import { signIn } from "next-auth/react";
import { Navbar } from "@/app/lib/Components/navbar";


export default function signInButton() {
  return (
  <div>
    <Navbar />
    <button onClick={() => signIn('google', {callbackUrl: '/dashboard'})}>
      sing in with google
    </button>
  </div>
  )
}
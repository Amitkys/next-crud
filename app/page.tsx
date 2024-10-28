"use client";
import { signIn } from "next-auth/react";


export default function signInButton() {
  return (
    <button onClick={() => signIn('google')}>
      sing in with google
    </button>
  )
}
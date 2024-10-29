"use client";
import { signIn } from "next-auth/react";
import { Navbar } from "@/app/lib/Components/navbar";


export default function signInButton() {
  return (
  <div>
    <Navbar />
  </div>
  )
}

// app/todos/create/page.tsx
"use client";
import React, { useState } from "react"
import { createTodo } from "@/app/lib/actions"
//toast
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

export default function Create() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        // create a FormData object to pass to the action
        const formData = new FormData(event.target as HTMLFormElement);

        try {
            const result = await createTodo(formData); // action function
            if(result.success) {
                toast.success(result.message);
                router.push('/todos');
            }else{
                toast.warn(result.message);
            }
        } catch (error: any) {
            toast.error('Something went wrong!');
        } finally {
            setLoading(false); // Re-enable the button after request
        }
    }
    return (
        <div>
        <form onSubmit={handleSubmit} method="POST">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" /> <br />
            <label htmlFor="description">Description</label>
            <input type="text" name="description" /> <br />
            <button type="submit" disabled={loading}>
                {loading ? "processing..." : "Create Todo"}
            </button>
        </form>
        </div>
    )
}

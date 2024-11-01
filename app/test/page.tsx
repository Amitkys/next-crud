"use client";
import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function test() {
    const notify = () => toast.success('Hello');
    return(
        <div>
            <button onClick={notify}>Notification</button>
        </div>
    )
}
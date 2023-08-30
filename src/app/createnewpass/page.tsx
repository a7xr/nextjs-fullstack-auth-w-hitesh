"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function CreateNewPagePage() {
    const [password, setPassword] = useState("")
    const onReset = async () => {}
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <label htmlFor="password">New password: </label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={password}
                onChange={() => setPassword(password)}
                placeholder="password"
            />
            <button
                onClick={onReset}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                    Reset
            </button>
        </div>
    )
}
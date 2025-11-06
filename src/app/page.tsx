"use client";
import { useEffect, useState } from "react";
export default function Home(){
    const [time, setTime] = useState("");
    useEffect(()=> {
        setTime(new Date().toLocaleTimeString());
        const interval = setInterval(()=>
            setTime(new Date().toLocaleTimeString()), 1000)
        return ()=> clearInterval(interval)
    },[])
    return(
        <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold mb-6">Welcome to Next.js First Assignment</h1>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg inline-block">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Current Time (CSR)</p>
                <p className="text-2xl font-mono font-semibold">{time}</p>
            </div>
        </div>
    )
}
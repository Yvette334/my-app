"use client";
import { useEffect, useState } from "react";
export default function Home(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(()=> {
        const interval = setInterval(()=>
            setTime(new Date().toLocaleTimeString()), 1000)
        return ()=> clearInterval(interval)
    },[])
    return(
        <div className="justify-center">
            <h2>Welcome to Next.js First Assignment</h2>
            <p>Current Time: {time}</p>
        </div>
    )
}
"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Wrap = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/home")
        }, 3000)
    }, []) 

    return <div className="w-full h-screen bg-cover bg-no-repeat bg-[url('/image/bg_home.png')]">
    </div>
}

export default Wrap
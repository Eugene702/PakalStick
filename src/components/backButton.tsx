"use client"

import { useRouter } from "next/navigation"


const BackButton = () => {
    const router = useRouter()
    return <button className="btn-menu" onClick={() => router.back()}>Kembali</button>
}

export default BackButton
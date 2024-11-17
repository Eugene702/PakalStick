import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import LogoUpi from "@/assets/image/logo-upi.png"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Permainan PAKAL Stik"
}

const BackButton = dynamic(() => import('@/components/backButton'))
const Wrap = dynamic(() => import('./wrap'))
const page = () => {
    return <div className="w-full h-screen bg-cover bg-no-repeat bg-[url('/image/plain_background.jpg')] flex flex-col justify-between relative">
        <div className="flex items-center gap-2 absolute top-[5%] left-[5%] transform -translate-x-[5] -translate-y-[5%]">
            <div className="w-2/4">
                <BackButton />
            </div>
            <Link href="/question" className="btn-menu w-2/4">Selanjutnya</Link>
        </div>

        <Image
            src={LogoUpi}
            width={0}
            height={0}
            sizes="100vw"
            alt="Logo UPI"
            className="w-2/12 absolute top-[5%] right-[5%] transform -translate-x-[5] -translate-y-[5%]" />

        <Wrap />
    </div>
}

export default page
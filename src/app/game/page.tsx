import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import LogoUpi from "@/assets/image/logo-upi.png"

export const metadata: Metadata = {
    title: "Permainan PAKAL Stik"
}

const BackButton = dynamic(() => import('@/components/backButton'))
const Wrap = dynamic(() => import('./wrap'))
const page = () => {
    return <div className="w-full h-screen bg-cover bg-no-repeat bg-[url('/image/plain_background.jpg')] flex flex-col justify-between">
        <div className="flex justify-between items-center p-10">
            <div className="max-w-xs">
                <BackButton />
            </div>

            <Image
                src={LogoUpi}
                width={0}
                height={0}
                sizes="100vw"
                alt="Logo UPI"
                className="w-3/12" />
        </div>

        <Wrap />
    </div>
}

export default page
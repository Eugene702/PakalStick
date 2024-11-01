import { Metadata } from "next"
import Image from "next/image"
import LogoUpi from '@/assets/image/logo-upi.png'
import littleBoyMan from "@/assets/image/little_boy_man.png"
import littleGirl from "@/assets/image/little_girl.png"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
    title: "Roda Putar"
}

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'))
const SpinWheel = dynamic(() => import('./components/spinWheel'))

const page = () => {
    return <div className="w-full h-screen bg-cover bg-bottom bg-no-repeat bg-[url('/image/plain_background_with_grass.png')] flex flex-col justify-between">
        <div className="flex justify-between items-center p-20">
            <h1 className="text-7xl text-gray-200 font-semibold text-center w-full">RODA PUTAR</h1>
            <Image
                src={LogoUpi}
                width={0}
                height={0}
                sizes="100vw"
                alt="Logo Upi"
                className="w-3/12" />
        </div>

        <div className="grid grid-cols-4 px-10">
            <Image
                src={littleBoyMan}
                width={0}
                height={0}
                alt="Little Boy Man"
                sizes="100vw"
                className="w-11/12" />

            <SpinWheel />

            <Image
                src={littleGirl}
                width={0}
                height={0}
                alt="Litle Girl"
                sizes="100vw"
                className="w-11/12" />

            <MenuButtonList />
        </div>
    </div>
}

export default page
import { Metadata } from "next";
import Image from "next/image";
import LogoUpi from '@/assets/image/logo-upi.png'
import dynamic from "next/dynamic";
import figuresWithLittleKids from '@/assets/image/figures_with_little_kids.png'

export const metadata: Metadata = {
    title: "Tujuan Pembelajaran",
}

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'))
const page = () => {
    return <div className="w-full h-screen bg-cover bg-bottom bg-no-repeat bg-[url('/image/plain_background_with_grass.png')] flex flex-col justify-between">
        <div className="flex justify-between items-center p-20">
            <h1 className="text-7xl text-gray-200 font-semibold text-center w-full">TUJUAN PEMBELAJARAN</h1>
            <Image
                src={LogoUpi}
                width={0}
                height={0}
                sizes="100vw"
                alt="Logo Upi"
                className="w-3/12" />
        </div>

        <div className="grid grid-cols-3 items-center gap-6 p-10">
            <div className="p-10 bg-orange-400 rounded-2xl place-self-start">
                <p className="text-2xl mt-5">Peserta didik mampu melakukan perkalian dua bilangan cacah sampai 50 sampai 100</p>
            </div>
            <Image
                src={figuresWithLittleKids}
                width={0}
                height={0}
                alt="Figures With Little Kids"
                className="w-full" />
            <MenuButtonList />  
        </div>
    </div>
}

export default page
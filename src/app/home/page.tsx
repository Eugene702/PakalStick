import Image from "next/image"
import plants from '@/assets/image/plants.png'
import FiguresWithLittleKids from '@/assets/image/figures_with_little_kids.png'
import LogoUpi from '@/assets/image/logo-upi.png'
import dynamic from "next/dynamic"

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'))
const page = () => {
    return <div className="w-full h-screen bg-cover bg-bottom bg-no-repeat bg-[url('/image/plain_background_with_grass.png')] flex flex-col justify-between">
        <div className="flex justify-between items-center p-20">
            <h1 className="text-7xl text-gray-200 font-semibold text-center w-full">KONSEP PERKALIAN</h1>
            <Image
                src={LogoUpi}
                width={0}
                height={0}
                sizes="100vw"
                alt="Logo Upi"
                className="w-3/12" />
        </div>

        <div className="grid grid-cols-3 items-end">
            <Image
                src={plants}
                width={0}
                height={0}
                sizes="100vw"
                alt="Plants"
                className="w-8/12" />

            <Image
                src={FiguresWithLittleKids}
                width={0}
                height={0}
                sizes="100vw"
                alt="Plants"
                className="w-full" />

            <MenuButtonList />
        </div>
    </div>
}

export default page
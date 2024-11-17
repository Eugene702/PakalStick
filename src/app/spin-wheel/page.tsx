import { Metadata } from "next"
import Image from "next/image"
import LogoUpi from '@/assets/image/logo-upi.png'
import GrassWithviews from '@/assets/image/revision1/grass_with_views.jpg'
import dynamic from "next/dynamic"
import BoyPointing from '@/assets/image/revision1/boy_pointing.png'
import GirlsPointing from '@/assets/image/revision1/girls_pointing.png'
import "react-spin-game/dist/index.css"

export const metadata: Metadata = {
    title: "Roda Putar"
}

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'))
const SpinWheel = dynamic(() => import('./components/spinWheel'))

const page = () => {
    return <div className="relative w-full h-screen">
        <h1 className="text-gray-50 font-bold w-fit text-3xl lg:text-7xl uppercase absolute top-4 lg:top-10 left-2/4 transform -translate-x-2/4">konsep perkalian</h1>
        <div className="absolute right-0 bottom-[3%] w-4/12 lg:bottom-[10%]">
            <MenuButtonList />
        </div>

        <div className="absolute bottom-[2%] left-[20%] transform -translate-x-[20%] -translate-y-[2%] w-3/12">
            <section>
                <SpinWheel />
            </section>
        </div>

        <Image
            src={BoyPointing}
            width={0}
            height={0}
            alt="Boy Pointing"
            sizes="100vw"
            className="absolute left-0 bottom-0 w-2/12" />

        <Image
            src={GirlsPointing}
            width={0}
            height={0}
            alt="Boy Pointing"
            sizes="100vw"
            className="absolute left-[50%] bottom-0 w-[18%] tranform -translate-x-[50%]" />

        <Image
            src={LogoUpi}
            width={0}
            height={0}
            sizes="100vw"
            alt="Logo UPI"
            className="w-2/12 absolute right-5 top-4 lg:top-10 lg:right-10" />

        <Image
            src={GrassWithviews}
            width={0}
            height={0}
            sizes="100vw"
            alt="Grass With Views"
            className="w-full h-dvh" />
    </div>
}

export default page
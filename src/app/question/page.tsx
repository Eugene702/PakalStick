import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import LogoUpi from "@/assets/image/logo-upi.png"
import GrassWithviews from '@/assets/image/revision1/grass_with_views.jpg'

export const metadata: Metadata = {
    title: "Soal"
}

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'))
const QuestionForm = dynamic(() => import('./components/questionForm'))

const page = () => {
    return <div className="relative w-full h-screen">
        <div className="absolute right-0 bottom-[3%] w-4/12 lg:bottom-[10%]">
            <MenuButtonList />
        </div>

        <div className="absolute left-0 bottom-0 w-9/12 lg:w-8/12">
            <QuestionForm />
        </div>

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
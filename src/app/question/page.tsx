import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import LogoUpi from "@/assets/image/logo-upi.png"

export const metadata: Metadata = {
    title: "Soal"
}

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'))
const QuestionForm = dynamic(() => import('./components/questionForm'))

const page = () => {
    return <div className="w-full h-screen bg-cover bg-no-repeat bg-[url('/image/plain_background_with_grass.png')] flex flex-col justify-between">
        <div className="flex justify-end items-center p-10">
            <Image
                src={LogoUpi}
                width={0}
                height={0}
                sizes="100vw"
                alt="Logo UPI"
                className="w-3/12" />
        </div>

        <div className="grid grid-cols-4">
            <QuestionForm />
            <MenuButtonList />
        </div>
    </div>
}

export default page
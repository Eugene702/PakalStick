"use client"

import Image from "next/image"
import GrassWithviews from '@/assets/image/revision1/grass_with_views.jpg'
import LogoUpi from '@/assets/image/logo-upi.png'
import FlowerAndStonePlant from '@/assets/image/revision1/flower_and_stone_plant.png'
import ChildrenWithSetNumberAndAritmetic from '@/assets/image/revision1/children_with_set_number_and_aritmetic.png'
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const Wrap = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/home')
        }, 6000)
    }, [])

    return <div className="w-full h-screen relative">
        <h1 className="text-gray-50 font-bold w-fit text-3xl lg:text-7xl uppercase absolute top-4 lg:top-10 left-2/4 transform -translate-x-2/4">media pembelajaran</h1>
        <h1 className="text-gray-50 font-semibold w-fit text-2xl lg:text-6xl uppercase top-12 lg:top-28 left-2/4 transform -translate-x-2/4 absolute">gaskal stik</h1>
        <h1 className="text-white bg-black p-3 text-xs lg:text-5xl lg:p-4 rounded-xl font-semibold absolute bottom-2 left-2">Rosiana Mufliva, M.Pd. </h1>
        <h1 className="text-black bg-orange-200 p-2 text-sm lg:text-5xl lg:p-4 rounded-xl font-bold absolute bottom-48 right-7 text-center lg:bottom-[45%]">Disusun oleh <br /> Fathimah Az-Zahra</h1>

        <Image
            src={LogoUpi}
            width={0}
            height={0}
            sizes="100vw"
            alt="Logo UPI"
            className="w-2/12 absolute right-5 top-4 lg:top-10 lg:right-10" />

        <Image
            src={FlowerAndStonePlant}
            width={0}
            height={0}
            sizes="100vw"
            alt="Flower And Stone Plant"
            className="w-3/12 absolute left-2 bottom-12 lg:bottom-20" />
            
        <Image
            src={FlowerAndStonePlant}
            width={0}
            height={0}
            sizes="100vw"
            alt="Flower And Stone Plant"
            className="w-3/12 absolute right-2 bottom-0" />

        <Image
            src={ChildrenWithSetNumberAndAritmetic}
            width={0}
            height={0}
            sizes="100vw"
            alt="Flower And Stone Plant"
            className="w-6/12 absolute left-2/4 bottom-0 transform -translate-x-2/4 lg:bottom-0" />

        <Image
            src={GrassWithviews}
            width={0}
            height={0}
            sizes="100vw"
            alt="Grass With Views"
            className="w-full h-dvh" />
    </div>
}

export default Wrap
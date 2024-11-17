import { Metadata } from "next";
import Image from "next/image";
import LogoUpi from '@/assets/image/logo-upi.png';
import dynamic from "next/dynamic";
import GrassWithviews from '@/assets/image/revision1/grass_with_views.jpg'
import ChildrenWithNumberSets from "@/assets/image/revision1/children_with_number_sets.png"

export const metadata: Metadata = {
    title: "Tujuan Pembelajaran",
};

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'));
const page = () => {
    return <div className="relative w-full h-screen">
        <h1 className="text-gray-50 font-bold w-fit text-3xl lg:text-7xl uppercase absolute top-4 lg:top-10 left-2/4 transform -translate-x-2/4">Tujuan Pembelajaran</h1>
        <div className="absolute right-0 bottom-[3%] w-4/12 lg:bottom-[10%]">
            <MenuButtonList />
        </div>

        <div className="absolute left-[10%] top-[28%] transform -translate-y-[28%] -translate-x-[10%] w-8/12 lg:w-7/12">
            <div className="w-full flex gap-4 items-start">
                <div className="w-full bg-orange-400 p-4 rounded-xl h-fit mt-10 lg:mt-20">
                    <p className="text-sm lg:text-4xl">Peserta didik mampu melakukan perkalian dua bilangan cacah  50 sampai 100</p>
                </div>
                <div className="w-full bg-orange-400 p-4 rounded-xl h-fit">
                    <p className="text-sm lg:text-4xl">Peserta didik mampu mengetahui konsep dari perhitungan perkalian dua bilangan cacah 50 sampai 100</p>
                </div>
            </div>
        </div>

        <Image
            src={ChildrenWithNumberSets}
            width={0}
            height={0}
            alt="Children With Number Sets"
            sizes="100vw"
            className="absolute bottom-0 left-0 w-8/12" />

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
};

export default page;

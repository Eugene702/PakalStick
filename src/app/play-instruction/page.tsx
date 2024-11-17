import { Metadata } from "next";
import Image from "next/image";
import LogoUpi from '@/assets/image/logo-upi.png'
import dynamic from "next/dynamic";
import GrassWithviews from '@/assets/image/revision1/grass_with_views.jpg'
import FlowerAndStonePlant from '@/assets/image/revision1/flower_and_stone_plant.png'

export const metadata: Metadata = {
    title: "Petunjuk Bermain",
}

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'))
const page = () => {
    return <div className="relative w-full h-screen">
        <h1 className="text-gray-50 font-bold w-fit text-3xl lg:text-7xl uppercase absolute top-4 lg:top-10 left-2/4 transform -translate-x-2/4">Petunjuk bermain</h1>
        <div className="absolute right-0 bottom-[3%] w-4/12 lg:bottom-[10%]">
            <MenuButtonList />
        </div>

        <div className="p-4 rounded-xl bg-orange-300 absolute top-2/4 left-[47%] transform -translate-x-2/4 -translate-y-[47%] w-5/12 lg:p-6 lg:left-[44%] lg:-translate-x-[44%]">
            <ul className="text-[.7em] list-decimal ml-2 lg:ml-10 lg:text-4xl">
                <li>Pertama-tama, peserta didik diminta untuk memutar spin wheel angka sebanyak 2 kali untuk mendapatkan soal perkalian</li>
                <li>Lalu, peserta didik dapat menggunakan GASKAL Stik (Gelas Perkalian) untuk membantu menjawab soal perkalian yang didapatkan agar terlihat konsep dari perkalian yang sebenarnya </li>
                <li>Setelah menemukan jawaban, peserta didik diharapkan dapat mengetahui hasil dari soal yang didapatkan dan dapat melihat konsep nyata dari perhitungan perkalian  menggunakan GASKAL Stik</li>
                <li>Kemudian masukkan angka hasil spin wheel dan hasil dari penggunaan media GASKAL Stik ke dalam kotak yang telah disediakan di slide selanjutnya. </li>
            </ul>
        </div>

        <Image
            src={FlowerAndStonePlant}
            width={0}
            height={0}
            sizes="100vw"
            alt="Flower And Stone Plant"
            className="w-3/12 absolute left-2 bottom-0" />

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
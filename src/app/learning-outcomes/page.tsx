import { Metadata } from "next";
import Image from "next/image";
import LogoUpi from '@/assets/image/logo-upi.png'
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "Capaian Pembelajaran",
}

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'))
const page = () => {
    return <div className="w-full h-screen bg-cover bg-bottom bg-no-repeat bg-[url('/image/plain_background_with_grass.png')] flex flex-col">
        <div className="flex justify-between items-center p-20">
            <h1 className="text-7xl text-gray-200 font-semibold text-center w-full">CAPAIAN PEMBELAJARAN</h1>
            <Image
                src={LogoUpi}
                width={0}
                height={0}
                sizes="100vw"
                alt="Logo Upi"
                className="w-3/12" />
        </div>

        <div className="grid grid-cols-3 items-center gap-6 p-10">
            <div className="p-10 bg-orange-400 rounded-2xl">
                <h1 className="text-4xl font-bold text-center">Capaian Umum</h1>
                <p className="text-2xl mt-5">Pada akhir fase B, peserta didik dapat menunjukkan pemahaman dan intuisi bilangan (number sense) pada bilangan cacah sampai 10.000. Mereka dapat melakukan operasi penjumlahan dan pengurangan bilangan cacah sampai 1.000, dapat melakukan operasi perkalian dan pembagian bilangan cacah, dapat mengisi nilai yang belum diketahui dalam sebuah kalimat matematika, dan dapat mengidentifikasi, meniru, dan mengembangkan pola gambar atau obyek sederhana dan pola bilangan yang berkaitan dengan penjumlahan dan pengurangan bilangan cacah sampai 100.</p>
            </div>
            <div className="p-10 bg-orange-400 rounded-2xl">
                <h1 className="text-4xl font-bold text-center">Capaian per elemen</h1>
                <p className="text-2xl mt-5">Peserta didik dapat melakukan operasi perkalian dan pembagian bilangan cacah sampai 100 menggunakan benda-benda konkret, gambar dan simbol matematika. Mereka juga dapat menyelesaikan masalah berkaitan dengan kelipatan dan faktor. </p>
            </div>
            <MenuButtonList />  
        </div>
    </div>
}

export default page
import { Metadata } from "next";
import Image from "next/image";
import LogoUpi from '@/assets/image/logo-upi.png';
import GrassWithviews from '@/assets/image/revision1/grass_with_views.jpg'
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "Capaian Pembelajaran",
};

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'));

const page = () => {
    return <div className="relative w-full h-screen">
        <h1 className="text-gray-50 font-bold w-fit text-3xl lg:text-7xl uppercase absolute top-4 lg:top-10 left-2/4 transform -translate-x-2/4">capaian pembelajaran</h1>
        <div className="absolute right-0 bottom-[3%] w-4/12 lg:bottom-[10%]">
            <MenuButtonList />
        </div>

        <div className="absolute top-2/4 left-[5%] max-w-[60%] transform -translate-y-2/4">
            <div className="w-full flex gap-x-4 items-center">
                <div className="p-4 rounded-xl bg-orange-300 w-6/12 flex-none">
                    <h1 className="text-center font-bold uppercase lg:text-4xl">capaian umum</h1>
                    <p className="text-[.6rem] lg:text-3xl">Pada akhir fase B, peserta didik dapat menunjukkan pemahaman dan intuisi bilangan (number sense) pada bilangan cacah sampai 10.000. Mereka dapat melakukan operasi penjumlahan dan pengurangan bilangan cacah sampai 1.000, dapat melakukan operasi perkalian dan pembagian bilangan cacah, dapat mengisi nilai yang belum diketahui dalam sebuah kalimat matematika, dan dapat mengidentifikasi, meniru, dan mengembangkan pola gambar atau obyek sederhana dan pola bilangan yang berkaitan dengan penjumlahan dan pengurangan bilangan cacah sampai 100.</p>
                </div>

                <div className="p-4 rounded-xl bg-orange-300 w-6/12 flex-none h-fit">
                    <h1 className="text-center font-bold uppercase lg:text-4xl">Capaian per elemen</h1>
                    <p className="text-[.6rem] lg:text-3xl">Peserta didik dapat melakukan operasi perkalian dan pembagian bilangan cacah sampai 100 menggunakan benda-benda konkret, gambar dan simbol matematika. Mereka juga dapat menyelesaikan masalah berkaitan dengan kelipatan dan faktor. </p>
                </div>
            </div>
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
};

export default page;

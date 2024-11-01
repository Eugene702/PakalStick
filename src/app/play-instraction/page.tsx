import { Metadata } from "next";
import Image from "next/image";
import LogoUpi from '@/assets/image/logo-upi.png'
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "Petunjuk Bermain",
}

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'))
const page = () => {
    return <div className="w-full h-screen bg-cover bg-bottom bg-no-repeat bg-[url('/image/plain_background_with_grass.png')] flex flex-col">
        <div className="flex justify-between items-center p-20">
            <h1 className="text-7xl text-gray-200 font-semibold text-center w-full">PETUNJUK BERMAIN</h1>
            <Image
                src={LogoUpi}
                width={0}
                height={0}
                sizes="100vw"
                alt="Logo Upi"
                className="w-3/12" />
        </div>

        <div className="grid grid-cols-3 items-center gap-6 p-10">
            <div className="p-10 pl-16 bg-orange-400 rounded-2xl col-span-2 max-w-3xl place-self-center">
                <ul className="list-decimal text-3xl">
                    <li>Pertama-tama, peserta didik diminta untuk memutar spin wheel angka sebanyak 2 kali untuk mendapatkan soal perkalian</li>
                    <li>Kemudian masukkan angka hasil spin wheel ke dalam kotak yang telah disediakan</li>
                    <li>Setelah itu, peserta didik dapat menggunakan PAKAL Stik(Papan Perkalian) untuk membantu menjawab soal perkalian yang didapatkan</li>
                    <li>Setelah menemukan jawaban, peserta didik diharapkan untuk memasukkan hasil jawaban di kotak yang telah disediakan. </li>
                </ul>
            </div>
            <MenuButtonList />
        </div>
    </div>
}

export default page
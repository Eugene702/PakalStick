import { Metadata } from "next";
import Image from "next/image";
import LogoUpi from '@/assets/image/logo-upi.png'
import dynamic from "next/dynamic";
import GrassWithviews from '@/assets/image/revision1/grass_with_views.jpg'
import IdBoard from '@/assets/image/revision1/id_board.png'


export const metadata: Metadata = {
    title: "Identitas Diri",
}

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'))
const page = () => {
    return <div className="relative w-full h-screen">
        <h1 className="text-gray-50 font-bold w-fit text-3xl lg:text-7xl uppercase absolute top-4 lg:top-10 left-2/4 transform -translate-x-2/4">identitas diri</h1>
        <div className="absolute right-0 bottom-[3%] w-4/12 lg:bottom-[10%]">
            <MenuButtonList />
        </div>

        <div className="w-8/12 absolute top-2/4 left-[5%] transform -translate-y-2/4 -translate-x-[5%]">
            <div className="relative w-full">
                <Image
                    src={IdBoard}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                    alt="Id Board" />

                <section className="absolute top-[55%] left-[55%] transform -translate-y-[55%] -translate-x-[55%] w-[65%]">
                    <table className="table-xs">
                        <tbody>
                            <tr>
                                <td className="lg:text-4xl">Nama Pembuat</td>
                                <td className="lg:text-4xl">:</td>
                                <td className="lg:text-4xl">Fathimah Az-Zahra</td>
                            </tr>
                            <tr>
                                <td className="lg:text-4xl">NIM</td>
                                <td className="lg:text-4xl">:</td>
                                <td className="lg:text-4xl">2100738</td>
                            </tr>
                            <tr>
                                <td className="lg:text-4xl">Jurusan</td>
                                <td className="lg:text-4xl">:</td>
                                <td className="lg:text-4xl">7A-PGSD</td>
                            </tr>
                            <tr>
                                <td className="lg:text-4xl">Instansi</td>
                                <td className="lg:text-4xl">:</td>
                                <td className="lg:text-4xl">Universitas Pendidikan Indonesia</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
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
}

export default page
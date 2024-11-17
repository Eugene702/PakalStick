import Image from "next/image"
import LogoUpi from '@/assets/image/logo-upi.png'
import dynamic from "next/dynamic"
import FlowerAndStonePlant from '@/assets/image/revision1/flower_and_stone_plant.png'
import GrassWithviews from '@/assets/image/revision1/grass_with_views.jpg'
import KidsWithBunchNumberAndBook from '@/assets/image/revision1/kids_with_bunch_number_and_book.png'

const MenuButtonList = dynamic(() => import('@/components/menuButtonList'))
const page = () => {
    return <div className="relative w-full h-screen">
        <h1 className="text-gray-50 font-bold w-fit text-3xl lg:text-7xl uppercase absolute top-4 lg:top-10 left-2/4 transform -translate-x-2/4">konsep perkalian</h1>
        <div className="absolute right-0 bottom-[3%] w-4/12 lg:bottom-[10%]">
            <MenuButtonList />
        </div>

        <Image
            src={KidsWithBunchNumberAndBook}
            width={0}
            height={0}
            sizes="100vw"
            alt="Kids With Bunch Number And Book"
            className="absolute bottom-0 left-2/4 transform -translate-x-2/4 w-3/12 lg:w-3/12" />

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

        <Image
            src={FlowerAndStonePlant}
            width={0}
            height={0}
            sizes="100vw"
            alt="Flower And Stone Plant"
            className="w-4/12 absolute left-2 bottom-0" />
    </div>
}

export default page
"use client"

import Image from "next/image"
import container from "@/assets/image/container.png"
import { useDroppable } from "@dnd-kit/core"
import dynamic from "next/dynamic"

const Stick = dynamic(() => import('./stick'))
const Container = ({ totalStick }: { totalStick: string[] }) => {
    const { setNodeRef, isOver } = useDroppable({
        id: "container"
    })

    return <div className="relative w-full flex justify-center" ref={setNodeRef}>
        <Image
            src={container}
            width={0}
            height={0}
            alt="Container Stick"
            className={`w-6/12 ${isOver ? 'contrast-50' : ''}`} />

        <div className="absolute w-3/12 -top-5 left-2/4 transform -translate-x-2/4">
            <div className="grid grid-cols-3">
                {
                    totalStick.map((e, index) => index < 3 ? <Stick key={index} index={e} /> : null)
                }
            </div>
        </div>
    </div>
}

export default Container
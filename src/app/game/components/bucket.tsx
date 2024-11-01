"use client"

import Image from "next/image"
import bucket from "@/assets/image/bucket.png"
import { useDroppable } from "@dnd-kit/core"
import dynamic from "next/dynamic"

const Stick = dynamic(() => import('./stick'))
const Bucket = ({ index, totalStick }: { index: number, totalStick: string[] }) => {
    const { setNodeRef, over } = useDroppable({
        id: `bucket-${index + 1}`
    })

    return <div className="relative" ref={setNodeRef}>
        <Image
            src={bucket}
            width={0}
            height={0}
            sizes="100vw"
            alt="Bucket"
            className={over && over.id == `bucket-${index + 1}` ? 'contrast-50' : ''} />

        <div className="absolute w-7/12 -top-1 left-2/4 transform -translate-x-2/4">
            <div className="grid grid-cols-3">
                {
                    totalStick.map((e, indexStick) => indexStick < 3 ? <Stick key={indexStick} index={e} /> : null)
                }
            </div>
        </div>

        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 text-center">
            <p className="text-7xl font-semibold">{index + 2}</p>
            <p>{ totalStick.length }</p>
        </div>
    </div>
}

export default Bucket
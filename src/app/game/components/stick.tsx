"use client"

import Image from "next/image"
import halfStick from "@/assets/image/half_stick.png"
import { useDraggable } from "@dnd-kit/core"

const Stick = ({ index }: { index: string }) => {
    const { setNodeRef, transform, attributes, listeners } = useDraggable({
        id: index
    })

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
    } : undefined

    return <Image
        src={halfStick}
        width={0}
        height={0}
        sizes="100vw"
        alt="Stick"
        ref={setNodeRef}
        className="w-full rounded-b-lg"
        style={style}
        {...listeners}
        {...attributes} />
}

export default Stick
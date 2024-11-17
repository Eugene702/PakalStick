"use client"

import Image from "next/image"
import halfStick from "@/assets/image/half_stick.png"
import { useDraggable } from "@dnd-kit/core"

const Stick = ({ index }: { index: string }) => {
    const { 
        attributes, 
        listeners, 
        setNodeRef, 
        transform 
    } = useDraggable({
        id: index,
    })

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        touchAction: 'none',
        position: 'relative' as const,
        zIndex: 999,
    } : undefined

    return (
        <Image
            ref={setNodeRef}
            src={halfStick}
            width={0}
            height={0}
            sizes="100vw"
            alt="Stick"
            className="w-full rounded-b-lg touch-none"
            style={style}
            draggable={false}
            {...listeners}
            {...attributes}
        />
    )
}

export default Stick
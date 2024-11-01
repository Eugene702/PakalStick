"use client"
import dynamic from "next/dynamic"
import { DndContext } from "@dnd-kit/core"
import { useEffect, useState } from "react"
import { useStore } from "@/store/store"

const Container = dynamic(() => import('./components/container'), {
    ssr: false
})

const Bucket = dynamic(() => import('./components/bucket'), {
    ssr: false
})

const Wrap = () => {
    const firstNumber = useStore(state => state.firstNumber)
    const secondNumber = useStore(state => state.secondNumber)

    const [totalStickInContainer, setTotalStickInContainer] = useState(Array.from({ length: 100 }).map((_, index) => `stick-${index +  1}`))
    const [totalStickInBucket, setTotalStickInBucket] = useState<string[][]>([
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ])

    const handleDragEnd = (e: any) => {
        if(e.over != null){
            const checkActiveStickInContainer = totalStickInContainer.includes(e.active.id)
            if(checkActiveStickInContainer){
                if(e.over.id == "container") return
                const indexBucket = parseInt(e.over.id.split('-')[1])
                const tempBucket = [...totalStickInBucket]
                tempBucket[indexBucket].push(e.active.id)
                setTotalStickInBucket(tempBucket)

                const tempContainer = [...totalStickInContainer]
                const indexActive = tempContainer.indexOf(e.active.id)
                tempContainer.splice(indexActive, 1)
                setTotalStickInContainer(tempContainer)
            }else{
                const findIndexBucket = totalStickInBucket.findIndex(a => a.includes(e.active.id))
                const tempBucket = [...totalStickInBucket]
                tempBucket[findIndexBucket].splice(tempBucket[findIndexBucket].indexOf(e.active.id), 1)
                setTotalStickInBucket(tempBucket)

                if(e.over.id == "container"){
                    setTotalStickInContainer([...totalStickInContainer, e.active.id])
                }else{
                    const indexBucket = parseInt(e.over.id.split('-')[1])
                    const tempBucket = [...totalStickInBucket]
                    tempBucket[indexBucket].push(e.active.id)
                    setTotalStickInBucket(tempBucket)
                }
            }
        }
    }

    return <DndContext
        onDragEnd={handleDragEnd}>
        <div className="flex gap-x-4 mt-10">
            <section className="w-9/12 p-10">
                <div className="grid grid-cols-5 gap-10">
                    {
                        Array.from({ length: 10 }).map((_, index) => {
                            return <Bucket
                                key={index}
                                index={index - 1}
                                totalStick={totalStickInBucket[index]} />
                        })
                    }
                </div>
            </section>

            <section className="w-3/12 flex flex-col justify-between items-center">
                <section className="bg-yellow-200 rounded-full p-6">
                    <span className="text-6xl text-black">{ firstNumber }</span>
                    <span className="text-6xl text-black">X</span>
                    <span className="text-6xl text-black">{ secondNumber }</span>
                </section>

                <div className="bg-yellow-200 text-center rounded-full p-6">
                    <p className="text-2xl">Sisa stik didalam gelas: { totalStickInContainer.length }</p>
                </div>

                <Container totalStick={totalStickInContainer} />
            </section>
        </div>
    </DndContext>
}

export default Wrap
"use client"
import dynamic from "next/dynamic"
import { 
    DndContext, 
    DragEndEvent,
    TouchSensor,
    MouseSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core"
import { useState } from "react"
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

    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            distance: 1,
        },
    })
    
    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            delay: 0,
            tolerance: 100,
        },
    })

    const sensors = useSensors(mouseSensor, touchSensor)

    const [totalStickInContainer, setTotalStickInContainer] = useState(Array.from({ length: 100 }).map((_, index) => `stick-${index + 1}`))
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

    const handleDragEnd = (e: DragEndEvent) => {
        if (e.over != null) {
            const checkActiveStickInContainer = totalStickInContainer.includes(e.active.id as string)
            if (checkActiveStickInContainer) {
                if (e.over.id == "container") return
                const indexBucket = parseInt((e.over.id as string).split('-')[1])
                const tempBucket = [...totalStickInBucket]
                tempBucket[indexBucket].push(e.active.id as string)
                setTotalStickInBucket(tempBucket)

                const tempContainer = [...totalStickInContainer]
                const indexActive = tempContainer.indexOf(e.active.id as string)
                tempContainer.splice(indexActive, 1)
                setTotalStickInContainer(tempContainer)
            } else {
                const findIndexBucket = totalStickInBucket.findIndex(a => a.includes(e.active.id as string))
                const tempBucket = [...totalStickInBucket]
                tempBucket[findIndexBucket].splice(tempBucket[findIndexBucket].indexOf(e.active.id as string), 1)
                setTotalStickInBucket(tempBucket)

                if (e.over.id == "container") {
                    setTotalStickInContainer([...totalStickInContainer, e.active.id as string])
                } else {
                    const indexBucket = parseInt((e.over.id as string).split('-')[1])
                    const tempBucket = [...totalStickInBucket]
                    tempBucket[indexBucket].push(e.active.id as string)
                    setTotalStickInBucket(tempBucket)
                }
            }
        }
    }

    return <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-5 gap-3 absolute left-[5%] top-[80%] transform -translate-y-[80%] -translate-x-[5%] w-8/12">
            {
                Array.from({ length: 10 }).map((_, index) => {
                    return <Bucket
                        key={index}
                        index={index - 1}
                        totalStick={totalStickInBucket[index]} />
                })
            }
        </div>

        <div className="absolute right-0 bottom-0 w-4/12 lg:w-3/12">
            <section className="w-full gap-y-8 flex flex-col items-center">
                <section className="flex flex-col items-center gap-2">
                    <section className="bg-yellow-200 rounded-full p-2 w-fit">
                        <span className="text-sm text-black lg:text-3xl">{firstNumber}</span>
                        <span className="text-sm text-black lg:text-3xl">X</span>
                        <span className="text-sm text-black lg:text-3xl">{secondNumber}</span>
                    </section>

                    <div className="bg-yellow-200 text-center rounded-full p-6 w-fit">
                        <p className="text-sm lg:text-3xl">Sisa stik didalam gelas: {totalStickInContainer.length}</p>
                    </div>
                </section>

                <Container totalStick={totalStickInContainer} />
            </section>
        </div>
    </DndContext>
}

export default Wrap
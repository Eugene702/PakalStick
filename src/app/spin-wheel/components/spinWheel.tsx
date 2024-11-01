"use client"

import { useStore } from "@/store/store"
import { useEffect, useRef, useState } from "react"
import WheelComponent from "react-spin-game"
import "react-spin-game/dist/index.css"

const SpinWheel = () => {
    const spinWheelref = useRef<any>(null)
    const firstNumber = useStore(state => state.firstNumber)
    const secondNumber = useStore(state => state.secondNumber)
    const upadateFirstNumberValue = useStore(state => state.updateFirstNumberValue)
    const updateSecondNumberValue = useStore(state => state.updateSecondNumberValue)
    const [spinNumber, setSpinNumber] = useState<string>((Math.floor(Math.random() * 10) + 1).toString())
    const [spinCount, setSpinCount] = useState<number>(0)

    const handleSpin = async () => {
        setSpinNumber((Math.floor(Math.random() * 10) + 1).toString())
        spinWheelref.current.handleSpin()

        await Promise.resolve([
            setTimeout(() => {
                if(spinCount == 0){
                    upadateFirstNumberValue(parseInt(spinNumber!))
                    setSpinCount(1)
                }else{
                    updateSecondNumberValue(parseInt(spinNumber!))
                    setSpinCount(0)
                }
            }, 5000)
        ])
    }

    return <section>
        <WheelComponent
            data={[
                ["1", "#60a5fa"],
                ["2", "#4ade80"],
                ["3", "#60a5fa"],
                ["4", "#4ade80"],
                ["5", "#60a5fa"],
                ["6", "#4ade80"],
                ["7", "#60a5fa"],
                ["8", "#4ade80"],
                ["9", "#60a5fa"],
                ["10", "#4ade80"],
            ]}
            result={spinNumber}
            hideButton={true}
            ref={spinWheelref}
            time={5} />

        <div className="flex justify-center">
            <button className="mt-10 btn-menu bg-red-400 w-fit" onClick={handleSpin}>Spin</button>
        </div>
        <div className="bg-yellow-200 text-black rounded-full mt-5 p-6 text-3xl font-semibold">
            <p>Angka pertama: { firstNumber } </p>
            <p>Angka kedua: { secondNumber }  </p>
        </div>
    </section>
}

export default SpinWheel
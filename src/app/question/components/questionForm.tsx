"use client"

import { useStore } from "@/store/store"
import { useState } from "react"

const QuestionForm = () => {
    const firstNumber = useStore(state => state.firstNumber)
    const secondNumber = useStore(state => state.secondNumber)
    const clear = useStore(state => state.clear)
    const [result, setResult] = useState<string>("")

    const handleResult = () => {
        if (result === "") return
        if (parseInt(result) === firstNumber * secondNumber) {
            alert("Jawaban benar")
            clear()
            setResult("")
        } else {
            alert("Jawaban salah")
        }
    }

    return <section className="col-span-3">
        <div className="flex items-center justify-center gap-x-6">
            <p className="bg-blue-950 text-yellow-200 rounded-xl p-3 lg:p-6 lg:text-7xl text-center">{ firstNumber }</p>
            <p className="font-bold">X</p>
            <p className="bg-blue-950 text-yellow-200 rounded-xl p-3 lg:p-6 lg:text-7xl text-center">{ secondNumber }</p>
            <p className="font-bold">=</p>
            <p className="bg-blue-950 text-yellow-200 rounded-xl p-3 lg:p-6 lg:text-7xl text-center">{ result }</p>
        </div>

        <div className="grid grid-cols-5 gap-2 p-10">
            {
                Array.from({ length: 11 }).map((_, index) => {
                    return <button key={index} className={`bg-blue-950 text-yellow-200 rounded-xl p-3 lg:p-6 lg:text-7xl text-center cursor-pointer transform ${index == 0 ? 'order-11' : ''} hover:scale-90 active:scale-100`}
                    onClick={() => setResult(`${result}${index}`)}>{index}</button>
                })
            }
            <div className="order-12"></div>
            <button className={`bg-blue-950 col-span-2 text-yellow-200 rounded-xl p-3 lg:p-6 lg:text-7xl text-center cursor-pointer transform hover:scale-90 active:scale-100 order-[14]`} onClick={() => setResult("")}>Hapus</button>
            <button className={`bg-blue-950 text-yellow-200 rounded-xl p-3 lg:p-6 lg:text-7xl text-center cursor-pointer transform hover:scale-90 active:scale-100 order-last`} onClick={handleResult}>=</button>
        </div>
    </section>
}

export default QuestionForm
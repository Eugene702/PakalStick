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
            <p className="text-7xl bg-blue-950 text-yellow-200 rounded-xl p-6 text-center">{ firstNumber }</p>
            <p className="text-7xl font-bold">X</p>
            <p className="text-7xl bg-blue-950 text-yellow-200 rounded-xl p-6 text-center">{ secondNumber }</p>
            <p className="text-7xl font-bold">=</p>
            <p className="text-7xl bg-blue-950 text-yellow-200 rounded-xl p-6 text-center">{ result }</p>
        </div>

        <div className="mt-10 grid grid-cols-5 gap-6 p-10">
            {
                Array.from({ length: 11 }).map((_, index) => {
                    return <button key={index} className={`text-7xl bg-blue-950 text-yellow-200 rounded-xl p-6 text-center cursor-pointer transform ${index == 0 ? 'order-11' : ''} hover:scale-90 active:scale-100`}
                    onClick={() => setResult(`${result}${index}`)}>{index}</button>
                })
            }
            <div className="order-12"></div>
            <div className="order-[13]"></div>
            <button className={`text-7xl bg-blue-950 text-yellow-200 rounded-xl p-6 text-center cursor-pointer transform hover:scale-90 active:scale-100 order-[14]`} onClick={() => setResult("")}>Hapus</button>
            <button className={`text-7xl bg-blue-950 text-yellow-200 rounded-xl p-6 text-center cursor-pointer transform hover:scale-90 active:scale-100 order-last`} onClick={handleResult}>=</button>
        </div>
    </section>
}

export default QuestionForm
"use client"

import { create } from "zustand"

interface StoreInterface{
    firstNumber: number,
    secondNumber: number,
    updateFirstNumberValue: (val: number) => void,
    updateSecondNumberValue: (val: number) => void,
    clear: () => void
}

const useStore = create<StoreInterface>()(set => ({
    firstNumber: 0,
    secondNumber: 0,
    updateFirstNumberValue: (val: number) => set({ firstNumber: val }),
    updateSecondNumberValue: (val: number) => set({ secondNumber: val }),
    clear: () => set({ firstNumber: 0, secondNumber: 0 })
}))

export { useStore }
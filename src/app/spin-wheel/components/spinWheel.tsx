"use client";

import { useStore } from "@/store/store";
import { useRef, useState } from "react";
import WheelComponent from "react-spin-game";
import "react-spin-game/dist/index.css";

const SpinWheel = () => {
    const spinWheelref = useRef<{ handleSpin: () => void } | null>(null);
    const firstNumber = useStore(state => state.firstNumber);
    const secondNumber = useStore(state => state.secondNumber);
    const updateFirstNumberValue = useStore(state => state.updateFirstNumberValue);
    const updateSecondNumberValue = useStore(state => state.updateSecondNumberValue);
    const [spinNumber, setSpinNumber] = useState<string>((Math.floor(Math.random() * 10) + 1).toString());
    const [spinCount, setSpinCount] = useState<number>(0);

    const handleSpin = async () => {
        setSpinNumber((Math.floor(Math.random() * 10) + 1).toString());
        if (spinWheelref.current) {
            spinWheelref.current.handleSpin();
        }

        await Promise.resolve([
            setTimeout(() => {
                if (spinCount === 0) {
                    updateFirstNumberValue(parseInt(spinNumber!));
                    setSpinCount(1);
                } else {
                    updateSecondNumberValue(parseInt(spinNumber!));
                    setSpinCount(0);
                }
            }, 5000)
        ]);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="relative w-full pb-[100%]">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full transform scale-[.3] translate-y-10 lg:scale-75">
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
                            time={5}
                        />
                    </div>
                </div>
            </div>

            <button 
                className="mt-4 px-4 py-2 bg-red-400 hover:bg-red-500 text-white rounded-lg transition-colors duration-200 text-sm sm:text-base font-semibold"
                onClick={handleSpin}
            >
                Spin
            </button>

            <div className="w-full bg-yellow-200 text-black rounded-xl mt-2 p-3 sm:p-4">
                <p className="text-base sm:text-lg md:text-xl font-semibold">Angka pertama: {firstNumber}</p>
                <p className="text-base sm:text-lg md:text-xl font-semibold">Angka kedua: {secondNumber}</p>
            </div>
        </div>
    );
};

export default SpinWheel;
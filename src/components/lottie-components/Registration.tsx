"use client";

import Lottie from "lottie-react";
import animationData from '../../../public/json/modal.json'
export default function Registration() {
    return (
        <>
        <div className="flex flex-col w-full justify-center items-center">
            <Lottie
                animationData={animationData}
                className="flex justify-center items-center max-sj:w-[65%]"
                loop={false}
            />
        </div>
       
        </>
        
    );
}

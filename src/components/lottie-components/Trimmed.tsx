"use client";

    import Lottie from "lottie-react";
    import animationData from "../../../public/json/Teagin BG Copy NEW trimmed.json";
export default function Trimmed() {
    return (
        <>
        <div className="scale-x-[-1] flex flex-col w-full justify-center items-center">
            <Lottie
                animationData={animationData}
                className="flex justify-center items-center w-full "
                loop={true}
            />
        </div>
       
        </>
        
    );
}

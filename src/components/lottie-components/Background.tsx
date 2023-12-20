"use client";

    import Lottie from "lottie-react";
    import animationData from "../../../public/json/tegainbg.json";
export default function Background() {
    return (
        <>
        <div className="flex flex-col w-full justify-center items-center">
            <Lottie
                animationData={animationData}
                className="flex justify-center items-center w-full "
                loop={true}
            />
        </div>
       
        </>
        
    );
}

"use client";

import Lottie from "lottie-react";
import animationData from "../../../public/json/contact.json";
export default function ContactUs() {
    return (
        <>
        <div className="flex flex-col w-full justify-center items-center">
            <Lottie
                animationData={animationData}
                className="flex justify-center items-center"
                loop={true}
            />
        </div>
       
        </>
        
    );
}

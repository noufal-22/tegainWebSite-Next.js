"use client";

import Registration from "@/components/lottie-components/Registration";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function ContactModal() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");

    useEffect(() => {
        // Disable scrolling on modal open
        if (modal === "true") {
            document.body.style.overflow = "hidden";
        }

        // Enable scrolling on modal close
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modal]);

    return (
        modal === "true" && (
            <div
                className={`fixed top-0 left-0 w-full h-full flex items-center justify-center  ${
                    modal === "true" ? "" : "hidden"
                }`}
            >
                <div
                    className="modal-overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 flex flex-col
                    items-center "
                    onClick={() => {
                        router.back();
                    }}
                ></div>
                <div
                    className="modal z-50 bg-white  rounded-lg shadow-lg flex flex-col items-center p-5
                max-md:w-[75%] max-sj:w-[85%] mt-[130px]"
                >
                    <span
                        className="close absolute top-2 right-2 cursor-pointer"
                        onClick={() => router.back()}
                    >
                        &times;
                    </span>
                    {/* <p className="">Modal content goes here.</p> */}
                    <div className="w-200px  flex flex-col">
                        <div className="">
                            <Registration />
                        </div>
                        <h2 className="gordita_medium text-[28px] text-center max-sk:text-[18px]">
                            Successful!{" "}
                        </h2>
                        <span className="gordita_medium text-[27px] text-center mb-[15px] max-sk:text-[18px] max-sj:mb-[4px]">
                            {" "}
                            Our team will contact you
                        </span>
                        <p
                            className=" gordita_regular text-[14px] text-center mb-[30px] w-[457px] max-sm:w-[330px] 
                        max-sk:w-[270px] max-sj:text-[13px] max-sj:mb-[20px]"
                        >
                            Your message has been successfully submitted. We'll
                            get back to you shortly
                        </p>
                    </div>
                    <button
                        className="flex items-center justify-center px-4 py-2 
                    bg-[#0A345F] text-white rounded-md m-0 gordita_regular"
                        onClick={() => {
                            router.back();
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        )
    );
}

export default ContactModal;

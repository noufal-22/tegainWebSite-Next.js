import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import Image from "next/image";

function CountrySelectModal(data: any) {
    const [searchTerm, setSearchTerm] = useState("");
    const modalRef = useRef(null);
    const [countryId, setCountryId] = useState(parseInt(data.country));

    

    useEffect(() => {
        const handleEsc = (event: any) => {
            if (event.keyCode === 27) {
                data.onClose();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
            // Reset body overflow to default when the modal is closed
            document.body.style.overflow = "";
        };
    }, [data]);

    useEffect(() => {
        if (data?.isOpen) {
            $("html").addClass("modal-enabled");
        } else {
            $("html").removeClass("modal-enabled");
        }
    }, [data?.isOpen]);
 
    return (
        <div
            className={`fixed z-10 inset-0 overflow-y-auto ${
                data.isOpen ? "block" : "hidden"
            }`}
        >
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center ">
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                ></div>

                <div
                    ref={modalRef}
                    className="relative w-full max-w-md mx-auto overflow-visible bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full max-[375px]:min-w-full"
                >
                    <div className="absolute top-[-12px] w-[25px] text-center bg-[#fff] border rounded-[50%] right-[-13px] shadow-slate-900">
                        <button
                            onClick={data.onClose}
                            className="w-full h-full flex items-center justify-center"
                        >
                            <svg
                                className="w-[10px] h-[20px]"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1L11 11M11 1L1 11"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="bg-white px-4 py-5 sm:pb-4">
                        <input
                            type="text"
                            placeholder="Search for a country"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                        />
                        <ul className="max-h-60 overflow-auto">
                            {data.countries
                                .filter(
                                    (country: any) =>
                                        country?.attributes?.country
                                            ?.toLowerCase()
                                            ?.includes(
                                                searchTerm.toLowerCase()
                                            ) ||
                                        country?.attributes?.phone_code?.includes(
                                            searchTerm.toLowerCase()
                                        )
                                )
                                .map((country: any) => {
                                    const web_code = String(
                                        country?.attributes?.web_code
                                    );
                                    const iconText = web_code.toLowerCase();
                                    return (
                                        <li
                                            key={country?.attributes?.web_code}
                                            className={`flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer  mb-[7px]
											${country?.id === countryId ? "bg-lime-100" : ""}`}
                                            onClick={() => {
                                                data.onClose(country);
                                            }}
                                        >
                                            <span className="w-[25px] h-[25px] m-[7px]">
                                                <img
                                                     src={`https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/talrop/icon/flags/${
                                                        country?.attributes?.web_code
                                                    }.png`}
                                                    alt="icon"
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </span>
                                            <span className="mr-[8px]">
                                                {country?.attributes.phone_code}
                                            </span>
                                            <span className="">
                                                {country?.attributes?.country}
                                            </span>
                                        </li>
                                    );
                                })}
                            {data.countries.length > 0 &&
                                data.countries.every(
                                    (country: any) =>
                                        !country?.attributes?.country
                                            ?.toLowerCase()
                                            ?.includes(
                                                searchTerm.toLowerCase()
                                            ) &&
                                        !country?.attributes?.phone_code?.includes(
                                            searchTerm.toLowerCase()
                                        )
                                ) && (
                                    <li className="px-4 py-2 text-red-600">
                                        *Country not found*
                                    </li>
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountrySelectModal;

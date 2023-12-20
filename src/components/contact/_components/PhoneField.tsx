"use client";

import "react-phone-number-input/style.css";
import { useEffect, useState } from "react";
import get from "@/config/fetch/get";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import CountrySelectModal from "./CountrySelectModal";
import { useSearchParams } from "next/navigation";

export default function PhoneField(data: any) {
    const searchParams = useSearchParams();
    const phone = searchParams?.get("phone");
    const [iconText, setIconText] = useState("");
    const [value, setValue] = useState<any>();
    const [countries, setCountries] = useState<any>([]); //
    const [isModalOpen, setIsModalOpen] = useState(false); //
    const [selectedCountry, setSelectedCountry] = useState<any>(null); //
    const [number, setNumber] = useState<any>("");
    // const [defaultCountry, setdefaultCountry] = useState({
    //     id: hasCookie("country_id") ? getCookie("country_id") : 6,
    //     attributes: {
    //         country_code: hasCookie("country_code")
    //             ? getCookie("country_code")
    //             : "ARE",
    //         name: hasCookie("name")
    //             ? getCookie("name")
    //             : "United Arab Emirates",
    //         phone_code: hasCookie("phone_code")
    //             ? getCookie("phone_code")
    //             : "+971",
    //         phone_number_length: hasCookie("phone_number_length")
    //             ? getCookie("phone_number_length")
    //             : 9,
    //         web_code: hasCookie("web_code") ? getCookie("web_code") : "AE",
    //     },
    // }); 
    const [defaultCountry, setDefaultCountry] = useState({
        id: hasCookie("country_id") ? getCookie("country_id") : 319,
        attributes: {
            country_code: hasCookie("country_code") ? getCookie("country_code") : "IN",
            name: hasCookie("name") ? getCookie("name") : "India",
            phone_code: hasCookie("phone_code") ? getCookie("phone_code") : "+91",
            phone_number_length: hasCookie("phone_number_length") ? getCookie("phone_number_length") : 10,
            web_code: hasCookie("web_code") ? getCookie("web_code") : "IN",
        },
    });
    console.log("selected");
    
    const handleCountrySelect = (country: any) => {
        if (country?.id) {
            setSelectedCountry(country);
            if (data.setCountryCode) {
                data.setCountryCode(country.id);
            }
        }
        setIsModalOpen(false);
    }; //
    const fetchCountry = () => {
        deleteCookie("error_message");
        get("countries/?pagination[pageSize]=110").then((res) => {
            setCountries(res.data);
            // console.log("DATA", res.data);
        });
    }; //
    const handleKeyPress = (event: any) => {
        // Check if the pressed key is not a number
        if (!/[0-9]/.test(event.key)) {
            // Prevent input
            event.preventDefault();
        }
    };

    useEffect(() => {
        fetchCountry();
        if (data.setCountry || data.setPhoneLength) {
            data?.setPhoneLength(
                selectedCountry
                    ? selectedCountry?.phone_number_length
                    : defaultCountry?.attributes?.phone_number_length
            );
            data?.setCountry(
                selectedCountry ? selectedCountry.id : defaultCountry.id
            );
        }

        const web_code = String(
            selectedCountry
                ? selectedCountry?.attributes?.web_code
                : defaultCountry?.attributes?.web_code
        );

        setIconText(web_code.toLowerCase());
        // console.log("Icon", selectedCountry?.attributes?.web_code);
    }, [isModalOpen]);

    // console.log("selectedCountry", selectedCountry);

    return (
        <>
            <div
                className={` rounded-md bg-white flex mb-[20px] py-2  align-center  Rounded-md w-full text-[#AAA] p-[10px] text-[14px] ${
                    data?.isError && !data.data
                        ? "border error-border"
                        : "border"
                }`}
                style={{ border: "1px solid#C5C5C5" }}
            >
                <input
                    name={data.country_name}
                    type="hidden"
                    value={
                        selectedCountry ? selectedCountry.id : defaultCountry.id
                    }
                />
                <div
                    className="flex cursor-pointer items-center mr-[10px]"
                    onClick={() => setIsModalOpen(true)}
                >
                    <span className="w-[25px] h-[25px] inline-block rounded-full overflow-hidden ">
                        <img
                            src={`https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/talrop/icon/flags/${
                                selectedCountry?.attributes?.web_code ||
                                defaultCountry?.attributes?.web_code
                            }.png`}
                            alt="icon"
                            className="w-full h-full object-cover"
                        />
                    </span>

                    <p className="text-gray-500 mr-[7px] ml-[5px] max-sk:text-[14px]">
                        {selectedCountry
                            ? selectedCountry?.attributes.phone_code
                            : defaultCountry?.attributes?.phone_code}
                    </p>
                    <div className="w-[12px] flex justify-center items-center ">
                        <img
                            className="w-full block"
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-10-2023/down.svg"
                            alt=""
                        />
                    </div>
                </div>
                {data.name === "phone" ? (
                    <input
                        // defaultValue={
                        // 	data.defaultValue ? data.defaultValue : ""
                        // }
                        onChange={(e) => {
                            if (data.setdata) {
                                data.setdata(e.target.value);
                            }
                            if (data.setError) {
                                data.setError(false);
                            }
                        }}
                        onKeyPress={handleKeyPress}
                        className="rounded-md w-full text-[#AAA]  text-[14px]"
                        type="tel"
                        defaultValue={phone ? phone : ""}
                        name={data.name}
                        placeholder={data.placeholder}
                        maxLength={
                            selectedCountry
                                ? selectedCountry?.attributes
                                      .phone_number_length
                                : defaultCountry?.attributes
                                      ?.phone_number_length
                        }
                    />
                ) : (
                    <>
                        <input type="hidden" name={data.name} value={number} />
                        <input
                            defaultValue={data.defaultValue || ""}
                            onChange={(e) => {
                                if (data.setdata) {
                                    const phoneCode =
                                        (selectedCountry?.attributes &&
                                            selectedCountry.attributes
                                                .phone_code) ||
                                        defaultCountry?.attributes?.phone_code;

                                    const newNumber =
                                        (selectedCountry?.attributes &&
                                            `${phoneCode}${e.target.value}`) ||
                                        `${defaultCountry?.attributes?.phone_code}${e.target.value}`;

                                    data.setdata(phoneCode);
                                    setNumber(newNumber);
                                }

                                if (data.setError) {
                                    data.setError(false);
                                }
                            }}
                            onKeyPress={handleKeyPress}
                            className="appearance-none w-full"
                            type="tel"
                            name=""
                            value={phone || ""}
                            placeholder={data.placeholder}
                            maxLength={
                                selectedCountry?.attributes
                                    ? selectedCountry.attributes
                                          .phone_number_length
                                    : defaultCountry?.attributes
                                          ?.phone_number_length
                            }
                        />
                    </>
                )}

                {data.isError && !data.data && (
                    <div className="error-message  gordita_regular text-right	absolute bottom-[-25px] right-0 ">
                        <p className="error gordita_regular text-right	mt-0">
                            this field is required
                        </p>
                    </div>
                )}

                <CountrySelectModal
                    isOpen={isModalOpen}
                    onClose={handleCountrySelect}
                    countries={countries}
                    country={
                        selectedCountry?.id
                            ? selectedCountry.id
                            : defaultCountry.id
                    }
                />
            </div>
        </>
    );
}

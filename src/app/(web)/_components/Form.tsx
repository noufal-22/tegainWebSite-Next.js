"use client";

import CountrySelectModal from "@/components/contact/_components/CountrySelectModal";
import ContactUs from "@/components/lottie-components/ContactUs";
import get from "@/config/fetch/get";
import { deleteCookie, setCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";


function Form() {
    const [countries, setCountries] = useState<any>([]); //
    const [isModalOpen, setIsModalOpen] = useState(false); //
    const [iconText, setIconText] = useState<any>("");

    const [selectedCountry, setSelectedCountry] = useState<any>({
        id: 319,

        country_code: "IND",

        name: "India",
        phone_code: "+91",
        phone_number_length: 10,
        web_code: "IN",
    }); //
    const [defaultCountry, setdefaultCountry] = useState({
        // id: 6,
        // country_code: "ARE",
        // name: "United Arab Emirates",
        // phone_code: "+971",
        // phone_number_length: 9,
        // web_code: "AE",
        id: 319,
        attributes: {
            country_code: "IND",
            name: "India",
            phone_code: "+91",
            phone_number_length: 10,
            web_code: "IN",
            icon: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/talrop/icon/flags/IN.png",
        },
    }); //

    const handleCountrySelect = (country: any) => {
        if (country?.id) {
            setSelectedCountry(country);
        }
        setIsModalOpen(false);
    }; //
    useEffect(() => {
        fetchCountry();
        const web_code = String(
            selectedCountry
                ? selectedCountry?.attributes?.web_code
                : defaultCountry?.attributes?.web_code
        );
        setIconText(web_code.toLowerCase());
    }, [selectedCountry, isModalOpen]);
    const fetchCountry = () => {
        deleteCookie("error_message");
        // console.log("Response");
        get("countries/?pagination[pageSize]=110").then((res) => {
            setCountries(res.data);
            // console.log("Response", res);
        });
    }; //

    const [number, setNumber] = useState<any>("");
    const [errorMessage, setErrorMessage] = useState<any>("");

    const router = useRouter();

    const onPhoneSave = (e: any) => {
        let value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
        setNumber(value);
    };

    const OnSubmit = () => {
        const country = selectedCountry?.attributes?.phone_code ? selectedCountry : defaultCountry;
        const number_length = selectedCountry?.attributes?.phone_number_length
            ? selectedCountry?.attributes?.phone_number_length
            : defaultCountry?.attributes?.phone_number_length;

        console.log(number.length, "(number.length",number_length);

        if (number.length === 0) {
            console.log("OnSubmit if 2");
            router.push("/contact-us");
        } else if (number.length === number_length) {
            console.log("OnSubmit if 1");
            setErrorMessage("");
            setCookie("phone_number", number);
            setCookie("country_id", country.id);
            setCookie("country_code", country?.attributes?.country_code);
            setCookie("name", country?.attributes?.name);
            setCookie("phone_code", country?.attributes?.phone_code);
            setCookie(
                "phone_number_length",
                country?.attributes?.phone_number_length
            );
            setCookie("web_code", country?.attributes?.web_code);
            router.push(`/contact-us/${number ? `?phone=${number}` : ""}`);
        } else {
            console.log("OnSubmit if 3");

            setErrorMessage("*Enter a valid number*");
        }
    };
    // console.log("data.countries", selectedCountry);
    return (
        <div className="justify-center flex flex-col w-full bg-[#f3f8fd] ">
            <div className="wrapper flex flex-wrap">
                {/* Title Section (Top) */}
                <div className="w-full md:w-1/2 pt-[150px] max-md:pt-5  mb-8 md:mb-0">
                    <div className="">
                        <h1
                            className="text-[#212121] gordita_bold text-5xl mb-[20px] 
                        max-sk:text-[35px] max-md:text-center max-md:pt-[50px]  max-sj:text-[25px]"
                        >
                            Get in Touch with Tegain
                        </h1>
                        <div className="w-full md:w-1/2 justify-center items-center hidden  max-md:block">
                            <ContactUs />
                        </div>
                    </div>
                    <p className="text-[#7E7E7E] font-gordita text-base font-normal mb-[20px] max-md:text-center max-sm:text-left">
                        Do you have questions, want to discuss your project, or
                        explore collaboration opportunities? Feel free to
                        contact us. Our team is always ready to assist you.
                    </p>
                    <div
                        className=" my-0 mx-auto w-[404px] max-2xl:w-[400px]  max-3xl:w-[440px] max-lg:w-[400px] 
                    max-xl:w-[400px] max-sm:w-[392px] max-sk:w-[100%] max-sj:w-[100%] mb-[50px]"
                    >
                        <div
                            className="p-[3px] rounded-md flex items-center 
                        max-sm:my-0 max-sm:mx-auto    max-md:mx-auto my-auto
                           
                         max-sk:h-[50px] justify-between max-sk:justify-normal"
                            style={{ border: "1px solid #C5C5C5" }}
                        >
                            <div
                                className="w-[29px] h-[31px] rounded-[50%] overflow-hidden flex justify-center webkit-center
                                max-sk:h-[28px] max-sk:w-[28px] max-sk:mr-[5px]"
                            >
                                {iconText ? (
                                    <Image
                                        width={500}
                                        height={500}
                                        className="w-full block object-cover"
                                        src={`https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/talrop/icon/flags/${
                                            selectedCountry?.attributes
                                                ?.web_code ||
                                            defaultCountry?.attributes?.web_code
                                        }.png`}
                                        alt="flag_of_ind"
                                        onClick={() => setIsModalOpen(true)}
                                        style={{ cursor: "pointer" }}
                                    />
                                ) : null}
                            </div>
                            <p
                                className="text-[#000] mr-[3px] max-sk:mr-[7px] max-sk:text-[14px]"
                                onClick={() => setIsModalOpen(true)}
                                style={{ cursor: "pointer" }}
                            >
                                {selectedCountry.attributes?.phone_code
                                    ? selectedCountry.attributes?.phone_code // Use optional chaining
                                    : defaultCountry?.attributes?.phone_code}
                            </p>

                            <div
                                className="flex cursor-pointer items-center "
                                onClick={() => setIsModalOpen(true)}
                            >
                                <div className="w-[12px] flex justify-center items-center max-sk:mr-[5px]">
                                    <img
                                        className="w-full block"
                                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-10-2023/down.svg"
                                        alt=""
                                    />
                                </div>
                            </div>

                            <form>
                                <input
                                    className="text-[#000] flex text-[14px] mr-2 max-md:mx-0 max-sk:w-[222px] max-w-[478px]
                                max-3xl:w-[210px] max-2xl:w-[178px]
                                max-mc:w-[186px] 

                                max-sk:h-[24px] max-sj:w-[185px] "
                                    type="tel"
                                    id="numberInput"
                                    placeholder="Enter Phone Number"
                                    value={number}
                                    onChange={onPhoneSave}
                                    maxLength={
                                        selectedCountry
                                            ? selectedCountry?.attributes
                                                  ?.phone_number_length
                                            : defaultCountry?.attributes
                                                  ?.phone_number_length
                                    }
                                />
                            </form>
                            {/* <div
                            // href={`/contact-us/${
                            //     number ? `?phone=${number}` : ""
                            // }`}
                            onClick={OnSubmit}
                            className="bg-[#0A4771] text-white px-4 py-2 rounded-md max-sk:hidden cursor-pointer"
                        >
                            Connect
                        </div> */}
                            <div
                                className="flex items-end justify-end "
                                onClick={OnSubmit}
                            >
                                <div
                                    // href="/contact-us"
                                    className="bg-[#0A4771] text-white px-4 py-2 rounded-md max-sk:hidden cursor-pointer"
                                >
                                    Connect
                                </div>
                            </div>
                        </div>
                        <p className="text-red-600 text-[13px] gordita_regular">
                            {errorMessage && errorMessage}
                        </p>
                    </div>

                    <div className="flex items-end justify-end">
                        <Link
                            href="/contact-us"
                            className="bg-[#0A4771] text-white px-4 py-2 rounded-md  hidden max-sk:block  "
                        >
                            Connect
                        </Link>
                    </div>
                </div>

                {/* {countries.map((country: any) => (
                    <div className="">
                        <p>{country.name}</p>
                        <div className="">
                            <img src={country.flag} alt="" />
                        </div>
                    </div>
                ))} */}

                {/* Animation Image Section (Bottom of Title) */}
                <div className="w-full md:w-1/2 flex justify-center items-center  max-md:hidden">
                    <ContactUs />
                </div>
            </div>
            <CountrySelectModal
                isOpen={isModalOpen}
                onClose={handleCountrySelect}
                countries={countries}
                country={selectedCountry?.id}
            />
        </div>
    );
}

export default Form;

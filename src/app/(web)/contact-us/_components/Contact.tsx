"use client";
import ContactFormField from "@/components/contact/_components/ContactFormField";
import Header from "@/components/general/Header";
import React, {FormEvent, useState } from "react";
import Footer from "../../_components/Footer";
import ContactModal from "../modals/Contact-modal";
import post from "@/config/fetch/post";
import {   useSearchParams, useRouter } from "next/navigation";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
// const ..........................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function Contact() {

    const [editphone, setEditPhone] = useState<any>("")
	const [editCountryCode, setEditCountryCode] = useState<any>(hasCookie("country_id") ? getCookie("country_id") : 319)
	const [isError, setError] = useState<any>(false)
    const router = useRouter()
    const phone = getCookie('phone_number');

    

    const onsubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        const formdata = new FormData(e.target as HTMLFormElement);
        const formDataObj: Record<string, any> = Object.fromEntries(formdata.entries());
    
        try {
          const result:any = await post('contacts', {
            "data": {
              "country": editCountryCode,
              "name": formdata.get('name'),
              "requirements": formdata.get('requirements'),
              "company_name": formdata.get('company_name'),
              "phone": formdata.get('phone'),
              "email": formdata.get("email")
            },
          });
    
         if (result.status ===200){
            deleteCookie('phone_number')
            deleteCookie("country_id")
            deleteCookie("country_code")
            deleteCookie("name")
            deleteCookie("phone_code")
            deleteCookie("phone_number_length")
            deleteCookie("web_code")
            router.push("?modal=true")
         }
          
    
        } catch (error) {
          // Handle fetch or other errors
        //   console.error('Error:', error);
        }
      };

    // State to control the visibility of the modal
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // // Function to open the modal
    // const openModal = () => {
    //     setIsModalOpen(true);
    // };

    // // Function to close the modal
    // const closeModal = () => {
    //     setIsModalOpen(false);
    // };
    

    return (
        <>
            <ContactModal />
            <div>
                <Header />
                <div className="wrapper pt-40 pb-20 w-full flex flex-col justify-center items-center ]">
                    <div className="border w-[65%] max-xl:w-[80%] max-mc:w-[90%] max-sk:w-full">
                        <h2 className="text-[28px] gordita_medium pb-3">
                            Get in Touch with Tegain
                        </h2>
                        <span className=" text-[15px]">
                            Do you have questions, want to discuss your project,
                            or explore collaboration opportunities? Feel free to
                            contact us. Our team is always ready to assist you.
                        </span>
                        <div>
                            <form
                                className=" w-full pb-[40px] pt-[20px]"
                                onSubmit={onsubmit}
                            >
                                <ContactFormField setError={setError} isError={isError} setEditCountryCode={setEditCountryCode} phone={phone} editphone={editphone} setEditPhone={setEditPhone} editCountryCode={editCountryCode}    />
                                <button
                                    type="submit"
                                    className=" w-full flex justify-end "
                                >
                                    <button
                                        type="submit"
                                        className="py-[10px] px-[30px]  bg-[#0A345F] text-[#fff] rounded-md"
                                    >
                                        Submit
                                    </button>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Contact;

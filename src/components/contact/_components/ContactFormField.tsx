// interface FormFieldProps {
//     label: string;
//     type: string;
//     name: string;
//     placeholder: string;
//     data: string;
//     setdata: any;
//     defaultValue: any;
//     isError: boolean;
//     setError: any;
// }

// function FormField({
//     label,
//     type,
//     name,
//     placeholder,
//     data,
//     setdata,
//     defaultValue,
//     isError,
//     setError,
// }: FormFieldProps) {
//     return (
//         <div className="mb-[20px] relative">
//             <label className="text-[14px] gordita_medium">{label}</label>
//             <input
//                 defaultValue={defaultValue ? defaultValue : ""}
//                 onChange={(e) => {
//                     if (setdata) {
//                         setdata(e.target.value);
//                     }
//                     if (setError) {
//                         setError(false);
//                     }
//                 }}
//                 className={` bg-white rounded-md w-full py-2 px-4 ${
//                     isError && !data ? "border error-border" : "border"
//                 }`}
//                 type={type}
//                 name={name}
//                 placeholder={placeholder}
//             />
//             {isError && !data && (
//                 <div className="error-message  gordita_regular text-right	absolute bottom-[-25px] right-0 ">
//                     <p className="error gordita_regular text-right	mt-0">
//                         this field is required
//                     </p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default FormField;
import postClient from "@/config/fetch/post";
import React, { useState } from "react";
import PhoneField from "./PhoneField";
import { getCookie } from "cookies-next";

function ContactFormField({
  setError,
  isError,
  setEditCountryCode,
  editphone,
  setEditPhone,
  number,
  setNumber,
  editCountryCode,
}: any) {
  return (
    <>
      <div className=" flex w-full max-sm:flex-col">
        <div className=" w-[50%] pr-[20px] max-sm:pr-[0px] max-sm:w-full max-sm:mb-[10px]">
          <small className="text-[#707880] text-[15px]">Name</small>
          <div className=" ">
            <input
              className="p-[10px]   rounded-md w-full text-[14px]"
              style={{ border: "1px solid#C5C5C5" }}
              type="text"
              placeholder="Enter your Full Name"
              name="name"
              required
            />
          </div>
        </div>
        <div className="w-[50%] max-sm:w-full max-sm:mb-[10px]">
          <small className="text-[#707880] text-[15px]">Email</small>
          <div>
            <input
              className="p-[10px]   rounded-md w-full text-[14px]"
              style={{ border: "1px solid#C5C5C5" }}
              type="text"
              placeholder="Enter your Email"
              name="email"
              required
            />
          </div>
        </div>
      </div>
      <div className="w-full py-[45px] max-sm:py-[0px] flex max-sm:flex-col max-sm:mb-[10px]">
        <div className="w-[50%] pr-[20px] max-sm:pr-[0px] max-sm:w-full max-sm:mb-[10px]">
          <small className="text-[#707880] text-[15px]">Company Name</small>
          <div>
            <input
              className="p-[10px]  rounded-md w-full text-[14px]"
              style={{ border: "1px solid#C5C5C5" }}
              type="text"
              placeholder="Enter your Company Name"
              name="company_name"
              required
            />
          </div>
        </div>
        <div className="w-[50%] max-sm:w-full max-sm:mb-[10px]">
          <small className="text-[#707880] text-[15px]">Phone</small>
          {/* <div
                            className="p-[10px]  rounded-md w-full flex items-center"
                            style={{ border: "1px solid#C5C5C5" }}
                        >
                            <div className="w-[20px] h-[20px] rounded-[50%] overflow-hidden flex justify-center mr-2 webkit-center">
                                <img
                                    className="w-full block object-cover"
                                    src="https://s3-alpha-sig.figma.com/img/2250/87b7/5fa319678e958bcc57e4cfff5cb45dea?Expires=1700438400&Signature=EIpXsyNciSXhTuhg6ShE8GXousCpH-W3K-jqXIEfDPcrUF7Y5MdM6394hT2K37uk1X8a21tHlLnf-gzEobixkNSXhqOX6dQKfy~EdndHt~sK2-u8~LiXkhCfqnK~TFyuL-SGmdbUyKTlX5OJxB-Fp552Z5nBk7KPTgYgmU2cGKB-eswDh2oQXbAjr4QO~BklIptGUMwbJ9Pny6L-T9wzKb5kqvUr-AvpEqXDZr8UJznHaAxfT9z62BD29r98zYSN9aiGCN2Jo4A2YPL9SQ2AViOaHWBGnSyuPlkmgW0zfqvUuWDkhKWQd7umCgT4EiQmzGbpW2l0STzVk0vYfbQBJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="flag_of_ind"
                                />
                            </div>
                            <p className="mr-2 text-[14px]">+91</p> */}
          <PhoneField
            defaultValue={editphone}
            setdata={setEditPhone}
            setCountryCode={setEditCountryCode}
            data={editphone}
            isError={isError}
            setError={setError}
            country_name="companion_country"
            placeholder="Enter phone number"
            name="phone"
            number={number}
            setNumber={setNumber}
          />
          {/* </div> */}
        </div>
      </div>
      <div className="flex flex-col">
        <small className="text-[#707880] text-[15px]">Requirement</small>
        <textarea
          className="p-[10px] mb-[25px]"
          style={{ border: "1px solid#C5C5C5", resize: "none" }}
          name="requirements"
          rows={5}
          cols={50}
          placeholder="Enter your message here..."
          required
        ></textarea>
      </div>
    </>
  );
}

export default ContactFormField;

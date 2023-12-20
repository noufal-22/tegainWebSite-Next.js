import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <div className="bg-[#1E1E1E] text-white p-8">
            <div className="wrapper">
            <div className="container mx-auto  flex flex-col md:flex-row justify-between items-start  ">
                <div
                    className="flex flex-col items-baseline   justify-between max-3xl:w-[393px]
                max-2xl:w-[393px] max-xl:w-[393px]  max-sk:w-[245px] "
                >
                    <h1 className=" w-[150px] mb-[14px]">
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/17-11-2023/tegain-logo.svg"
                            alt="Tegain Logo"
                            className="w-16 h-16 filter brightness-0 invert"
                        />
                    </h1>
                    <div className="gordita_regular text-[12px] items-start flex mb-[18px]">
                        <p className=" text-gray-400 max-md:text-[14px] text-[14px] max-md:w-[70%]">
                            Infra Futura, Tegain Private Limited 8th Floor,
                            Seaport- <br />
                            Airport Rd, opposite Bharath Mata College,
                            Thrikkakara, Ernakulam, Kerala 682021
                        </p>
                    </div>
                </div>
                <div className=" gordita_regular text-[14px] items-start flex flex-col max-md:mb-[10px]">
                    <h2 className="gordita_medium text-[20px] mb-[0.5rem] max-md:text-[17px]">
                        Contact{"  "}Us
                    </h2>
                    <p className=" text-gray-400 mb-[0.5rem] max-md:text-[14px] text-[14px]">
                        Email: info@tegain.com
                    </p>
                    <p className=" text-gray-400 mb-[0.5rem] max-md:text-[14px] text-[14px]">
                        General Enquiry: +91 858 9999 554
                    </p>
                    <p className=" text-gray-400 mb-[0.5rem] max-md:text-[14px] text-[14px]">
                        Whatsapp: +91 858 9999 554
                    </p>
                    <p className=" text-gray-400 mb-[0.5rem] max-md:text-[14px] text-[14px]">
                        HR Enquiry: +91 858 9999 554
                    </p>

                </div>
                <div className="hidden space-x-4 w-full max-md:flex  footer-margi ">
                    <Link
                        href="https://www.instagram.com/tegain_/?hl=en"
                        className=" "
                    >
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/10-11-2023/instagram.svg"
                            alt=""
                        />
                    </Link>
                    <Link
                        href="https://www.facebook.com/tegain"
                        className="mr-4"
                    >
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/10-11-2023/facebook.svg"
                            alt=""
                        />
                    </Link>
                    <Link
                        href="https://twitter.com/i/flow/login?redirect_after_login=%2Ftegain_"
                        className="mr-4 "
                    >
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/10-11-2023/twitter.svg"
                            alt=""
                        />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGctn-Vpdt5ugAAAYvICwuoha6jnkt22g9ZgQ7PV8upJlUv9JBmZL1Aw8pQR9I3GOySP6dpPzD0TjZAOD7XoHXcKBbVxlAMll0smTMVwCQ0jgRZxZR7kRS8SI1K1pE1w9GWSao=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftegain"
                        className="mr-4 "
                    >
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/17-11-2023/linkedin.svg"
                            alt=""
                        />
                    </Link>
                </div>
            </div>
            <div className="w-[full] max-md:hidden h-[1px] bg-[#333333] flex flex-col mb-[20px] mt-[20px] 
            justify-center "></div>


            <div className="container mx-auto  flex flex-col md:flex-row justify-between items-start
            max-md:flex-row max-md:items-center 
            max-md:justify-between max-sj:flex-col max-sk:items-start max-sl:items-start max-sl:flex-col">
                <span className="text-gray-400 font-gordita text-base flex max-sk:text-[14px] max-sk:mb-[15px] max-sl:mb-[14px]">
                    © 2023, Tegain Private Limited
                </span>
                <div className="flex flex-row items-center max-md:mt-0 ">
                    <Link
                        href="privacy-policy"
                        className="text-gray-400 gordita_medium  mr-4 max-sk:mr-0 w-full text-[14px] max-md:mt-0"
                    >
                        Privacy & Policy
                    </Link>
                    <div className="flex space-x-4 w-full max-md:hidden ">
                        <Link
                            href="https://www.instagram.com/tegain_/?hl=en"
                            className=" "
                        >
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/10-11-2023/instagram.svg"
                                alt=""
                            />
                        </Link>
                        <Link
                            href="https://www.facebook.com/tegain"
                            className="mr-4"
                        >
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/10-11-2023/facebook.svg"
                                alt=""
                            />
                        </Link>
                        <Link
                            href="https://twitter.com/i/flow/login?redirect_after_login=%2Ftegain_"
                            className="mr-4 "
                        >
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/10-11-2023/twitter.svg"
                                alt=""
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGctn-Vpdt5ugAAAYvICwuoha6jnkt22g9ZgQ7PV8upJlUv9JBmZL1Aw8pQR9I3GOySP6dpPzD0TjZAOD7XoHXcKBbVxlAMll0smTMVwCQ0jgRZxZR7kRS8SI1K1pE1w9GWSao=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftegain"
                            className="mr-4 "
                        >
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/17-11-2023/linkedin.svg"
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;

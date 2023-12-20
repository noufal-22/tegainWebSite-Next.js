import React from "react";
import Link from "next/link";
import Trimmed from "@/components/lottie-components/Trimmed";
// import { useSpring, animated } from '@react-spring/web'


function Spotlight() {
    // const springs = useSpring({
    //     from: { x: 0 },
    //     to: { x: 100 },
    //   })
    return (
        <div
        //  className="w-full md:w-1/2 flex justify-center items-center "
            // style={{
            //     backgroundImage: `url('https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/08-12-2023/tegainbg.svg')`,
            //     backgroundRepeat: "no-repeat",
            //     backgroundPosition: "bottomright",
            //     backgroundSize: "100%",
            // }}
            className="min-h-dvh max-lg:min-h-[50vh] max-md:min-h-hidden justify-center flex flex-col mt-[28px]w-full 
            min-h-[50vh] pt-[160px]relative  mt-[100px] pt-[30px]
            "
        >
            <div className="absolute z-[-10]  w-full block top-[-45px] right-[340px]">
            <Trimmed />
                
            </div>

            <div className="flex flex-col-reverse justify-center items-center wrapper md:flex-row md:items-start">
                <div className="md:w-1/2 mt-[60px] max-md:mt-0">
                    <div className="w-[40%] max-md:mb-[10px] max-mc:mb-[12px] ">
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/tegain-logo.svg"
                                alt="logo"
                            />
                    </div>
                    <div className="max-mc:mb-[34px] max-lg:mb-[34px]">
                        <div className="flex flex-col">
                            <div>
                                <div className="flex flex-row">
                                    <h5
                                        className="text-[50px] font-bold text-[#0A345F] max-w-[1007px] gordita_bold  
                                    max-lg:text-[39px] max-md:text-[39px] max-sm:text-[35px] max-sk:text-[25px] max-sj:text-[20px]
                                    max-mc:text-[29px] mr-[0.5rem] max-xl:text-[44px]"
                                    >
                                        The
                                    </h5>

                                    <h5
                                        className="text-[50px] font-bold text-[#55B5E7] gordita_bold max-lg:text-[39px] max-sj:text-[20px]
                                        
                                        max-md:text-[39px] max-sm:text-[35px] max-mc:text-[29px] mr-[0.5rem] max-xl:text-[44px] max-sk:text-[25px]"
                                    >
                                        IT Industry
                                    </h5>

                                    <small
                                        className="text-[50px] font-bold text-[#0A345F] max-w-[1007px] 
                                            gordita_bold  max-md:text-[39px] max-sm:text-[35px] max-lg:text-[39px]
                                            max-mc:text-[29px] max-xl:text-[44px] max-sk:text-[25px] max-sj:text-[20px]"
                                    >
                                        Of
                                    </small>
                                </div>
                            </div>
                            <div className="relative">
                                <h5
                                    className="text-[50px] font-bold text-[#0A345F] max-w-[1007px] gordita_bold 
                                max-md:text-[39px] max-sm:text-[35px] max-mc:text-[29px] max-xl:text-[44px] max-sk:text-[25px] max-sj:text-[20px]"
                                >
                                    Talrop
                                </h5>
                                <small
                                    className="absolute w-[169px] left-[-12px] bottom-[8px] 
                                max-xl:left-[-45px] max-lg:left-[-38px] max-md:w-[162px]  max-sm:mb-[1px]
                                max-sm:w-[122px] max-mc:left-[-18px] max-sj:left-[-6px] max-sj:bottom-[2px] max-sl:left-[-18px]
                                 max-mc:w-[118px] max-sl:bottom-[4px] max-sk:w-[100px] max-sj:w-[73px]"
                                >
                                    <img
                                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/blue-line.svg"
                                        alt=""
                                    />
                                </small>
                            </div>
                        </div>

                        <p className="text-[#282828] font-medium  gordita_regular max-sm:text-[16px] max-sm:mt-[20px] mt-[20px] mb-[38px]">
                            Tegain stands at the forefront of IT innovation,
                            poised to be your ultimate technological ally.
                            Welcome to a new era of IT excellence with Tegain.
                        </p>
                        <Link
                            href="#services"
                            className="bg-[#0A345F] rounded-md py-3 px-10 justify-center align items-center text-[#fff] 
                        max-sm:px-[34px] max-sm:py-[10px] max-sm:text-[14px] max-mc:mt-[-10px]"
                        >
                            Explore
                        </Link>
                    </div>
                </div>
                
                <div className="md:w-1/2 mb-[50px]">
                    <img
                        className="w-full block"
                        src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/main.svg"
                        alt="Green logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default Spotlight;

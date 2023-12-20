import React from "react";

function Aboutt() {
    return (
        <div
            style={{
                backgroundImage: `url('https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/07-11-2023/about-bg(2).png')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundSize: "100%",
            }}
            id="about"
            className="w-full bg-[#DEEFFF] py-[165px] max-lg:py-[61px]  max-sm:pb-[61px] max-sm:pt-[100px]"
        >
            <div className="wrapper flex align-center justify-between items-center flex-wrap-reverse	">
                <div className=" w-[40%] bg-[#55B5E7] rounded-2xl p-[20px] max-xl:w-[45%]  max-[1080px]:w-[60%] max-[1080px]:mx-auto max-mc:w-[70%] max-md:w-[90%] max-md:ml-0 max-md:mr-auto max-sk:w-[100%]">
                    <div
                        className="flex rounded-lg bg-[#fff] p-[20px] 
                    w-[100%] mb-[20px] translate-x-[70px] items-center  max-xl:translate-x-[58px] max-[1080px]:translate-x-[90px] max-sk:translate-x-[00px]
                    max-sl:translate-x-[80px]"
                    >
                        <div className="bg-[#E7F8E0] flex  justify-center items-center mr-[10px] p-[5px] aspect-square w-[40px] h-[40px] rounded-md	">
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/globe.svg"
                                alt=""
                            />
                        </div>
                        <div>
                            <h2 className="text-[#000] text-[16px] gordita_medium">
                                Your One-Stop IT Ecosystem
                            </h2>
                            <p className="text-[14px] text-[#707880]">
                                We provide comprehensive IT solutions under one
                                roof
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex items-center  rounded-lg bg-[#fff] p-[20px] 
                    w-[100%] mb-[20px] translate-x-[30px] max-xl:translate-x-[10px] max-[1080px]:translate-x-[50px] max-sk:translate-x-[00px]"
                    >
                        <div className="bg-[#EDEDFC] flex  justify-center items-center mr-[10px] p-[5px] aspect-square w-[40px] h-[40px] rounded-md	">
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/business.svg"
                                alt=""
                            />
                        </div>
                        <div>
                            <h2 className="text-[#000] text-[16px] gordita_medium">
                                Interlinking the IT Universe
                            </h2>
                            <p className="text-[14px] text-[#707880]">
                                We connect and integrate various IT components
                                for seamless operations
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex items-center  rounded-lg bg-[#fff] p-[20px] 
                    w-[100%]  translate-x-[90px] max-xl:translate-x-[60px] max-[1080px]:translate-x-[89px] max-sl:translate-x-[79px] 
                    max-sk:translate-x-[00px]"
                    >
                        <div className="bg-[#DEE5F3] flex  justify-center items-center mr-[10px] p-[5px] aspect-square w-[40px] h-[40px] rounded-md	">
                            <img
                                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/line-chart.svg"
                                alt=""
                            />
                        </div>
                        <div>
                            <h2 className="text-[#000] text-[16px] gordita_medium">
                                Growth, Opportunities, Collaboration
                            </h2>
                            <p className="text-[14px] text-[#707880]">
                                We foster growth, explore new opportunities and
                                promote collaboration within the IT ecosystem
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] max-xl:w-[45%] max-[1080px]:w-[100%] max-[1080px]:mb-[30px]">
                    <h1 className="text-[#0A345F] text-[35px] gordita_medium mb-[17px]">
                        About Us
                    </h1>
                    <p className="text-[#282828]  gordita_regular text-[16px]">
                        Tegain, proudly presented by Talrop, stands as the
                        epitome of a comprehensive IT ecosystem that caters to
                        all your technological needs. As your trusted one-stop
                        technological partner, we are driven by a singular core
                        objective: to provide expert and innovative solutions,
                        ultimately leading to the development of a robust and
                        finely-tuned IT environment.
                    </p>
                    <br />
                    <p className="text-[#282828]  gordita_regular text-[16px]">
                        At Tegain, we are unwavering in our commitment to
                        fostering abundant opportunities and facilitating
                        substantial growth. When you choose Tegain, you are
                        stepping into a future characterized by IT excellence,
                        where you can explore a universe of limitless
                        possibilities, thanks to our cutting-edge solutions and
                        unwavering dedication to your success.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Aboutt;

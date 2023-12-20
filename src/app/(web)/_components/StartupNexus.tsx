import React from "react";
import ServicesBox from "./ServicesBox";

function StartupNexus() {
  return (
    <div className=" flex justify-center py-20 flex-col mt-[100px] wrapper rounded-md">
      <div>
        <div
          className="flex w-[90%] pb-[40px] gordita_bold max-xl:w-full"
          style={{ margin: "0 auto" }}
        >
          <div className="flex  wrapper max-sl:w-[100%] ">
            <div className="w-[45%] py-5 mr-14 max-md:hidden">
              <div className=" max-xl:w-[350px] max-mc:w-[300px] ">
                <img
                  className="w-full block h-[350px] max-xl:h-[330px] max-mc:h-[300px]"
                  src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/12-12-2023/nexus.png"
                  alt="Business_Connect"
                />
              </div>
              {/* </div> */}
            </div>
            <div className="w-[50%] max-md:w-full  max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
              <small className="text-[#0A345F] gordita_medium text-[18px] max-mc:text-[14px] max-sk:w-full max-sk:text-start">
                Startup Nexus
              </small>
              <div className="flex flex-row mt-2 max-sk:w-full ">
                <div>
                  <h3 className="text-[35px] font-black pr-2 gordita_regular max-xl:text-[30px] max-mc:text-[20px] max-md:text-[30px] max-sl:text-[25px] ">
                    A
                  </h3>
                </div>
                <div className="relative">
                  <small className="text-[35px] font-black  pr-2 max-xl:text-[30px] max-mc:text-[20px] max-md:text-[30px] max-sl:text-[25px] max-sk:text-[21px] ">
                    Development
                  </small>
                  <div className="w-[200px] max-h-[16px] absolute bottom-0">
                    <img
                      className="w-full block"
                      src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/Blue_line.png"
                      alt="Blue_line"
                    />
                  </div>
                  <small className=" text-[35px] font-black max-xl:text-[30px] max-mc:text-[20px] max-sk:text-[21px] max-md:text-[30px] max-sl:text-[25px]">
                    Platform
                  </small>
                </div>
              </div>
              <h3 className="text-[35px] font-black text-[#55B6E7] max-xl:text-[30px] max-mc:text-[20px]max-sk:text-[21px] max-md:text-[30px]  max-md:mb-[40px] max-sl:text-[25px] max-sk:w-full">
                {" "}
                for Startups
              </h3>
              <div className=" hidden max-md:block">
                <div className="w-[430px] max-xl:w-[350px] max-mc:w-[380px]  max-md:mb-[40px]  max-sk:w-full">
                  <img
                    className="w-full block h-[350px] max-xl:h-[330px] max-mc:h-[300px] "
                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/12-12-2023/nexus.png"
                    alt="Business_Connect"
                  />
                </div>
              </div>
              <p className="mt-5 leading-[25px] max-xl:leading-[23px] max-mc:leading-[20px] max-xl:text-[14px] text-[15px] max-md:text-justify max-md:mt-0 max-sk:text-justify">
                Tegain Business Connect harnesses the power of artificial
                intelligence to automate key business processes. In an
                increasingly competitive business landscape, efficiency is
                paramount. Our AI tools enable you to streamline operations,
                reduce operational costs, and facilitate data-driven
                decision-making. Tegain Business Connect is your gateway to a
                more efficient, data-informed, and successful business future.
              </p>
              <div className="flex w-full justify-start pt-[35px] max-mc:pt-[18px] max-md:justify-center max-sk:justify-start">
                <a
                  href="/contact-us"
                  className="py-[10px] max-mc:py-[8px] px-[40px] max-mc:px-[30px] bg-[#55B6E7] text-white rounded-md cursor-pointer max-xl:text-[14px]"
                >
                  Connect with Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center gap-[10px] w-[95%] my-0 mx-auto mb-[50px]max-mc:mb-0 pb-[25px] py- max-mc:pt-0 max-xl:w-full max-sm:flex-col max-sm:w-full">
          <ServicesBox
            image={
              "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/15-12-2023/innovation-1.svg"
            }
            title={"Seamless Operations"}
            description={
              "Streamline tasks effortlessly with AI automation, ensuring smooth workflows"
            }
          />
          <ServicesBox
            image={
              "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/15-12-2023/technical-support-1.svg"
            }
            title={"Market Leadership"}
            description={
              "Stay ahead with innovative solutions, setting new industry standards"
            }
          />
          <ServicesBox
            image={
              "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/15-12-2023/security-1.svg"
            }
            title={"Data-Driven Decisions"}
            description={
              "Make smart choices with real-time insights, fueling your business growth"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default StartupNexus;

import React from "react";
import LabTabs from "./tabs/Tabs";

function TechHub() {
  return (
    <div className="wrapper bg-[#DEEFFF] flex justify-center flex-col mt-[100px]  p-12 max-mc:p-6 rounded-md max-sl:w-full">
      <div className="flex justify-center items-center pb-12 w-[95%] max-xl:w-full ">
        <div className="w-[50%] max-md:w-full  max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <small className="text-[#0A345F] gordita_medium text-[18px] max-mc:text-[14px] max-sk:w-full max-sk:text-start">
            Tech Hub
          </small>
          <div className="flex flex-row mt-2 max-sk:w-full ">
            <div>
              <h3 className="text-[35px] font-black pr-2 gordita_regular max-xl:text-[30px] max-mc:text-[20px]  max-md:text-[30px] max-sk:text-[21px] ">
                Crafting
              </h3>
            </div>
            <div className="relative">
              <small className="text-[#0A345F] text-[35px] font-black max-xl:text-[30px] max-mc:text-[20px]  max-md:text-[30px] max-sk:text-[21px]">
                Seamless Online
              </small>
              <div className="w-[145px] max-mc:w-[100px] max-md:w-[160px] max-h-[16px] absolute bottom-0">
                <img
                  className="w-full block"
                  src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/Asset 1 2.svg"
                  alt="Blue_line"
                />
              </div>
            </div>
          </div>
          <h3 className="text-[35px] max-xl:text-[30px] max-mc:text-[20px] max-md:text-[30px] max-md:mb-[40px] font-black max-sk:w-full max-sk:text-start max-sk:text-[21px]">
            {" "}
            Solutions.
          </h3>
          <div className=" hidden max-md:block ">
            <div className=" max-xl:w-[450px] max-mc:w-[380px] h-auto max-sk:w-full max-md:mb-[40px] max-sk:mb-[15px]">
              <img
                className="w-full block max-mc:h-[270px]"
                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/15-12-2023/tvimage.png"
                alt="Business_Connect"
              />
            </div>
          </div>
          <p className="mt-5 leading-[25px] max-xl:leading-[23px] max-mc:leading-[20px] max-xl:text-[14px] text-[15px] max-mc:text-justify max-md:mt-0 max-sk:text-justify">
            In today's fast-paced digital landscape, your online presence is
            more critical than ever. Tegain Tech Hub serves as the beating heart
            of your digital journey, offering expertly crafted websites, web
            applications, and mobile apps. We understand that staying connected
            and making a strong online impact are essential in this
            digitally-driven era. With Tegain Tech Hub, we provide the
            foundation to keep you digitally relevant and always connected to
            your audience.
          </p>
          <div className="flex w-full justify-start pt-[35px] max-mc:pt-[18px] max-md:justify-center max-sk:justify-start">
            <a
              href="/contact-us"
              className="py-[10px] max-mc:py-[8px] px-[40px] max-mc:px-[30px] bg-[#0F3B5F] text-white rounded-md cursor-pointer max-xl:text-[14px]"
            >
              Connect with Us
            </a>
          </div>
        </div>
        <div className="w-[45%] max-md:hidden" style={{ marginLeft: 45 }}>
          <div className=" max-xl:w-[400px] max-mc:w-[320px] h-auto">
            <img
              className="w-full block max-mc:h-[270px]"
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/display.png"
              alt="Business_Connect"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-8 pb-4 rounded-md max-sj:px-[10px] max-sj:py-[15px]">
        <LabTabs />
      </div>
    </div>
  );
}

export default TechHub;

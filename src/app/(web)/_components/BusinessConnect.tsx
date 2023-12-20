import React from "react";
import ServicesBox from "./ServicesBox";

function BusinessConnect() {
  return (
    <div className=" wrapper flex justify-center flex-col py-12 max-mc:pb-0 ">
      <div className="w-[85%] flex justify-center flex-col items-center my-0 mx-auto max-xl:w-full">
        <h1 className="text-center text-[40px] gordita_medium pb-[10px] max-sk:text-[30px]">
          Our Services
        </h1>
        <small
          className="text-center text-[15px] font-light max-xl:text-[15px] max-sk:text-[14px] max-mc:text-justify max-sk:text-justify  "
          style={{ fontWeight: 300 }}
        >
          Elevate your business with our comprehensive range of solutions. From
          Business Automation and Data-Driven Insights to Custom Software
          Development and Web & App Development, we tailor our expertise to meet
          your unique needs.
        </small>
      </div>
      <div
        className="flex w-[90%] py-12  pt-24 max-mc:pt-10 gordita_bold max-xl:w-full"
        style={{ margin: "0 auto" }}
      >
        <div className="flex">
          <div className="w-[40%] ml-[30px] max-md:hidden">
            <div className="w-[365px] max-xl:w-[300px] max-xl:h-auto h-auto bg-white rounded-lg max-mc:w-[250px] max-md:w-[300px]">
              <img
                className="w-full block"
                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/Business_Connect.png"
                alt="Business_Connect"
              />
            </div>
          </div>
          <div className="w-[50%] max-md:w-full  max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-sk:items-start">
            <small className="text-[#0A345F] gordita_medium text-[18px] max-mc:text-[14px] max-sk:w-full max-sk:text-start">
              Business Connect
            </small>
            <div className="flex flex-row mt-2 ">
              <div>
                <h3 className="text-[35px] max-xl:text-[30px] max-mc:text-[20px] max-md:text-[30px] max-sj:text-[21px] font-black pr-2 gordita_regular max-sk:text-[25px] ">
                  Tegain
                </h3>
              </div>
              <div className="relative">
                <small className="text-[#0A345F] text-[35px] max-xl:text-[30px] max-sj:text-[21px] max-mc:text-[20px] max-md:text-[30px] max-sk:text-[25px] font-black">
                  Business Connect
                </small>
                <div className="w-[265px] max-mc:w-[180px] max-h-[16px] absolute bottom-0">
                  <img
                    className="w-full block"
                    src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/Blue_line.png"
                    alt="Blue_line"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-[35px] max-xl:text-[30px] max-mc:text-[20px] max-sj:text-[21px] max-md:text-[30px] max-md:mb-[40px] max-sk:text-[25px] font-black">
              {" "}
              For Business Automation
            </h3>
            <div className=" hidden max-md:block">
              <div className="w-[350px] max-xl:h-auto h-auto bg-white rounded-lg max-mc:w-[380px] max-md:mb-[40px] max-sk:w-full">
                <img
                  className="w-full block"
                  src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/Business_Connect.png"
                  alt="Business_Connect"
                />
              </div>
            </div>
            <p className="mt-5 leading-[25px] max-xl:leading-[23px] max-mc:leading-[20px] max-xl:text-[14px] text-[15px] max-mc:text-justify  max-sk:text-justify max-md:mt-0">
              Tegain Business Connect harnesses the power of artificial
              intelligence to automate key business processes. In an
              increasingly competitive business landscape, efficiency is
              paramount. Our AI tools enable you to streamline operations,
              reduce operational costs, and facilitate data-driven
              decision-making. Tegain Business Connect is your gateway to a more
              efficient, data-informed, and successful business future.
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
      <div className=" flex justify-between items-center gap-[10px] w-[95%] max-xl:w-full my-0 mx-auto pb-[50px] max-sm:flex-col max-sm:w-full">
        <ServicesBox
          image={
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/machine .svg"
          }
          title={"Seamless Operations"}
          description={
            "Streamline tasks effortlessly with AI automation, ensuring smooth workflows"
          }
        />
        <ServicesBox
          image={
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/achievement 1.svg"
          }
          title={"Market Leadership"}
          description={
            "Stay ahead with innovative solutions, setting new industry standards"
          }
        />
        <ServicesBox
          image={
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/data-analytics 1.svg"
          }
          title={"Data-Driven Decisions"}
          description={
            "Make smart choices with real-time insights, fueling your business growth"
          }
        />
      </div>
    </div>
  );
}

export default BusinessConnect;

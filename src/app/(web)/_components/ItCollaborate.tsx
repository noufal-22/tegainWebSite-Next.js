import React from "react";
import ServicesBox from "./ServicesBox";

function ItCollaborate() {
  return (
    <div className="wrapper bg-[#DEEFFF] flex max-mc:p-6 justify-center flex-col mt-[100px] max-sl:p-4 max-sl:items-center p-12 rounded-md max-sk:w-full">
      <div className="flex justify-center items-center pb-12 w-[95%] max-sk:w-fulla ">
        <div className="w-[60%] max-md:w-full  max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-sk:items-start">
          <small className="text-[#0A345F] gordita_medium text-[18px] max-mc:text-[14px] max-sk:w-full max-sk:text-start">
            IT Collaborate
          </small>
          <div className="flex flex-row mt-2 ">
            <div>
              <h3 className="text-[35px] font-black pr-2 gordita_regular max-xl:text-[30px] max-mc:text-[20px] max-md:text-[30px] max-sk:text-[22px] ">
                Tegain
              </h3>
            </div>
            <div className="relative">
              <small className="text-[#0A345F] text-[35px] font-black pr-2 max-xl:text-[30px] max-mc:text-[20px] max-md:text-[30px] max-sk:text-[22px]">
                IT Collaborate
              </small>
              <div className="w-[240px] max-mc:w-[150px] max-h-[16px] absolute bottom-0">
                <img
                  className="w-full block"
                  src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/Blue_line.png"
                  alt="Blue_line"
                />
              </div>
              <small className=" text-[35px] font-black max-xl:text-[30px] max-mc:text-[20px] max-md:text-[30px] max-sk:text-[22px] ">
                for
              </small>
            </div>
          </div>
          <h3 className="text-[35px] font-black max-xl:text-[30px] max-mc:text-[20px] max-md:text-[30px] max-sk:text-[22px] max-md:mb-[40px] ">
            {" "}
            Outsourcing IT Projects
          </h3>
          <div className=" hidden max-md:block">
            <div className="max-w-[350px] max-xl:w-[300px] max-mc:w-[380px]  max-xl:h-auto h-auto bg-white rounded-lg  max-md:mb-[40px] max-sk:w-full ">
              <img
                className="w-full block"
                src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/12-12-2023/itcollaboratelogo.jpg"
                alt="Business_Connect"
              />
            </div>
          </div>
          <p className="mt-5 leading-[25px] max-xl:leading-[23px] max-mc:leading-[20px] max-xl:text-[14px] text-[15px] max-md:text-justify  max-sk:text-justify max-md:mt-0">
            In today's fast-paced digital landscape, your online presence is
            more critical than ever. Tegain Tech Hub serves as the beating heart
            of your digital journey, offering expertly crafted websites, web
            applications, and mobile apps. We understand that staying connected
            and making a strong online impact are essential in this
            digitally-driven era. With Tegain Tech Hub, we provide the
            foundation to keep you digitally relevant and always connected to
            your audience.
          </p>
          <div className="flex w-full justify-start pt-[35px] max-mc:pt-[18px] max-md:justify-center max-sk:justify-start ">
            <a
              href="/contact-us"
              className="py-[10px] max-mc:py[8px] px-[40px] max-mc:px-[30px] bg-[#0F3B5F] text-white rounded-md cursor-pointer max-xl:text-[14px]"
            >
              Connect with Us
            </a>
          </div>
        </div>
        <div className="w-[40%] ml-[30px] max-md:hidden">
          <div className="w-[365px] max-xl:w-[300px] max-xl:h-auto h-auto bg-white border-radius-it overflow-hidden max-mc:w-[250px] max-md:w-[300px]">
            <img
              className="w-full block"
              src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/12-12-2023/itcollaboratelogo.jpg"
              alt="Business_Connect"
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center gap-[10px] pt-12 max-mc:pt-0 my-0 mx-auto max-sm:flex-col max-sm:w-full">
        <ServicesBox
          image={
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/accounting 1.svg"
          }
          title={"Cost Savings"}
          description={
            "Explore innovative approaches to cut costs and boost profitability in the digital landscape"
          }
        />
        <ServicesBox
          image={
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/business 2.svg"
          }
          title={"Efficiency Enhancement"}
          description={
            "Enhance your digital operations for improved efficiency"
          }
        />
        <ServicesBox
          image={
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/success 1.svg"
          }
          title={"Digital Competitive Edge"}
          description={
            "Outperform Your Online Rivals with Effective Strategies"
          }
        />
      </div>
    </div>
  );
}

export default ItCollaborate;

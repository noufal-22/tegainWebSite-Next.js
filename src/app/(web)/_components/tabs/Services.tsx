import React from "react";

const techData = [
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/webdevelopment.svg",
        title: "Web Development",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/mobileapps.svg",
        title: "Mobile Apps",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/devops.svg",
        title: "DevOps Consulting",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/01-12-2023/erp.svg",
        title: "ERPs",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/branding.svg",
        title: "Branding",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/ecommerce.svg",
        title: "E-Commerce",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/uiuxdesigning.svg",
        title: "UI/UX Designing",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/01-12-2023/digital-marketing.svg",
        title: "Digital Marketing",
    },
];

function ServicesTab() {
    return (
        <div className=" gap-3 w-full flex flex-row flex-wrap justify-center max-md:flex-nowrap max-md:justify-start max-md:overflow-x-scroll">
            {techData.map((tech, index) => (
                <div
                    className="w-[24%] max-xl:w-[23.5%] max-mc:w-[30%] max-md:w-[50%] max-sk:w-[70%] max-sj:w-[80%] bg-[#EEF7F8]  mb-[25px]  "
                    style={{
                        border: "1px solid #D1EFFF",
                        borderRadius: "16px",
                    }}
                >
                    <div
                        key={index}
                        className="flex flex-col p-[25px] max-mc:p-[10px] justify-center items-center max-md:w-[130px]"
                    >
                        <div className="w-[50px] h-[50px] max-mc:w-[45px] max-mc:h-[45px] max-sk:w-[35px] max-sk:h-[35px] mb-2">
                            <img
                                className="w-full block "
                                src={tech.imageSrc}
                                alt=""
                            />
                        </div>
                        <span className="text-[#0A345F] text-[13px] max-mc:text-[12px] max-md:text-[10px]">
                            {tech.title}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServicesTab;

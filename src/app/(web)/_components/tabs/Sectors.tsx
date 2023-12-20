import React from "react";

const techData = [
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/elearning.svg",
        title: "E-Learning",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/ecommerce.svg",
        title: "E-Commerce",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/quickcommerce.svg",
        title: "Quick Commerce",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/realestate.svg",
        title: "Real Estate",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/pos.svg",
        title: "POS",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/sports.svg",
        title: "Sports",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/erp.svg",
        title: "ERP",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/accounting.svg",
        title: "Accounting",
    },
];

function Sectors() {
    return (
        <div className=" gap-3 w-full flex flex-row flex-wrap max-md:flex-nowrap max-md:overflow-x-scroll">
            {techData.map((tech, index) => (
                <div className="">
                    <div
                        key={index}
                        className="flex p-[10px] justify-center items-center max-sm:w-[135px] max-sl:w-[180px]  bg-[#EEF7F8] "
                        style={{
                            border: "1px solid #D1EFFF",
                            borderRadius: "16px",
                        }}
                    >
                        <div className="w-[45px] h-[45px] max-xl:w-[35px] max-xl:h-[35px] max-sk:w-[30px] max-sk:h-[30px] mr-[10px] max-xl:mr-[5px]">
                            <img
                                className="w-full block"
                                src={tech.imageSrc}
                                alt=""
                            />
                        </div>
                        <span className="text-[#0A345F] max-xl:text-[12px] max-sk:text-[10px]">
                            {tech.title}
                        </span>
                    </div>
                </div>
            ))}
            {/* <div
                className="flex text-[#0A345F] items-center gordita_medium p-4 md:p-20"
                style={{
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                }}
            >
                And all other major sectors...
            </div> */}
        </div>
    );
}

export default Sectors;

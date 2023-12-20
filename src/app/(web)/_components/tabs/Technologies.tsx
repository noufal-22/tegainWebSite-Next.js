import React from "react";

const techData = [
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/python.svg",
        title: "Python",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/react.svg",
        title: "React",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/nextjs.svg",
        title: "Next.js",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/html.svg",
        title: "Html",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/github.svg",
        title: "GitHub",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/figma.svg",
        title: "Figma",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/vscode.svg",
        title: "VS Code",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/angularjs.svg",
        title: "AngularJS",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/php.svg",
        title: "php",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/09-11-2023/css.svg",
        title: "Css",
    },
];

function Technologies() {
    return (
        <div className=" gap-3 w-full flex flex-row flex-wrap max-md:flex-nowrap max-md:overflow-x-scroll ">
            {techData.map((tech, index) => (
                <div className="">
                    <div
                        key={index}
                        className="flex p-[10px] justify-center items-center "
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
            <div
                className=" flex text-[#0A345F;] items-center gordita_medium p-[20px]"
                style={{
                    whiteSpace: "nowrap",

                    textOverflow: "ellipsis",
                }}
            >
                And more...
            </div>
        </div>
    );
}

export default Technologies;

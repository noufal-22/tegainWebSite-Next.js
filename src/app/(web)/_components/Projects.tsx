import React from "react";

const projectData = [
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/steyp.svg",
        title: "STEYP",
        description:
            "Steyp Private Limited is an EdTech company and the beginning of the Digital University for Industry 4.0, where one can find relevant courses to upgrade their skills from top experts and gear up for Industry 4.0. Steyp is an initiative from Talrop.",
        altText: "Image 1",
        readMoreLink: "#",
        visitWebsiteLink: "#",
        websiteStatus: "visitWebsiteLink",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/onaiza.svg",
        title: "ONAIZA",
        description:
            "Onaiza is an online marketplace where you can enter your local pincode to get products from nearby stores at great prices. Customers can purchase any category of goods from their preferred local retailers, and it especially makes it quicker for them to receive fresh fruit and veg, fish, and meats delivered safely to their doorway.",
        altText: "Image 2",
        readMoreLink: "#",
        visitWebsiteLink: "#",
        websiteStatus: "visitWebsiteLink",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/image-three.svg",
        title: "IPMS",
        description:
            "IPMS is a web application, that manages different properties and related areas like service charge management and ground rent collections. Mainly includes three levels which are portfolio level, service charge management, and ground rent collections.",
        altText: "Image 3",
        readMoreLink: "#",
        visitWebsiteLink: "#",
        websiteStatus: "visitWebsiteLink",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/image-four.svg",
        title: "4AN",
        description:
            "E-Learning Platform - Steyp is a Digital University for students to learn and become Computer...",
        altText: "Image 4",
        readMoreLink: "#",
        DownloadAppLink: "#",
        websiteStatus: "DownloadAppLink",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/image-five.svg",
        title: "QATAR MART",
        description:
            "It's an e-commerce system  for purchasing all of your regular necessities. They provide 24 hours customer support for their customers",
        altText: "Image 5",
        readMoreLink: "#",
        DownloadAppLink: "#",
        websiteStatus: "DownloadAppLink",
    },
    {
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/Image-six.svg",
        title: "DAY BAZAR",
        description:
            "It's a web application for purchasing all of your regular necessities. In this pandemic scenario, people can purchase any daily needed product without going to a store.",
        altText: "Image 6",
        readMoreLink: "#",
        DownloadAppLink: "#",
        websiteStatus: "DownloadAppLink",
    },
];

function Projects() {
    return (
        <div className="p-[76px] hidden">
            <div className="wrapper ">
                <div className="text-center items-center ">
                    {/* ... (your title and other elements) */}
                </div>
                <p className="text-[#242424] text-center gordita_regular mt-[20px]">
                    Driving Startup Momentum: Tegain's SaaS and B2B Solutions
                    Spread Across Every Constituency. Transforming
                    Entrepreneurial
                    <br /> Dreams into Digital Reality
                </p>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[20px]">
                    {projectData.map((project, index) => (
                        <div className="bg-[#F6F6F6] p-5 border rounded-md ">
                            <div
                                key={index}
                                className="flex flex-col p-12 border rounded-md bg-[#fff] items-center"
                            >
                                <div className="min-h-[130px] flex justify-center">
                                    <img
                                        src={project.imageSrc}
                                        alt={project.altText}
                                    />
                                </div>
                                <h3 className="gordita_medium text-[#545454] mt-2">
                                    {project.title}
                                </h3>
                                <p
                                    className="gordita_regular text-[14px] text-[#545454] mt-2"
                                    style={{
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 3, // Limit to three lines
                                        overflow: "hidden",
                                    }}
                                >
                                    {project.description}
                                </p>
                                <a
                                    href={project.readMoreLink}
                                    className="text-sm text-[#134070]"
                                >
                                    ...read More
                                </a>
                            </div>
                            <div className="flex flex-col mt-4">
                                <a
                                    href={project.visitWebsiteLink}
                                    className="gordita_medium text-[#134070] mb-2"
                                >
                                    Visit Website
                                </a>
                                <a
                                    href={project.DownloadAppLink}
                                    className="gordita_medium text-[#134070]"
                                >
                                    Download App
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;

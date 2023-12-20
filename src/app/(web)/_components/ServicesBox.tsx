import React from "react";

interface ServicesBoxprop {
  image: string;
  title: string;
  description: string;
}

const ServicesBox: React.FC<ServicesBoxprop> = ({
  image,
  title,
  description,
}) => {
  return (
    // <div className="w-full flex justify-between items-center gap-[10px] ">
    <div
      className="w-[32%] h-[100px]  max-sm:w-full max-mc:h-[200px] max-sm:h-[100px] flex max-mc:justify-center max-sm:justify-start max-mc:flex-col max-sm:flex-row items-center p-[15px] max-md:p-[13px]"
      style={{
        borderRadius: "16px",
        border: "2px solid rgba(255, 255, 255, 0)",
        background:
          "linear-gradient(313deg, rgba(255, 255, 255, 0.06) 0.9%, #FFF 99.1%)",
      }}
    >
      <div className="w-[100px] max-mc:w-[80px] flex items-center p-[13px]">
        <img className="w-full block" src={image} alt={title} />
      </div>
      <div className="flex flex-col justify-center max-sm:justify-start">
        <span className="gordita_medium text-[14px] max-mc:text-center  max-sm:text-start">
          {title}
        </span>
        <small className="text-[13px] mt-1 max-mc:text-center max-sm:text-start">
          {description}
        </small>
      </div>
    </div>
    // </div>
  );
};

export default ServicesBox;

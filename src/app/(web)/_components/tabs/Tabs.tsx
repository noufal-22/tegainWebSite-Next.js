"use client";

import * as React from "react";
import Technologies from "./Technologies";
import ServicesTab from "./Services";
import Sectors from "./Sectors";

import { Fragment } from "react";
import { Tab } from "@headlessui/react";

export default function LabTabs() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  console.log("index", selectedIndex);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List
        className="justify-center"
        style={{
          display: "flex",
          justifyContent: "space-around",
          //   borderBottom: "1px solid #aaa",
          //   paddingBottom: "10px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            width: "33.33%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className="w-full h-150px">
                <div
                  className="max-sl:flex-col max-sl:justify-center max-sl:items-center mb-[10px] max-sl:mb-[5px] "
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="image-width-tabs ">
                    <img
                      src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/public-service%201.svg"
                      alt="public-service"
                    />
                  </div>
                  <span className="span-test-stylingcss margin-tabs">
                    Services
                  </span>
                </div>
                <div
                  className={` relative  ${
                    selected
                      ? "bg-[#0A345F] h-[2px] w-full  absolute "
                      : " bg-gray-500 h-[1px] w-full absolute"
                  }`}
                ></div>
              </button>
            )}
          </Tab>
        </div>
        <div
          style={{
            width: "33.33%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className="w-full">
                {" "}
                <div
                  className="max-sl:flex-col max-sl:justify-center max-sl:items-center  mb-[10px] max-sl:mb-[5px] "
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="image-width-tabs">
                    <img
                      src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/global-education 1.svg"
                      alt="public-service"
                    />
                  </div>
                  <span
                    // style={{
                    //   marginLeft:
                    //     typeof window !== "undefined" &&
                    //     window.innerWidth <= 560
                    //       ? 0
                    //       : 10,
                    // }}
                    className="margin-tabs"
                  >
                    Sectors
                  </span>
                </div>
                <div
                  className={` relative  ${
                    selected
                      ? "bg-[#0A345F] h-[2px] w-full  absolute "
                      : " bg-gray-500 h-[1px] w-full absolute"
                  }`}
                ></div>
              </button>
            )}
          </Tab>
        </div>
        <div
          style={{
            width: "33.33%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className="w-full">
                {" "}
                <div
                  className="max-sl:flex-col max-sl:justify-center max-sl:items-center  mb-[10px] max-sl:mb-[5px]"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="image-width-tabs ">
                    <img
                      src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/04-12-2023/technologies.svg"
                      alt="public-service"
                    />
                  </div>
                  <span className="margin-tabs">Technologies</span>
                </div>
                <div
                  className={` relative  ${
                    selected
                      ? "bg-[#0A345F] h-[2px] w-full  absolute "
                      : " bg-gray-500 h-[1px] w-full absolute"
                  }`}
                ></div>
              </button>
            )}
          </Tab>
        </div>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <ServicesTab />
        </Tab.Panel>
        <Tab.Panel>
          <Sectors />
        </Tab.Panel>
        <Tab.Panel>
          <Technologies />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    // <Box sx={{ width: "100%", typography: "body1" }}>
    //     <TabContext value={value}>
    //         <Box
    //             sx={{ borderBottom: 1, borderColor: "divider", padding: 0 }}
    //         >
    //             <TabList
    //                 className="justify-center"
    //                 onChange={handleChange}
    //                 aria-label="lab API tabs example"
    //                 style={{
    //                     display: "flex",
    //                     justifyContent: "space-around",
    //                 }}
    //             >
    // <Tab
    //     icon={
    // <div
    //     className="max-sl:flex-col max-sl:justify-center max-sl:items-center "
    //     style={{
    //         display: "flex",
    //         alignItems: "center",
    //     }}
    // >
    //     <div style={{ width: "25px" }}>
    //         <img
    //             src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/public-service%201.svg"
    //             alt="public-service"
    //         />
    //     </div>
    //     <span
    //         className="span-test-stylingcss"
    //         style={{
    //             marginLeft:
    //                 typeof window !== "undefined" &&
    //                 window.innerWidth <= 560
    //                     ? 0
    //                     : 10,
    //         }}
    //     >
    //         Services
    //     </span>
    // </div>
    //     }
    //     iconPosition="start"
    //     value="1"
    // />
    // <Tab
    //     icon={
    //     <div
    //         className="max-sl:flex-col max-sl:justify-center max-sl:items-center "
    //         style={{
    //             display: "flex",
    //             alignItems: "center",
    //         }}
    //     >
    //         <div style={{ width: "25px" }}>
    //             <img
    //                 src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/global-education 1.svg"
    //                 alt="public-service"
    //             />
    //         </div>
    //         <span
    //             style={{
    //                 marginLeft:
    //                     typeof window !== "undefined" &&
    //                     window.innerWidth <= 560
    //                         ? 0
    //                         : 10,
    //             }}
    //         >
    //             Sectors
    //         </span>
    //     </div>
    // }
    //     iconPosition="start"
    //     value="2"
    // />
    // <Tab
    //     icon={
    // <div
    //     className="max-sl:flex-col max-sl:justify-center max-sl:items-center "
    //     style={{
    //         display: "flex",
    //         alignItems: "center",
    //     }}
    // >
    //     <div style={{ width: "25px" }}>
    //         <img
    //             src="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/06-11-2023/digitalization 1.svg"
    //             alt="public-service"
    //         />
    //     </div>
    //     <span
    //         style={{
    //             marginLeft:
    //                 typeof window !== "undefined" &&
    //                 window.innerWidth <= 560
    //                     ? 0
    //                     : 10,
    //         }}
    //     >
    //         Technologies
    //     </span>
    // </div>
    //     }
    //     iconPosition="start"
    //     value="3"
    // />
    //             </TabList>
    //         </Box>
    //         <TabPanel value="1">
    //             <ServicesTab />
    //         </TabPanel>
    //         <TabPanel value="2">
    //             <Sectors />
    //         </TabPanel>
    //         <TabPanel value="3">
    //             <Technologies />
    //         </TabPanel>
    //     </TabContext>
    // </Box>
  );
}

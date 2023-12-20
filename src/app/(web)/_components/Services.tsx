import React from "react";
import BusinessConnect from "./BusinessConnect";
import TechHub from "./TechHub";
import StartupNexus from "./StartupNexus";
import ItCollaborate from "./ItCollaborate";

function Services() {
  return (
    <div
      id="services"
      className="  min-h-dvh flex items-center  flex-col w-full pb-20 pt-20 max-sk:pt-0 max-mc:pt-24 bg-[#F0F4F7]"
    >
      <BusinessConnect />
      <TechHub />
      <StartupNexus />
      <ItCollaborate />
    </div>
  );
}

export default Services;

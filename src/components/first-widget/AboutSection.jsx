import React from "react";
import WidgetSideBoxIcon from "../WidgetSideBoxIcon";
import ScrollBar from "./ScrollBar";

function AboutSection() {
  return (
    <div className="flex mt-2 gap-6 p-2 ml-2.5">
      <WidgetSideBoxIcon />
      <div className="w-[611px] text-[18px] leading-[25.2px] h-[175px] font-normal text-[#969696]">
        <p className="mb-6">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now.
        </p>
        <p>
          I was born and raised in Albany, NY& have been living in Santa Carla
          for the past 10 years my wife Tiffany and my 4 year old twin
          daughters- Emma and Ella. Both of them are just starting school, so my
          calender is usually blocked between 9-10 AM. This is a...
        </p>
      </div>
      <div className="">
        <ScrollBar />
      </div>
    </div>
  );
}



export default AboutSection;

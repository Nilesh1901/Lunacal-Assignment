import React from "react";
import WidgetSideBoxIcon from "../WidgetSideBoxIcon";
import ScrollBar from "./ScrollBar";

function ExperienceSection() {
  return (
    <div className="flex mt-2 gap-6 p-2 ml-2.5">
      <WidgetSideBoxIcon />
      <div className="w-[611px] text-[18px] leading-[25.2px] h-[175px] font-normal text-[#969696]">
        <p className="mb-2">
          Hello! I’m Dave, your dedicated sales representative from Salesforce.
          I’ve had the pleasure of working with this incredible company for the
          past three years, helping clients grow and succeed.
        </p>
        <p>
          Originally from Albany, NY, I’ve been calling Santa Carla home for the
          last 10 years, where I live with my wife Tiffany and our twin
          daughters, Emma and Ella.
        </p>
      </div>
      <div className="">
        <ScrollBar />
      </div>
    </div>
  );
}

export default ExperienceSection;

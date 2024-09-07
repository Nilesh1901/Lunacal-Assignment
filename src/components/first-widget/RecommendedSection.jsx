import React from "react";
import WidgetSideBoxIcon from "../WidgetSideBoxIcon";
import ScrollBar from "./ScrollBar";

function RecommendedSection() {
  return (
    <div className="flex mt-2 gap-6 p-2 ml-2.5">
      <WidgetSideBoxIcon />
      <div className="w-[611px] text-[18px] leading-[25.2px] h-[175px] font-normal text-[#969696]">
        <p>
          Hello! I’m Dave, a sales representative at Salesforce. With three
          years at the company, I’ve helped many clients thrive. Originally from
          Albany, NY, I’ve lived in Santa Carla for a decade with my wife
          Tiffany and our four-year-old twins, Emma and Ella. Mornings are busy
          as they start school, but I’m here to support you whenever you need
          it!
        </p>
      </div>
      <div className="">
        <ScrollBar />
      </div>
    </div>
  );
}

export default RecommendedSection;

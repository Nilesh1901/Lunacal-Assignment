import React from "react";
import FirstWidget from "./first-widget/WidgetContainer";

import HrTag from "./HrTag";
import SecondWidget from "./second-widget/SecondWidget";

const WidgetSection = () => {
  return (
    <div className="flex-col pt-[65px]  h-screen justify-center ">
      <FirstWidget />
      <HrTag />
      <SecondWidget />
      <HrTag />
    </div>
  );
};

export default WidgetSection;

import React from "react";

function WidgetWraper({ children }) {
  return (
    <div className="h-[316px]  w-[720px] bg-[#363c43] rounded-[27px] shadow-widget-custom">
      {children}
    </div>
  );
}

export default WidgetWraper;

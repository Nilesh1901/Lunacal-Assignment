import React from "react";
import QuestionIcon from "../QuestionIcon";
import SecondWidgetTopRightSection from "./SecondWidgetTopRightSection";

function SecondWidgetTopSection({
  fileInputRef,
  handleImageUpload,
  handleNext,
  handlePrev,
}) {
  return (
    <div className="p-4 flex gap-4">
      <QuestionIcon />
      <div className="w-full flex justify-between items-center">
        <GalaryBanner name="Galary" />
        <SecondWidgetTopRightSection
          fileInputRef={fileInputRef}
          handleImageUpload={handleImageUpload}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
}

function GalaryBanner({ name }) {
  return (
    <button className="h-[90%] bg-[#171717] px-8 py-3 flex justify-center items-center rounded-2xl text-white text-lg shadow-inner shadow-black font-medium">
      {name}
    </button>
  );
}

export default SecondWidgetTopSection;

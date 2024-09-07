import React from "react";
import AddImageBtn from "./AddImageBtn";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function SecondWidgetTopRightSection({
  fileInputRef,
  handleImageUpload,
  handleNext,
  handlePrev,
}) {
  return (
    <div>
      <div className="flex gap-4 px-4">
        <AddImageBtn
          fileInputRef={fileInputRef}
          handleImageUpload={handleImageUpload}
        />
        <div className="flex gap-4 text-[#6F787C] text-xl px-2">
          {["prev", "next"].map((e) => (
            <div
              key={e}
              className="rounded-full shadow-btn-next-prev active:scale-[0.8] z-0"
            >
              <button
                className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3 shadow-btn-next-prev2"
                onClick={e === "prev" ? handlePrev : handleNext}
              >
                {e === "prev" ? <FaArrowLeft /> : <FaArrowRight />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecondWidgetTopRightSection;

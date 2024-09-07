import React from "react";
import QuestionIcon from "../QuestionIcon";

function NavBar({ handleClick, isActive }) {
  const navElements = ["About Me", "Experiences", "Recommended"];

  const activeIndex = navElements.indexOf(isActive);

  return (
    <div className="w-full flex p-4 gap-4">
      <QuestionIcon />
      <div className="nav-container relative w-[614px] h-[62px] flex items-center bg-black justify-center rounded-[26px] font-semibold text-[12px]">
        {/* Slider that moves under the active element */}
        <div
          className="absolute w-[195px] h-[49px] bg-[#28292F] rounded-2xl transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${activeIndex * 200 - 200}px)`,
          }}
        />

        <div className="nav w-[597px] h-[49px]  flex gap-6 justify-between items-center relative">
          {navElements.map((e, index) => (
            <div
              key={e}
              onClick={() => handleClick(e)}
              className={`relative z-10 w-[195px] h-[49px] py-[10px] rounded-2xl flex justify-center items-center cursor-pointer font-[Poppins] font-medium text-[18px] transition-all duration-300 ease-in-out 
              ${isActive === e ? "text-white" : "text-[#b4aeae]"}
              hover:text-white`}
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import { FaPlus } from "react-icons/fa6";

function AddImageBtn({ fileInputRef, handleImageUpload }) {
  return (
    <div className="shadow-[6px_7px_5px_1px_#1f1f1fab] rounded-full">
      <button
        className="px-4 py-3 rounded-full bg-[#FFFFFF08] text-white font-semibold text-xs flex justify-center items-center gap-1 shadow-inner shadow-[#a7a4a4b5]"
        onClick={() => fileInputRef.current.click()}
      >
        <FaPlus className="w-[10px] mb-[1.4px]" /> ADD IMAGE
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
}

export default AddImageBtn;

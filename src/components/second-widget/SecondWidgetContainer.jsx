import React, { useState, useRef, useCallback } from "react";
import WidgetSideBoxIcon from "../WidgetSideBoxIcon";
import WidgetWraper from "../WidgetWraper";
import SecondWidgetTopSection from "./SecondWidgetTopSection";
import imagesData from "../../ImageData";

function SecondWidgetContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(imagesData);

  const fileInputRef = useRef(null);

  const handleNext = useCallback(() => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }, [currentIndex]);

  const handleImageUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  return (
    <WidgetWraper>
      <SecondWidgetTopSection
        fileInputRef={fileInputRef}
        handleImageUpload={handleImageUpload}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />

      <div className="flex gap-4 mt-2 p-2 ml-2.5">
        <WidgetSideBoxIcon />
        <div className="overflow-hidden h-full py-3 pl-3 w-full">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (190 + 24)}px)`, // 190px (image width) + 24px (gap)
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="relative flex-shrink-0">
                <img
                  src={image}
                  className="h-[179px] w-[190px] rounded-3xl object-cover transition-transform duration-500 transform hover:scale-110 hover:-rotate-[2deg] opacity-25 hover:opacity-100"
                  alt={`Image ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </WidgetWraper>
  );
}

export default SecondWidgetContainer;

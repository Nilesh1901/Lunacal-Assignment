import React, { useState } from "react";

import WidgetWraper from "../WidgetWraper";
import NavBar from "./NavBar";

import ExperienceSection from "./ExperienceSection";
import AboutSection from "./AboutSection";
import RecommendedSection from "./RecommendedSection";

const WidgetContainer = () => {
  const [isActive, setIsActive] = useState("About Me");

  const clicked = (active) => {
    setIsActive(active);
  };

  return (
    <WidgetWraper>
      <NavBar handleClick={clicked} isActive={isActive} />
      {isActive === "About Me" && <AboutSection />}
      {isActive === "Experiences" && <ExperienceSection />}
      {isActive === "Recommended" && <RecommendedSection />}
    </WidgetWraper>
  );
};

export default WidgetContainer;

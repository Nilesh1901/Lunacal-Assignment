import React from "react";
import EmptyBox from "./components/EmptyBox";

import WidgetSection from "./components/WidgetSection";

const App = () => {
  return (
    <div className="flex min-h-screen gap-8 items-center px-4 justify-center lg:justify-normal bg-custom-gradient overflow-hidden">
      <EmptyBox />

      <WidgetSection />
    </div>
  );
};

export default App;

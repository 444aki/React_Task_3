import React from "react";
import ColorPicker from "./ColorPicker";

const App = () => {
  const colors = [
    "#fe0000",
    "#00ff01",
    "#0001fb",
    "#ffff01",
    "#ff00fe",
    "#01ffff",
    "#fea500",
    "#81007f",
    "#008001",
    "#fe6347",
    "#01ced1",
    "#ff8b00",
    "#4582b4",
    "#ffd600",
  ];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;

import React, { useState } from "react";

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
    document.body.style.backgroundColor = color; // Set the background color of the body
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <button onClick={handleButtonClick}>Pick a color</button>

      {isOpen && (
        <ul style={{ listStyle: "none;" }}>
          {colors.map((color, index) => (
            <li key={index} onClick={() => handleColorClick(color)}>
              <div
                style={{
                  backgroundColor: color,
                  width: "30px",
                  height: "30px",
                  border: "1px solid #000",
                }}
              ></div>
            </li>
          ))}
        </ul>
      )}

      {selectedColor && (
        <p>
          You have selected:{" "}
          <span style={{ color: "white" }}>{selectedColor}</span>
        </p>
      )}
    </div>
  );
};

export default ColorPicker;

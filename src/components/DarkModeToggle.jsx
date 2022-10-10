import React, { useState } from "react";

const DarkModeToggle = (props) => {
  const { theme, setTheme } = props;
  const [isLightMode, setIsLightMode] = useState(true);

  const handleClick = () => {
    console.log("hi");
    setIsLightMode(!isLightMode);

    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={() => {
        handleClick(isLightMode);
      }}
    >
      {isLightMode ? "🌘" : "🌞"}
    </button>
  );
};

export default DarkModeToggle;

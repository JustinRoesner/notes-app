import React, { useState } from "react";

const DarkModeToggle = (props) => {
  const { theme, setTheme } = props;

  const handleClick = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={() => {
        handleClick();
      }}
    >
      {theme == "light" ? "🌘" : "🌞"}
    </button>
  );
};

export default DarkModeToggle;

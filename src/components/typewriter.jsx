import React, { useState, useEffect } from "react";

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 200); // Adjust typing speed here (milliseconds)

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);
  return <span>{currentText}</span>;
};

export default Typewriter;

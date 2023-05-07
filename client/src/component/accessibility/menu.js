import React, { useState, useEffect } from "react";
import "./menu.css";
import acc from "../../images/acc.png";
import fontsize from "../../images/fontsize.png";
import speak from "../../images/speak.png";
import translateimg from "../../images/translateimg.png";
import axios from "axios";

function Menu({
  fontSize,
  onFontSizeChange,
  readAloud,
  onReadAloudChange,
  description,
  summary,
  onTranslateClick,
  translatedText,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [increaseCount, setIncreaseCount] = useState(0);

  const handleIncreaseFontSize = () => {
    setIncreaseCount((prevCount) => prevCount + 1);

    if (increaseCount === 5) {
      onFontSizeChange(16);
      setIncreaseCount(0);
    } else {
      onFontSizeChange((prevSize) => prevSize + 2);
    }
  };

  const handleToggleReadAloud = () => {
    if (readAloud) {
      speechSynthesis.cancel();
    }
    onReadAloudChange(!readAloud);
  };

  const handleToggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen);
  };

  const handleTranslateClick = () => {
    if (onTranslateClick) {
      onTranslateClick();
    }
  };

  useEffect(() => {
    let text = summary;
    if (translatedText !== null) {
      text = translatedText;
    }

    if (readAloud) {
      const utterance = new SpeechSynthesisUtterance(
        "Description: " + description + " Summary: " + text
      );
      utterance.onend = () => {
        onReadAloudChange(false);
      };
      speechSynthesis.speak(utterance);
    }
  }, [readAloud, description, summary]);

  return (
    <div className="acc-menu">
      <img
        src={acc}
        className="acc-menu-toggle menu-buttons"
        onClick={handleToggleMenu}
        aria-expanded={isMenuOpen}
      />
      {isMenuOpen && (
        <div className="menu-buttons">
          <button onClick={handleIncreaseFontSize}>
            <img src={fontsize} /> Increase Font Size
          </button>
          <button onClick={handleToggleReadAloud}>
            <img src={speak} />
            {readAloud ? "Stop Reading" : "Read Aloud"}
          </button>
          <button onClick={handleTranslateClick}>
            <img src={translateimg} />
            Translate
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;

import React, { useState, useEffect } from "react";
import "./menu.css";
import acc from "../../images/acc.png";
import fontsize from "../../images/fontsize.png";
import speak from "../../images/speak.png";
import translate from "../../images/translate.png";

function Menu({
  fontSize,
  onFontSizeChange,
  readAloud,
  onReadAloudChange,
  description,
  summary,
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

  useEffect(() => {
    if (readAloud) {
      const utterance = new SpeechSynthesisUtterance(
        "Description: " + description + " Summary: " + summary
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
          <button className="font-size-button" onClick={handleIncreaseFontSize}>
            <img src={fontsize} /> Increase Font Size
          </button>
          <button className="read-aloud-button" onClick={handleToggleReadAloud}>
            <img src={speak} />
            {readAloud ? "Stop Reading" : "Read Aloud"}
          </button>
          <button>
            <img src={translate} />
            Translate <div id="translate"></div>
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;

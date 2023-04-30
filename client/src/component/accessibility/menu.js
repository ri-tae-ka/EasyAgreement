import React, { useState, useEffect } from "react";

function Menu({
  fontSize,
  onFontSizeChange,
  readAloud,
  onReadAloudChange,
  description,
  summary,
}) {
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
    <div>
      <button className="font-size-button" onClick={handleIncreaseFontSize}>
        Increase Font Size
      </button>
      <button className="read-aloud-button" onClick={handleToggleReadAloud}>
        {readAloud ? "Stop Reading" : "Read Aloud"}
      </button>
      <button>Translate <div id="translate"></div></button>
    </div>
  );
}

export default Menu;

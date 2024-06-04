import React from "react";
import "./loveButtons.css";

type Props = {
  sendDecision: (decision: "yes" | "no") => Promise<void>;
};

const LoveButtons = ({ sendDecision }: Props) => {
  return (
    <div className="love-buttons">
      <button
        className="yes-button"
        onClick={async () => {
          await sendDecision("yes");
        }}
      >
        YES
      </button>
      <button
        className="no-button"
        onClick={async () => {
          await sendDecision("no");
        }}
      >
        NO
      </button>
    </div>
  );
};

export default LoveButtons;

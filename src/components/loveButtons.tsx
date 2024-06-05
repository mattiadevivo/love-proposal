import React, { useRef, useState } from "react";
import "./loveButtons.css";
import Lottie, { LottieRefCurrentProps, LottieOptions } from "lottie-react";
import yesAnimation from "../assets/yes-animation.json";
import noAnimation from "../assets/no-animation.json";

type Props = {
  sendDecision: (decision: "yes" | "no") => Promise<void>;
};

const LoveButtons = ({ sendDecision }: Props) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [decision, setDecision] = useState<"yes" | "no" | null>(null);
  const yesAnimationOptions = {
    animationData: decision === "yes" ? yesAnimation : noAnimation,
    loop: false,
    autoplay: true,
    onComplete: () => {
      setShowAnimation(false);
    },
    style: {
      maxHeight: "150px",
      maxWidth: "150px",
    },
  } satisfies LottieOptions;

  const lottieRef = useRef<LottieRefCurrentProps>(null);
  return (
    <>
      {showAnimation && (
        <Lottie lottieRef={lottieRef} {...yesAnimationOptions}></Lottie>
      )}
      <div className="buttons-container">
        <button
          className="love-button"
          onClick={async () => {
            setDecision("yes");
            setShowAnimation(true);
            await sendDecision("yes");
          }}
        >
          YES 😍
        </button>
        <button
          className="love-button"
          onClick={async () => {
            setDecision("no");
            setShowAnimation(true);
            await sendDecision("no");
          }}
        >
          NO 💔
        </button>
      </div>
    </>
  );
};

export default LoveButtons;

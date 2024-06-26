import { useRef, useState } from "react";
import "./loveButtons.css";
import Lottie, { LottieRefCurrentProps, LottieOptions } from "lottie-react";
import yesAnimation from "../assets/yes-animation.json";
import noAnimation from "../assets/no-animation.json";
import type { SendDecision } from "../App";

type Props = {
  sendDecision: SendDecision;
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
            if (showAnimation) return;
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
            if (showAnimation) return;
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

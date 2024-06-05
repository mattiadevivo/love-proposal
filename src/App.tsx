import React from "react";
import "./App.css";
import LoveButtons from "./components/loveButtons";

function App() {
  const sendDecision = async (decision: "yes" | "no") => {
    const slackWebHookUrl = import.meta.env.VITE_SLACK_WEBHOOK_URL;
    await fetch(slackWebHookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        text:
          `${import.meta.env.VITE_GIRL_NAME} answered: ` +
          decision +
          ` ${
            decision == "yes"
              ? "👍! Congrats, you're officially fiancés"
              : "👎... Probably not the right time for you"
          }`,
      }),
    });
  };

  return (
    <div className="App">
      <p className="introduction">
        I just wanted to take a moment to share something that's been on my
        mind. You are such an empathetic, sunny, and sweet person, and every day
        I feel incredibly lucky to have you in my life. Your warmth and kindness
        never fail to brighten my day, and I cherish the moments we share
        together. Over time, my feelings for you have grown deeper, and I can't
        help but smile when I think about all the wonderful memories we've
        created. You mean the world to me, and I truly appreciate everything you
        do. I would love to take this next step with you and see where this
        beautiful journey leads us.
      </p>
      <h1>
        {import.meta.env.VITE_GIRL_NAME}, do you want to be my girlfriend?
      </h1>
      <LoveButtons sendDecision={sendDecision} />
      <footer style={{ marginTop: "auto" }}>
        Made with ❤️ by{" "}
        <a href="https://mattiadevivo.dev" target="_blank">
          Mattia De Vivo
        </a>
      </footer>
    </div>
  );
}

export default App;

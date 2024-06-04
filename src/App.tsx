import React from "react";
import "./App.css";
import LoveButtons from "./components/loveButtons";

function App() {
  const sendDecision = async (decision: "yes" | "no") => {
    const slackWebHookUrl =
      "/api/slack/services/T0H12A4LU/B076N2U1UDS/BoaiAIKlbeVDKuUxhRFEIGfk";
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
          ` ${decision == "yes" ? "👍" : "👎"}`,
      }),
    });
  };

  return (
    <div className="App">
      <h1>
        {import.meta.env.VITE_GIRL_NAME}, do you want to be my girlfriend?
      </h1>
      <LoveButtons sendDecision={sendDecision} />
    </div>
  );
}

export default App;

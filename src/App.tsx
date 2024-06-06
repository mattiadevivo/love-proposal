import "./App.css";
import LoveButtons from "./components/loveButtons";

function App() {
  const sendDecision = async (decision: "yes" | "no") => {
    const slackWebHookUrl = import.meta.env.VITE_SLACK_WEBHOOK_URL;
    await fetch(slackWebHookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      <p className="introduction">{import.meta.env.VITE_MESSAGE}</p>
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

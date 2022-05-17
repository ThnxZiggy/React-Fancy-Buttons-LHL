import "./App.css";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";
import { useState } from "react";

function App() {
  const [light, setLight] = useState("off");
  const darkMode = light === "off" ? "dark" : "";
  const switchLight = () => {
    setLight(light === "on" ? "off" : "on");
  };

  return (
    <>
      <div className={`App ${darkMode}`}>
        <h1>Fancy Buttons!</h1>
        <section>
          <AngryButton />
          <CounterButton />
          <LightSwitchButton
            light={light}
            switchLight={switchLight}
            hello={["the", "world"]}
          />
          <TextRepeaterButton />
        </section>
      </div>
    </>
  );
}

export default App;
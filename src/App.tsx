import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [rtt, setRtt] = useState("");
  const [downlink, setDownlink] = useState("");
  const [count, setCount] = useState(0);

  const loop = () => {
    setTimeout(() => {
      const x = window.navigator.connection;
      setCount(count + 1);
      setRtt(x.rtt);
      setDownlink(x.downlink);

      loop();
    }, 500);
  };

  loop();

  return (
    <div className="App">
      <h1>RTT: {rtt}</h1>
      <h1>Downlink: {downlink}</h1>
      <h1>Times pinged: {count}</h1>
    </div>
  );
}

export default App;

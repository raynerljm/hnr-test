import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { onTTFB } from "web-vitals";
import "./App.css";

function App() {
  const [rtt, setRtt] = useState("");
  const [downlink, setDownlink] = useState("");
  const [count, setCount] = useState(0);

  const loop = () => {
    setTimeout(() => {
      const x = (window.navigator as any).connection;
      setCount(count + 1);
      setRtt(x.rtt);
      setDownlink(x.downlink);

      loop();
    }, 500);
  };

  loop();

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch(
    //     "https://opensheet.elk.sh/1irSfdHrKOHhs-5xaNjVvJKCJHjf-wsQIz9F_NWlOios/1"
    //   );
    //   const data = await res.json();
    //   console.log("Data Successfully Fetched");
    // };
    // onTTFB(console.log);

    onTTFB((metric) => {
      // Calculate the request time by subtracting from TTFB
      // everything that happened prior to the request starting.
      const requestTime =
        metric.value - (metric.entries[0] as any).requestStart;
      console.log("Request time:", requestTime);
    });
  }, []);

  return (
    <div className="App">
      <h1>RTT: {rtt}</h1>
      <h1>Downlink: {downlink}</h1>
      <h1>Times pinged: {count}</h1>
    </div>
  );
}

export default App;

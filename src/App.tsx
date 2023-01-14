import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { onTTFB } from "web-vitals";
import "./App.css";

function App() {
  const [rtt, setRtt] = useState("");
  const [downlink, setDownlink] = useState("");
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  const loop = () => {
    const fetchData = async () => {
      const res = await fetch(
        "https://opensheet.elk.sh/1irSfdHrKOHhs-5xaNjVvJKCJHjf-wsQIz9F_NWlOios/1"
      );
      const data = await res.json();
      console.log("Data Successfully Fetched");
    };
    const x = performance.now();
    fetchData();
    const y = performance.now();
    const delta = y - x;
    // console.log(`${count}: ${y} - ${x} = ${delta}`);

    setSum((prevSum) => prevSum + delta);
    setCount((prevCount) => prevCount + 1);

    setTimeout(() => {
      loop();
    }, 500);
  };

  useEffect(() => {
    loop();
  }, []);

  return (
    <div className="App">
      <h1>Sum: {sum}</h1>
      <h1>Count: {count}</h1>

      <h1>
        [{count}] Average: {sum / count}
      </h1>
    </div>
  );
}

export default App;

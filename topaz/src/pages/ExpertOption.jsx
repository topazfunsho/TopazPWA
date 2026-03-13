import React, { useEffect, useState } from "react";
import MobileNav from "../components/MobileNav";

function ExpertOption() {
  const [signal, setSignal] = useState([]);

  const getSignals = async () => {
    const res = await fetch("https://topaz-backend-vvuz.onrender.com/signals");
    const data = await res.json();
    setSignal(data);
    console.log(data);
  };

  // const handleStart = ()=>{
  //     getSignals();
  //     console.log(data)
  // }
  const handleStatus = () => {
    setText("Checking bot status");
  };
  const handleStop = () => {
    setText("Bot Stopped");
  };

  return (
    <div className="expert-display white-bg-2">
      <MobileNav />
      <div className="signal-display">
        {signal.map((sign) => (
          <div key={sign.id} className="signal-card">
            <h3>{sign.pair}</h3>
            <p>Price: {sign.price}</p>
            <p>Signal: {sign.signal}</p>
            <p>Strength: {sign.strength}</p>
            <p>Timeframe: {sign.time_frame}</p>
            <p>Entry Time: {sign.entry_time}</p>
          </div>
        ))}
        <div className="contain-justify-between">
          <div></div>
          <div>time</div>
        </div>
        <hr />
      </div>
      <div className="action-btn">
        <button onClick={getSignals}>Start</button>
        <button onClick={handleStatus}>Status</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
}

export default ExpertOption;

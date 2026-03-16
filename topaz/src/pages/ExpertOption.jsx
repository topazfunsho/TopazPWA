import React, { useEffect, useState } from "react";
import MobileNav from "../components/MobileNav";

const API = "https://topaz-backend-vvuz.onrender.com";

function ExpertOption() {
  const [signals, setSignals] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  // -------------------------
  // SERVER CHECK
  // -------------------------
  const startServer = async () => {
    try {
      const res = await fetch(`${API}/`);
      const data = await res.json();

      setUpdates((prev) => [...prev, data.message]);
      console.log(data);
    } catch (error) {
      console.error("Server error:", error);
    }
  };

  // -------------------------
  // GET BOT STATUS
  // -------------------------
  const getStatus = async () => {
    try {
      const res = await fetch(`${API}/status`);
      const data = await res.json();

      setUpdates((prev) => [...prev, data.status]);
      console.log(data);
    } catch (error) {
      console.error("Status error:", error);
    }
  };

  // -------------------------
  // GET TRADING SIGNALS
  // -------------------------
  const getSignals = async () => {
    try {
      const res = await fetch(`${API}/signals`);
      const data = await res.json();

      setSignals(data);
      console.log(data);
    } catch (error) {
      console.error("Signal error:", error);
    }
  };

  // -------------------------
  // STOP BOT
  // -------------------------
  const stopBot = async () => {
    try {
      const res = await fetch(`${API}/stop`, {
        method: "POST",
      });

      const data = await res.json();

      setUpdates((prev) => [...prev, data.message]);
      console.log(data);
    } catch (error) {
      console.error("Stop error:", error);
    }
  };

  // -------------------------
  // LOADING EFFECT
  // -------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // -------------------------
  // TIME INFO
  // -------------------------
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = days[now.getDay()];
  const hour = now.getHours();
  const minute = now.getMinutes();

  // -------------------------
  // UI
  // -------------------------
  return (
    <div className="expert-display white-bg-2">
      <MobileNav />

      {/* SIGNAL DISPLAY */}
      <div className="signal-display">
        <ul>
          {updates.map((update, index) => (
            <li key={index}>
              {update}
              <div className="contain-justify-between date">
                <div></div>
                <div>
                  {today} - {hour}:{minute}
                </div>
              </div>
              <hr></hr>
            </li>
          ))}

          {signals.map((signal, index) => (
            <li key={index}>
              <p>Pair: {signal.pair}</p>
              <p>Price: {signal.price}</p>
              <p>Signal: {signal.signal}</p>
              <p>Strength: {signal.strength}</p>
              <p>Timeframe: {signal.time_frame}</p>
              <p>Entry Time: {signal.entry_time}</p>
              <p>Entry: {signal.entry_time}</p>
              <div className="contain-justify-between date">
                <div></div>
                <div>
                  {today} - {hour}:{minute}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* ACTION BUTTONS */}
      <div className="action-btn">
        <div className="contain-justify">
          <button onClick={startServer}>Server</button>
          <button onClick={getSignals}>Start</button>
        </div>

        <div className="contain-justify">
          <button onClick={getStatus}>Status</button>
          <button onClick={stopBot}>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default ExpertOption;

{
  /* <div>
          {signals.map((signal, index) => (
            <div key={index} className="signal-card">
              <h3>{signal.pair}</h3>
              <p>Price: {signal.price}</p>
              <p>Signal: {signal.signal}</p>
              <p>Strength: {signal.strength}</p>
              <p>Timeframe: {signal.time_frame}</p>
              <p>Entry Time: {signal.entry_time}</p>
              <p>Expiry: {signal.expiry}</p>
              <div className="contain-justify-between">
                <div></div>
                <div>
                  {today} - {hour}:{minute}
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div> */
}

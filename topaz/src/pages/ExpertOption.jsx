import React, { useEffect, useState, useRef } from "react";
import MobileNav from "../components/MobileNav";

const API = "https://topaz-backend-vvuz.onrender.com";

function ExpertOption() {
  const [signals, setSignals] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [running, setRunning] = useState(false);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  // -------------------------
  // START BOT + START FETCHING
  // -------------------------
  const startBot = async () => {
    try {
      const res = await fetch(`${API}/start`, { method: "POST" });
      const data = await res.json();

      setUpdates((prev) => [...prev, data.message]);
      setRunning(true);
    } catch (error) {
      console.error("Start error:", error);
    }
  };

  // -------------------------
  // AUTO FETCH SIGNALS
  // -------------------------
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`${API}/signals`);
        const data = await res.json();

        setSignals(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [running]);

  // -------------------------
  // STOP BOT
  // -------------------------
  const stopBot = async () => {
    try {
      const res = await fetch(`${API}/stop`, { method: "POST" });
      const data = await res.json();

      setUpdates((prev) => [...prev, data.message]);
      setRunning(false);
    } catch (error) {
      console.error("Stop error:", error);
    }
  };

  // -------------------------
  // SERVER CHECK
  // -------------------------
  const startServer = async () => {
    try {
      setLoading(true); // ✅ start loading

      const res = await fetch(`${API}/`);
      const data = await res.json();

      setUpdates((prev) => [...prev, data.message]);
    } catch (error) {
      console.error("Server error:", error);
      setUpdates((prev) => [...prev, "❌ Server failed"]);
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  // -------------------------
  // GET STATUS
  // -------------------------
  const getStatus = async () => {
    try {
      const res = await fetch(`${API}/status`);
      const data = await res.json();

      setUpdates((prev) => [...prev, data.status]);
    } catch (error) {
      console.error("Status error:", error);
    }
  };

  // -------------------------
  // LOADING EFFECT
  // -------------------------
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // -------------------------
  // TIME
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

  // ---------------------------
  // AUTO SCROLL
  // ---------------------------
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [signals, updates]);

  // -------------------------
  // UI
  // -------------------------
  return (
    <div className="expert-display white-bg-2">
      <MobileNav />

      {/* SIGNAL DISPLAY */}
      <div className="signal-display" ref={scrollRef}>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <ul>
            {/* SIGNALS */}
            {signals.map((signal, index) => (
              <li key={`signal-${index}`}>
                <p>
                  <strong>{signal.pair}</strong>
                </p>
                <p>Price: {signal.price}</p>
                <p>Signal: {signal.signal}</p>
                <p>Strength: {signal.strength}</p>
                <p>Timeframe: {signal.time_frame}</p>
                <p>Entry: {signal.entry_time}</p>

                <div className="contain-justify-between date">
                  <div></div>
                  <div>
                    {today} - {hour}:{minute}
                  </div>
                </div>
                <hr />
              </li>
            ))}

            {/* SYSTEM UPDATES */}
            {updates.map((update, index) => (
              <li key={`update-${index}`}>
                {update}
                <div className="contain-justify-between date">
                  <div></div>
                  <div>
                    {today} - {hour}:{minute}
                  </div>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ACTION BUTTONS */}
      <div className="action-btn">
        <div className="contain-justify">
          <button onClick={startServer} disabled={loading}>
            Server
          </button>
          <button onClick={startBot}>Start</button>
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

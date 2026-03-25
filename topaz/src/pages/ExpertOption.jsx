import React, { useEffect, useState, useRef } from "react";
import MobileNav from "../components/MobileNav";

const API = "https://topaz-backend-vvuz.onrender.com";

function ExpertOption() {
  const [signals, setSignals] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [running, setRunning] = useState(false);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const [start, setStart] = useState(false);
  const [server, setServer] = useState(false);
  const [stop, setStop] = useState(false);
  const [status, setStatus] = useState(false);

  // -------------------------
  // START BOT + START FETCHING
  // -------------------------
  const startBot = async () => {
    try {
      const res = await fetch(`${API}/start`, { method: "POST" });
      const data = await res.json();
      const timeNow = new Date();

      //   setUpdates((prev) => [...prev, data.message]);
      setUpdates((prev) => [
        ...prev,
        {
          type: "update", // ✅ IMPORTANT
          text: data.message,
          time: new Date().toISOString(), // ✅ for sorting
          displayTime: timeNow.toLocaleTimeString(),
        },
      ]);
      setRunning(true);
      setStart(true);
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

        const timeNow = new Date();

        const newSignals = data.map((signal) => ({
          ...signal,
          type: "signal", // ✅ IMPORTANT
          time: new Date().toISOString(), // ✅ for sorting
          displayTime: timeNow.toLocaleTimeString(),
        }));

        setSignals((prev) => [...prev, ...newSignals]); // ✅ append, not replace
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [running]);

  // -------------------------
  // STOP BOT
  // -------------------------
  const stopBot = async () => {
    try {
      const res = await fetch(`${API}/stop`, { method: "POST" });
      const data = await res.json();
      const timeNow = new Date();

      //   setUpdates((prev) => [...prev, data.message]);
      setUpdates((prev) => [
        ...prev,
        {
          type: "update", // ✅ IMPORTANT
          text: data.message,
          time: new Date().toISOString(), // ✅ for sorting
          displayTime: timeNow.toLocaleTimeString(),
        },
      ]);
      setRunning(false);
      setStop(true);
      setStart(false);
      setStatus(false);
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
      const timeNow = new Date();

      //   setUpdates((prev) => [...prev, data.message]);
      setUpdates((prev) => [
        ...prev,
        {
          type: "update", // ✅ IMPORTANT
          text: data.message,
          time: new Date().toISOString(), // ✅ for sorting
          displayTime: timeNow.toLocaleTimeString(),
        },
      ]);
      setServer(true);
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
      const timeNow = new Date();

      setUpdates((prev) => [
        ...prev,
        {
          type: "update", // ✅ IMPORTANT
          text: data.status,
          time: new Date().toISOString(), // ✅ for sorting
          displayTime: timeNow.toLocaleTimeString(),
        },
      ]);
      setStatus(true);
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

  // ----------------------
  // DYNAMIC BUTTON STYLES
  // -----------------------
  //   const styles = {
  //     container: {
  //       backgroundColor: "black",
  //       display: "block",
  //       marginBottom: "1rem",
  //       padding: ".6rem 2.6rem",
  //       fontSize: "1rem",
  //       borderRadius: "50px",
  //       justifySelf: "center",
  //       color: "white"
  //     },
  //   };
  const combined = [...signals, ...updates].sort(
    (a, b) => new Date(a.time) - new Date(b.time),
  );
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
            {/* {signals
              ?.filter((signal) => signal && signal.pair)
              .map((signal, index) => (
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
                    <div>{signal.entry_time}</div>
                  </div>
                  <hr />
                </li>
              ))} */}

            {/* SYSTEM UPDATES */}
            {/* {updates.map((update, index) => (
              <li key={`update-${index}`}>
                {update.text}
                <div className="contain-justify-between date">
                  <div></div>
                  <div>{update.time}</div>
                </div>
                <hr />
              </li>
            ))} */}

            {combined
            ?.filter(item => item && item.entry_time || item.text) 
            .map((item, index) => (
              <li key={index}>
                {item.type === "signal" ? (
                  <div>
                    <p>
                      <strong>{item.pair}</strong>
                    </p>
                    <p>Price: {item.price}</p>
                    <p>Signal: {item.signal}</p>
                    <p>Strength: {item.strength}</p>
                    <p>Timeframe: {item.time_frame}</p>
                    <p>Entry: {item.entry_time}</p>

                    <div className="contain-justify-between date">
                      <div></div>
                      <div>{item.displayTime}</div>
                    </div>
                    <hr />
                  </div>
                ) : (
                  <div>
                    <p>{item.text}</p>

                    <div className="contain-justify-between date">
                      <div></div>
                      <div>{item.displayTime}</div>
                    </div>
                    <hr />
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ACTION BUTTONS */}
      <div className="action-btn">
        <div className="contain-justify">
          <button
            style={{ backgroundColor: server ? "blue" : "black" }}
            onClick={startServer}
            disabled={loading}
          >
            Server
          </button>
          <button
            style={{ backgroundColor: start ? "green" : "black" }}
            onClick={startBot}
          >
            Start
          </button>
        </div>

        <div className="contain-justify">
          <button
            style={{ backgroundColor: status ? "orange" : "black" }}
            onClick={getStatus}
          >
            Status
          </button>
          <button
            style={{ backgroundColor: stop ? "red" : "black" }}
            onClick={stopBot}
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpertOption;

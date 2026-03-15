import React, { useEffect, useState } from "react";
import MobileNav from "../components/MobileNav";

function ExpertOption() {
  const API = "https://topaz-backend-vvuz.onrender.com";
  const [signal, setSignal] = useState([]);

  const getSignals = async () => {
    try {
      const response = await fetch(
        "https://topaz-backend-vvuz.onrender.com/signals",
      );

      const data = await response.json();
      setSignal(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching signals:", error);
    }
  };

  // const handleStart = ()=>{
  //     getSignals();
  //     console.log(data)
  // }

  //   starting signal with button
  //   const startBot = async () => {
  //     const res = await fetch(`${API}/start`, {
  //       method: "POST",
  //     });

  //     const data = await res.json();
  //     console.log(data);
  //   };

  //   stopping signal with button
  const stopBot = async () => {
    const res = await fetch(`${API}/stop`, {
      method: "POST",
    });

    const data = await res.json();
    console.log(data);
  };

  // checking status of signal if still running
  const getStatus = async () => {
    const res = await fetch(`${API}/status`);
    const data = await res.json();
    console.log(data);
  };

  const now = new Date();

  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="expert-display white-bg-2">
      <MobileNav />
      <div className="signal-display">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div>
            {signal.map((sign) => (
              <div key={sign.price} className="signal-card">
                <h3>{sign.pair}</h3>
                <p>Price: {sign.price}</p>
                <p>Signal: {sign.signal}</p>
                <p>Strength: {sign.strength}</p>
                <p>Timeframe: {sign.time_frame}</p>
                <p>Entry Time: {sign.entry_time}</p>
                <p>Expiry: {sign.expiry}</p>
                <div className="contain-justify-between">
                  <div></div>
                  <div>
                    {day} - {hour}:{minute}
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="action-btn">
        <button onClick={getSignals}>Start</button>
        <button onClick={getStatus}>Status</button>
        <button onClick={stopBot}>Stop</button>
      </div>
    </div>
  );
}

export default ExpertOption;

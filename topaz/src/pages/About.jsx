import React from "react";
import MobileNav from "../components/MobileNav";

function About() {
  return (
    <div className="contain-center">
      <div>
        <h1>Topaz</h1>
        <h2>About</h2>
        <p>
          Topaz Trading Signal Bot is a smart and reliable trading assistant
          designed to help traders make informed decisions in the financial
          markets. It provides real-time trading signals based on market
          analysis, helping users identify potential buy and sell opportunities
          across different trading pairs. Whether you're a beginner or an
          experienced trader, Topaz simplifies your trading process by
          delivering clear, structured signals you can act on.
        </p>
        <h2>How it works</h2>
        <p>
          Topaz analyzes market trends and generates signals with key details
          such as: Trading pair (e.g., EUR/USD, BTC/USDT) Entry price Signal
          direction (BUY or SELL) Timeframe Signal strength Expiry time These
          signals are updated regularly to ensure you always have access to the
          latest market opportunities.
        </p>
        <h2>How to use Topaz Trading Signal Bot</h2>
          <ol>
            <li>
              Create an Account / Login. Sign up and log in to access the full
              features of the platform.
            </li>
            <li>
              View Signals Dashboard. Navigate to the signals page to see live
              trading signals.
            </li>
            <li>
              Analyze the Signal Each signal includes: Entry time Direction
              (BUY/SELL) Strength indicator
            </li>
            <li>
              Execute Trade on Your Broker Open your preferred trading platform
              (e.g., MT4/MT5, Binance) and place the trade based on the signal
              details.
            </li>
            <li>
              Monitor Trade Outcome Follow the trade until the expiry time and
              track your results.
            </li>
          </ol>
        <h2>Why Use Topaz</h2>
        <p>
          ✅ Real-time signal updates ✅ Beginner-friendly interface ✅ Saves time
          on market analysis ✅ Works across multiple trading platforms ✅
          Designed for consistency and simplicity
        </p>
      </div>

      <MobileNav />
    </div>
  );
}

export default About;

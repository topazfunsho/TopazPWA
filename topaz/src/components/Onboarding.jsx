import React from "react";

function Onboarding() {
  const handleReg = () => {
    window.location= '/register';
  };

  return (
    <div className="dark-bg contain-center">
      <div className="onboarding-content">
        <h1>Welcome to</h1>
        <h2>Topaz</h2>
        <h3>Trading Bot</h3>

        <button className="btn on-btn" onClick={handleReg}>
          continue
        </button>
      </div>
    </div>
  );
}

export default Onboarding;

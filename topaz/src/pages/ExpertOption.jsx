import React, { useState } from 'react'
import MobileNav from '../components/MobileNav'

function ExpertOption() {
    const [text, setText] = useState("Hello");


    const handleStart = ()=>{
        setText("Bot Started")
    }
    const handleStatus = ()=>{
        setText("Checking bot status")
    }
    const handleStop = ()=>{
        setText("Bot Stopped")
    }


  return (
    <div className='expert-display white-bg-2'>
        <MobileNav />
        <div className='signal-display'>{text}</div>
        <div className='action-btn'>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStatus}>Status</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    </div>
  )
}

export default ExpertOption
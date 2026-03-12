import React, { useEffect, useState } from 'react'
import MobileNav from '../components/MobileNav'

function ExpertOption() {
    const [datas, setData] = useState([])

    
    const getSignals = async () => {
    const res = await fetch("http://localhost:8000/signals")
    const mData = await res.json()
    setData(mData)
    console.log(mData)
    }


    // const handleStart = ()=>{
    //     getSignals();
    //     console.log(data)
    // }
    const handleStatus = ()=>{
        setText("Checking bot status")
    }
    const handleStop = ()=>{
        setText("Bot Stopped")
    }


  return (
    <div className='expert-display white-bg-2'>
        <MobileNav />
        <div className='signal-display'>
            {datas.map(data => (
                <div key={data.id}>
                    <p>{data.pair}</p>
                    <p>{data.price}</p>
                    <p>{data.signal}</p>
                    <p>{data.strength}</p>
                    <p>{data.timeFrame}</p>
                    <p>{data.entrytime}</p>
                </div>
            ))}
            <div className='contain-justify-between'>
                <div></div>
                <div>time</div>
            </div>
            <hr />
        </div>
        <div className='action-btn'>
            <button onClick={getSignals}>Start</button>
            <button onClick={handleStatus}>Status</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    </div>
  )
}

export default ExpertOption
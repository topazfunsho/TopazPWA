import React from 'react'
import MobileNav from '../components/MobileNav'

function Home() {

const handleBinance = ()=>{
    window.location = '/coming'
}

const handleExpert = ()=>{
    window.location = '/expertoption'
}

  return (
    <div className='white-bg-2'>
        <MobileNav />
        <div className='contain-center'>
            <div className='broker-option'>
                <button onClick={handleExpert}>ExpertOption</button>
                <button onClick={handleBinance}>Binance</button>
            </div>

        </div>
    </div>
  )
}

export default Home
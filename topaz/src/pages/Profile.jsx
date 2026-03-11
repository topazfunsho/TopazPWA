import React from 'react'
import { FaUser } from "react-icons/fa";
import MobileNav from '../components/MobileNav';
function Profile() {
  return (
    <div className='contain-center'>
        <div className=''>
            <div className='avatar'><FaUser size={60} color="black" className='block-display'/></div>
            <label htmlFor="useername" className='block-display'>Username:</label>
            <input type="text" />
            <label htmlFor="password" className='block-display'>Change Password:</label>
            <input type="password" />
            <button className='full-btn' disabled>save</button>
        </div>
            <MobileNav />
    </div>
  )
}

export default Profile
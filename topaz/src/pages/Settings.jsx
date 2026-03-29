import React from 'react'
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import MobileNav from '../components/MobileNav';
function Settings() {
  return (
    <div className='contain-center-3'>
        <div className='contain-center-2'>
            <div className='avatar'><FaUser size={60} color="black" className='block-display'/></div>
            {/* <label htmlFor="useername" className='block-display'>Username:</label>
            <input type="text" />
            <label htmlFor="password" className='block-display'>Change Password:</label>
            <input type="password" />
            <button className='full-btn' disabled>save</button> */}
        </div>
        <div className='profile-links'>
            <Link className='profile-link' to="/profile">Profile</Link>
            <Link className='profile-link' to="/about">About</Link>
            <Link className='profile-link' to="/profile">Privacy and Policy</Link>
        </div>
            <MobileNav />
    </div>
  )
}

export default Settings
import React from 'react';
import LogOutButton from '../LogOutButton';

// import { useNavigate } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {

return (
 <div id='home-page-container'>
    <div id="home-page-user-welcome-box">

        <h2>Hi, User!</h2>
    
    </div>
   
    <div id="home-page-main"> 
        <div className='log-out-button'> 
                <LogOutButton />
        </div>
        <h3 id="home-page-latest" className=''>Latest in the Community</h3>
        <h2 id="home-page-feeling" className=''>How are you feeling?</h2>
        <h3 id="home-page-support" className=''>Support Circles</h3>
        <div id="home-page-user-feeling-box">
            <textarea name="how-user-feeling" id="home-page-feeling-response" placeholder="Your response will remain private."cols="30" rows="10"></textarea>
        </div>
    </div>
 </div>
)





}

export default HomePage;
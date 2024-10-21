import React from 'react';
import './ProfilePage.css'
import UserComponent from '../UserComponent';

const ProfilePage = () => {
  return (
    <div className='container'>
        <div className="profile-box">
        {/* <h2>Your Profile</h2> */}
        {/* Other profile-related components */}
        <UserComponent/>
        </div>
    </div>
  );
};

export default ProfilePage;

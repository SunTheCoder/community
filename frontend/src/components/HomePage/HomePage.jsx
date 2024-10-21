import React from 'react';

import { useNavigate } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {

  const navigate = useNavigate();  // Hook to navigate programmatically

  const goToLoginPage = () => {
    navigate('/login');  // Navigates to the login page
  };

  const goToSignUpPage = () => {
    navigate('/signup');  // Navigates to the sign-up page
  }

  return (
    <div className='welcome-container'>
      <h1>Welcome to, Community.</h1>
      <p>“A true community begins in the hearts of the people involved. It is not a place of distraction but a place of being.” -Malidoma Patrice Somé</p>
      <button onClick={goToLoginPage}>Log In</button>  {/* Button to navigate */}
      <button onClick={goToSignUpPage}>Sign Up</button>  {/* Button to navigate */}
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();  // Hook to navigate programmatically

  const goToLoginPage = () => {
    navigate('/login');  // Navigates to the login page
  };

  const goToSignUpPage = () => {
    navigate('/signup');  // Navigates to the sign-up page
  }

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>This is a public page accessible by everyone.</p>
      <button onClick={goToLoginPage}>Log In</button>  {/* Button to navigate */}
      <button onClick={goToSignUpPage}>Sign Up</button>  {/* Button to navigate */}
    </div>
  );
};

export default HomePage;

import React from 'react';

import { useNavigate } from 'react-router-dom';
import './SplashPage.css'

import { useDispatch, useSelector } from "react-redux";
import { showModal, hideModal } from '../../slices/modalslice'; // Adjust the path to match your project structure

import Modal from '../LoginModal/LoginModal';
import LoginForm from "../LoginForm/LoginForm";

const SplashPage = () => {

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  const handleLoginClick = () => {
    dispatch(showModal());
  };

  const handleCloseModal = () => {
    dispatch(hideModal());
  };

  const navigate = useNavigate();  // Hook to navigate programmatically

  // const goToLoginPage = () => {
  //   navigate('/login');  // Navigates to the login page
  // };

  const goToSignUpPage = () => {
    navigate('/signup');  // Navigates to the sign-up page
  }

  return (
    <div className='page-container'>
        <div className='welcome-container'>
          <h1>Welcome.</h1>
          <p>“A true community begins in the hearts of the people involved. It is not a place of distraction but a place of being.” -Malidoma Patrice Somé</p>
          <button onClick={handleLoginClick}>Login</button>

      <Modal show={isModalOpen} handleClose={handleCloseModal}>
        <LoginForm />
      </Modal>
          <button onClick={goToSignUpPage}>Sign Up</button>  {/* Button to navigate */}
        </div>
    </div>
  );
};

export default SplashPage;

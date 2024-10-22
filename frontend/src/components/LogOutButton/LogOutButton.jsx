import React from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import './LogOutButton.css'
import {  clearUser } from '../../slices/userSlice';
import { useNavigate } from 'react-router-dom';

const LogOutButton = () => {
    const dispatch = useDispatch(); // Get the dispatch function from the store
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token to log out
        dispatch(clearUser()); // Clear user from Redux state
        navigate('/')
    };

    return (
        <div>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default LogOutButton;
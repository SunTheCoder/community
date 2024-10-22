import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slices/userSlice';
import { useNavigate } from'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    

    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      console.log('Response status:', response.status); // Log response status
      console.log('Response object:', response); // Log the response object
  
      if (!response.ok) {
        // Log the error message from the response body if available
        const errorData = await response.json();
        console.log('Error data:', errorData);
        throw new Error(errorData.error || 'Invalid credentials');
      }
  
      const data = await response.json();
  
      // Store the JWT token in localStorage
      localStorage.setItem('token', data.token);
  
      // Dispatch the user data to Redux
      dispatch(setUser(data.user));

      navigate('/home')
    } catch (error) {
      console.error('Error during login:', error.message); // Log the error
      alert(error.message); // Alert the error message to the user
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

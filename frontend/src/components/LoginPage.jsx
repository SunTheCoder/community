import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch(); // Assuming you're using Redux
  
  const navigate = useNavigate(); // Call useNavigate inside the component

  const handleLogin = async () => {
    try {
      console.log('Email:', email);
      console.log('Password:', password);

      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      } else {
        setMessage('Login successful!');
        setError('');

        const data = await response.json();
        const token = data.token;

        // Store token and update Redux state
        localStorage.setItem('token', token);
        const userInfo = { email };
        dispatch(setUser(userInfo));

        // Navigate to the profile page after login
        navigate('/profile');  // Navigate after successful login
      }
    } catch (err) {
      console.log('bad!');
      setMessage('');
      setError(err.message);
    }
  };


  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;

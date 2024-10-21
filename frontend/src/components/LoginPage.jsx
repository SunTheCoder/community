import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

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
          email,    // Make sure email is correctly passed
          password  // Make sure password is correctly passed
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      
      } else {
        setMessage('Login successful!');
        setError('');
        // setName('');
        // setEmail('');
        // setPassword('');
      }

      const data = await response.json();
      const token = data.token;

      // Store token and update Redux state
      localStorage.setItem('token', token);
      const userInfo = { email };  // You can extract user info from token or API
      dispatch(setUser(userInfo));
    } catch (err) {
      console.log('bad!')
      setMessage('')
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

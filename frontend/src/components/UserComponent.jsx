import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../slices/userSlice';

const UserComponent = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle Login Request
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const token = data.token;

      // Store the JWT token in localStorage to keep the user logged in
      localStorage.setItem('token', token);

      // Here, you might also want to decode the token to extract the user info
      const userInfo = { email };  // Replace this with actual user info from the response or token
      dispatch(setUser(userInfo));
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      error(err);
    }
  };

  // Handle Logout Request
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token to log out
    dispatch(clearUser()); // Clear user from Redux state
  };

  return (
    <div>
      {user ? (
        <div>
          <h3>Welcome, {user.email}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h3>Please log in</h3>
          {error && <p style={{ color: 'red' }}>{error}</p>}
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
      )}
    </div>
  );
};

export default UserComponent;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slices/userSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Example: Static authentication, this could be replaced with real auth logic
    if (email === 'test@example.com' && password === 'password') {
      const user = { email, name: 'Test User' };
      
      // Dispatch setUser with the user data
      dispatch(setUser(user));
    } else {
      alert('Invalid credentials');
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

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, clearUser } from '../slices/userSlice';

const UserComponent = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const sampleUser = { name: 'John Doe', email: 'john@example.com' };
    dispatch(setUser(sampleUser));
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserComponent;

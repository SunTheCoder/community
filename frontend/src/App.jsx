import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ProtectedPage from './components/ProtectedPage';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './components/ProfilePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Add Sign-Up Route */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/protected" element={<ProtectedRoute component={ProtectedPage} />} />

        
      </Routes>
    </Router>
  );
};

export default App;


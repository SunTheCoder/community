import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './components/SplashPage/SplashPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import ProtectedPage from './components/ProtectedPage';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} /> {/* Add Sign-Up Route */}
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/protected" element={<ProtectedRoute component={ProtectedPage} />} />

        
      </Routes>
    </Router>
  );
};

export default App;


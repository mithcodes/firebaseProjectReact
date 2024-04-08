import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/Register';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
     <Route path="/" element={<h1>home</h1>}/>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterPage from './pages/Register';
import LoginPage from './pages/LoginPage';
import Nav from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListingPage from './pages/List';
import Home from './pages/Home';
function App() {
  return (
    <div className="container">
     <Nav/>

      <Routes>
<Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
     
     <Route path="/book/list" element={<ListingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

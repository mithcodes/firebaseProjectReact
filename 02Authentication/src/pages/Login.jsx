import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebase';
import styles from "./Signup.module.css"



const Login = ({auth}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SigninUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log('signin successful');
      })
      .catch((err) => {
        console.log('error:', err.message);
      });
  };

  return (
    
    <div className={styles.signupContainer }     style={{ backgroundColor: '#8ecae6' }}>
    <div className={styles.signup}   style={{ backgroundColor: '#219ebc' }}>
      <div className="row m-3">
        <h3>Login</h3>
      </div>
      <div className="row m-3">
        <div className="col-md-4">
          <label>Email:</label>
        </div>
        <div className="col-md-8">
          <input 
            type="email" required
            placeholder="Enter your email"  
            onChange={(e) => setEmail(e.target.value)}  
            value={email}
          />
        </div>
      </div>
      <div className="row m-3">
        <div className="col-md-4">
          <label>Password:</label>
        </div>
        <div className="col-md-8">
          <input 
            type="password" 
            placeholder="Enter your password"  required
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
          />
        </div>
      </div>
      <div className="row m-3">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <button type="button" className="btn btn-success" onClick={SigninUser}>Login</button>
        </div>
      </div>
      <hr style={{ borderTop: "2px solid red", width: "80%" }} />
      <div className="row m-3">
        <p>Do not have an account? <Link to="/">Signup</Link></p>
      </div>
    </div>
  </div>
  );
};

export default Login;

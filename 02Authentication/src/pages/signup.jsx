import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../Firebase";
import styles from "./Signup.module.css";

const Signup = ({auth}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const GoogleProvider = new GoogleAuthProvider();

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert('Email created successfully');
      })
      .catch((error) => {
        alert('Error creating email:', error.message);
      });
  };

  const signWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signup}>
        <div className="row m-3">
          <h3>Sign up</h3>
        </div>
        <div className="row m-3">
          <div className="col-md-4">
            <label>Email:</label>
          </div>
          <div className="col-md-8">
            <input 
              type="email" 
              required
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
              placeholder="Enter your password"  
              required
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
            />
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md">
            <button type="button" className="btn btn-secondary" style={{ width: "100%" }} onClick={createUser}>Sign up</button>
          </div>
          <div className="col-md">
            <button type="button" className="btn btn-success" onClick={signWithGoogle}>Sign with Google</button>
          </div>
        </div>
        <hr style={{ borderTop: "2px solid red" }} />
        <div className="row m-3">
          <p>Already have an account? <Link to="/signin">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

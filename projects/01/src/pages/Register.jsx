import React, { useState } from 'react';

import { useFirebase } from '../context/firebase';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const firebase = useFirebase();
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(()=>{
    if(firebase.isLoggedIn){
navigate("/")
    }
  },[firebase,navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("signing up user....");
    try {
      await firebase.signupUserWithEmailAndPassword(email, password);
      console.log("successful");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
    </div>
  );
};

export default RegisterPage;

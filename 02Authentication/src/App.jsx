import './App.css';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from "./Firebase";
import Login from './pages/Login';
import Signup from "./pages/signup";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

// Initialize the Firebase authentication
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Hello, user:', user.email);
        setUser(user);
      } else {
        console.log('You are logged out');
        setUser(null);
      }
    });

    // Clean up the listener
    return () => {
      unsubscribe();
    };
  }, []);

  // If user is authenticated, display the welcome message and logout button
  if (user !== null) {
    return (
      <div className="app d-flex justify-content-between m-3">
        <h4>Welcome to Expense Tracker</h4>
        <button className='btn btn-danger' onClick={() => signOut(auth)}>Logout</button>
      </div>
    );
  }

  // If user is not authenticated, display the signup and login routes
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup auth={auth} />} />
        <Route path="/signin" element={<Login auth={auth} />} />
      </Routes>
    </Router>
  );
}

export default App;

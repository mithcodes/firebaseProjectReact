import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Nav = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
          <li className="nav-item"><Link to="/book/list" className="nav-link">Add list</Link></li> {/* Corrected Link usage */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

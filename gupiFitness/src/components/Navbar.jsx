import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">FitnessATC</h1>
        <ul className="navbar-menu">
          <li className="navbar-item"><Link to="/">About</Link></li>
          <li className="navbar-item"><Link to="/bmi-calculator">BMI Calculator</Link></li>
          <li className="navbar-item"><Link to="/caloric-needs">Caloric Needs</Link></li>
          <li className="navbar-item"><Link to="/diet-plan">Diet Plan</Link></li>
          <li className="navbar-item"><Link to="/workout-planning">Workout Planning</Link></li>
          <li className="navbar-item"><Link to="/exercise-guide">Exercise Guide</Link></li>
          <li className="navbar-item"><Link to="/faq">FAQ</Link></li>
          <li className="navbar-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
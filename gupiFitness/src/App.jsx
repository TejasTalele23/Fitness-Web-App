import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import BmiCalculator from './components/BmiCalculator';
import CaloricNeeds from './components/CaloricNeeds';
import DietPlan from './components/DietPlan';
import WorkoutPlanning from './components/WorkoutPlanning';
import ExerciseGuide from './components/ExerciseGuide';
import Faq from './components/Faq';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div lang="en">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/bmi-calculator" element={<BmiCalculator />} />
          <Route path="/caloric-needs" element={<CaloricNeeds />} />
          <Route path="/diet-plan" element={<DietPlan />} />
          <Route path="/workout-planning" element={<WorkoutPlanning />} />
          <Route path="/exercise-guide" element={<ExerciseGuide />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
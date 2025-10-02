import React, { useState } from 'react';

const BmiCalculator = () => {
  // State variables for height, weight, and BMI result
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState('YOUR BMI = [Not Entered]');

  // Function to calculate BMI
  const calculateBMI = (event) => {
    event.preventDefault(); // Prevent form submission
    const heightInMeters = parseFloat(height) / 100; // Convert height to meters
    const weightInKg = parseFloat(weight); // Get weight in kg
    const result = weightInKg / (heightInMeters * heightInMeters); // Calculate BMI

    if (!isNaN(result) && result > 0) {
      if (result < 18.5) {
        setBmiResult(`YOUR BMI = ${result.toFixed(1)} (Underweight)`);
      } else if (result < 24.9) {
        setBmiResult(`YOUR BMI = ${result.toFixed(1)} (Normal weight)`);
      } else {
        setBmiResult(`YOUR BMI = ${result.toFixed(1)} (Overweight)`);
      }
    } else {
      alert("Please enter valid inputs!");
    }
  };

  return (
    <section id="bmi-calculator" className="page page-light">
      <h1>BODY MASS INDEX (BMI)</h1><br />
      <p>Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Calculate your BMI to determine your goal.</p><br />
      <hr /><br />
      <h1>BMI Calculator</h1>
      <div className="container">
        <form id="bmi-form" onSubmit={calculateBMI}>
          <label htmlFor="bmi-height">Your Height:</label><br />
          <input 
            type="text" 
            id="bmi-height" 
            placeholder="Centimeters" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
          /><br />
          <label htmlFor="bmi-weight">Your Weight:</label><br />
          <input 
            type="text" 
            id="bmi-weight" 
            placeholder="Kilograms" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
          /><br /><br />
          <button type="submit" id="bmi-submit" className="btn btn-blue">Submit</button>
        </form>

        <div className="list-box">
          <h4 id="bmi-result">{bmiResult}</h4><br />
          <h3>BMI Categories:</h3>
          <ul>
            <li>Underweight: BMI &lt; 18.5 (Gain weight)</li>
            <li>Normal weight: 18.5 &lt; BMI &lt; 24.9 (Maintain)</li>
            <li>Overweight: BMI &gt; 24.9 (Loss weight)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;
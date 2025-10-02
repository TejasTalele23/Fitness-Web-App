import React, { useState } from "react";

const CaloricNeeds = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [activity, setActivity] = useState("basal");
  const [result, setResult] = useState("YOUR CALORIE NEEDING = [Not Entered]");

  const calculateCalories = (event) => {
    event.preventDefault(); // Prevent form refresh

    let bmr, need;
    const ageNum = parseInt(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (ageNum <= 80 && ageNum >= 15 && heightNum > 0 && weightNum > 0) {
      if (gender === "male") {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
      } else if (gender === "female") {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
      } else {
        alert("Please select a gender!");
        return;
      }

      const activityLevels = {
        basal: 1,
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.465,
        active: 1.55,
        "very-active": 1.725,
        "extra-active": 1.9,
      };

      need = bmr * activityLevels[activity];
      setResult(`YOUR CALORIE NEEDING = ${Math.round(need)} cal/day`);
    } else {
      alert("Please enter a valid input!");
    }
  };

  return (
    <section id="caloric-needs" className="page page-dark">
      <h1>CALORIC NEEDS</h1>
      <p>
        The Calorie Calculator can be used to estimate the number of calories a
        person needs to consume each day.
      </p>
      <hr />
      <h1>Calorie Needing Calculator</h1>

      <div className="container">
        <form onSubmit={calculateCalories}>
          <label>Gender:</label><br />
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={() => setGender("male")}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={() => setGender("female")}
          />
          <label htmlFor="female">Female</label>
          <br />

          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            placeholder="15-80 years"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />

          <label htmlFor="calorie-height">Height (cm):</label>
          <input
            type="number"
            id="calorie-height"
            placeholder="Centimeters"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />

          <label htmlFor="calorie-weight">Weight (kg):</label>
          <input
            type="number"
            id="calorie-weight"
            placeholder="Kilograms"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />

          <label htmlFor="activity">Activity Level:</label>
          <select
            name="activity"
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="basal">Basal Metabolic Rate (BMR)</option>
            <option value="sedentary">Sedentary: little or no exercise</option>
            <option value="light">Light: exercise 1-3 times/week</option>
            <option value="moderate">Moderate: exercise 4-5 times/week</option>
            <option value="active">Active: daily exercise</option>
            <option value="very-active">Very Active: intense exercise 6-7 times/week</option>
            <option value="extra-active">Extra Active: very intense exercise daily</option>
          </select>
          <br /><br />

          <button type="submit" className="btn btn-blue">
            Submit
          </button>
        </form>

        <div className="list-box">
          <h4>{result}</h4>
          <h3>Guidelines:</h3>
          <ul>
            <li>To Lose Weight: Take 250-500 minus your calorie needing.</li>
            <li>To Maintain: Take 0-200 minus or 0-200 plus your calorie needing.</li>
            <li>To Gain Weight: Take 250-500 plus your calorie needing.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CaloricNeeds;

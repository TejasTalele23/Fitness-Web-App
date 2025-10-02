import React, { useState } from "react";

const DietPlan = () => {
  const [goal, setGoal] = useState("");
  const [dietType, setDietType] = useState("");
  const [dietPlan, setDietPlan] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!goal || !dietType) {
      alert("Please select both your goal and diet type.");
      return;
    }

    const generatedPlan = generateDietPlan(goal, dietType);
    setDietPlan(generatedPlan);
  };

  function generateDietPlan(goal, dietType) {
    const plans = {
      "weight-loss": {
        vegan: [
          "Breakfast: Oatmeal with almond milk and chia seeds",
          "Lunch: Quinoa salad with roasted vegetables",
          "Dinner: Grilled tofu with sautéed spinach",
        ],
        vegetarian: [
          "Breakfast: Greek yogurt with berries",
          "Lunch: Lentil soup with whole grain bread",
          "Dinner: Chickpea curry with brown rice",
        ],
        "non-vegetarian": [
          "Breakfast: Scrambled eggs with spinach and avocado",
          "Lunch: Chicken salad with mixed greens",
          "Dinner: Grilled fish with steamed broccoli",
        ],
        paleo: [
          "Breakfast: Eggs with avocado",
          "Lunch: Grilled chicken with sweet potato",
          "Dinner: Salmon with steamed veggies",
        ],
      },
      "muscle-gain": {
        vegan: [
          "Breakfast: Smoothie with pea protein, almond milk, and banana",
          "Lunch: Tofu stir-fry with brown rice",
          "Dinner: Lentil stew with quinoa",
        ],
        vegetarian: [
          "Breakfast: Cottage cheese with nuts and honey",
          "Lunch: Paneer tikka with whole wheat naan",
          "Dinner: Greek salad with chickpeas",
        ],
        "non-vegetarian": [
          "Breakfast: Scrambled eggs with salmon and spinach",
          "Lunch: Chicken breast with quinoa",
          "Dinner: Grilled steak with sweet potato",
        ],
        paleo: [
          "Breakfast: Paleo pancakes with almond butter",
          "Lunch: Grilled chicken with avocado",
          "Dinner: Grass-fed beef with broccoli",
        ],
      },
      "maintain-weight": {
        vegan: [
          "Breakfast: Avocado toast with sesame seeds",
          "Lunch: Hummus wrap with vegetables",
          "Dinner: Grilled vegetables with quinoa",
        ],
        vegetarian: [
          "Breakfast: Scrambled eggs with spinach",
          "Lunch: Lentil salad with veggies",
          "Dinner: Vegetable stir-fry with brown rice",
        ],
        "non-vegetarian": [
          "Breakfast: Scrambled eggs with chicken sausage",
          "Lunch: Tuna salad with olive oil dressing",
          "Dinner: Grilled chicken with roasted vegetables",
        ],
        paleo: [
          "Breakfast: Paleo smoothie with coconut milk",
          "Lunch: Grilled chicken with mixed vegetables",
          "Dinner: Fish tacos with avocado",
        ],
      },
    };

    return plans[goal]?.[dietType] || [];
  }

  return (
    <section id="diet-plan" className="page page-light">
      <h1>Dynamic Diet Plan</h1>
      <p>Select your goal and dietary preferences, and we'll generate a customized plan for you.</p>

      {/* Diet Plan Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="goal">Choose Your Goal:</label>
          <select id="goal" value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="" disabled>
              Select Goal
            </option>
            <option value="weight-loss">Weight Loss</option>
            <option value="muscle-gain">Muscle Gain</option>
            <option value="maintain-weight">Maintain Weight</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="diet-type">Select Diet Type:</label>
          <select id="diet-type" value={dietType} onChange={(e) => setDietType(e.target.value)}>
            <option value="" disabled>
              Select Diet Type
            </option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="non-vegetarian">Non-Vegetarian</option>
            <option value="paleo">Paleo</option>
          </select>
        </div>

        <button type="submit" className="btn btn-blue">
          Generate Diet Plan
        </button>
      </form>

      {/* Diet Plan Results */}
      {dietPlan.length > 0 && (
        <div id="diet-results" className="diet-results">
          <h3>Your Personalized Diet Plan:</h3>
          <div id="plan-output">
            {dietPlan.map((meal, index) => (
              <div key={index} className="diet-plan-item">
                <strong>{meal}</strong>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default DietPlan;

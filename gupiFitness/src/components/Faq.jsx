import React from 'react';

const Faq = () => {
  return (
    <section id="faq" className="page page-light">
      <h1>FREQUENTLY ASKED QUESTIONS</h1><br />
      <p>If you have a question mark in your head you can contact us but firstly you should browse our FAQ section. Maybe you can find the answer there. Don't worry if you could not:</p><br />
      <span id="contact-us" className="btn btn-dark"><a href="/contact">Contact Us</a></span>
      <br /><br /><br />
      <div className="list-box">
        <ul>
          <li>
            <h3>Question1: What is the best time of day to work out?</h3>
            <p>Morning workouts boost metabolism, while evening workouts allow for better strength and endurance. Choose a time that fits your schedule and keeps you consistent.</p>
          </li>
          <li>
            <h3>Question2: How can I stay motivated to work out regularly?</h3>
            <p>Set realistic goals, track progress, and mix up workouts to keep things interesting. Working out with a friend or listening to music can also help stay motivated.</p>
          </li>
          <li>
            <h3>Question3: Should I stretch before or after my workout?</h3>
            <p>Before workouts, do dynamic stretching like leg swings. After workouts, do static stretching (holding a stretch for 20-30 seconds) to improve flexibility.</p>
          </li>
          <li>
            <h3>Question4: Is it necessary to take supplements?</h3>
            <p>Supplements are not mandatory, but they can help. Protein shakes aid muscle recovery, creatine boosts strength, and multivitamins cover nutritional gaps.</p>
          </li>
          <li>
            <h3>Question5: How can I lose weight through exercise?</h3>
            <p>Combine cardio (running, cycling, HIIT) with strength training. Maintain a caloric deficit by burning more calories than you consume, and eat a balanced diet.</p>
          </li>
          <li>
            <h3>Question6: How long should my workout sessions be?</h3>
            <p>Workout duration depends on your goal. 30-45 minutes is enough for general fitness, while muscle building may require 45-60 minutes. High-intensity workouts can be shorter but more effective.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Faq;
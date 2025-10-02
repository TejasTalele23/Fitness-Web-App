import React from 'react';
import dumbbel from './img/dumbbel-blue.png'
const About = () => {
  return (
    <section id="about" className="page page-dark">
      <h1></h1>
      <div className="container">
        <img src={dumbbel} alt="dumbbel-white" width="128px" />
        <p>
          FitnessATC helps you to improve your sports experience. Here, you can get informed about your body and your
          health, determine the most suitable target for you, learn your calorie needs according to your goal, make an
          exercise plan and see exercise forms accordingly. You can also learn the answers of the most popular questions
          about fitness and contact us to get more information.
        </p>
      </div>
      <hr /><br />
      <ul>
        <li>Calculate your BMI to determine your goal.</li>
        <li>Calculate your caloric needs and macros due to your goal.</li>
        <li>Create a workout program.</li>
        <li>Learn exercise forms from the exercise guide.</li>
        <li>Browse FAQ to get informed.</li>
        <li>Contact us for your questions or suggestions.</li>
      </ul>
      <a href="/bmi-calculator" className="btn btn-blue">Get Started</a>
    </section>
  );
};

export default About;
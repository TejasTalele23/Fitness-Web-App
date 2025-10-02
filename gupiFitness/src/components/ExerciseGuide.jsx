import React, { useState } from "react";

// Manual imports for all exercise GIFs
import airSquat from "./img/exercise/air-squat.gif";
import barbellRow from "./img/exercise/barbell-row.gif";
import benchPress from "./img/exercise/bench-press.gif";
import burpee from "./img/exercise/burpee.gif";
import cableCross from "./img/exercise/cable-cross.gif";
import cablePullover from "./img/exercise/cable-pullover.gif";
import calfRaise from "./img/exercise/calf-raise.gif";
import chairDips from "./img/exercise/chair-dips.gif";
import cleanAndPress from "./img/exercise/clean-and-press.gif";
import crunch from "./img/exercise/crunch.gif";
import deadlift from "./img/exercise/deadlift.gif";
import declinePushup from "./img/exercise/decline-pushup.gif";
import dumbbellCurl from "./img/exercise/dumbbel-curl.gif";
import frontRaise from "./img/exercise/front-raise.gif";
import frontSquat from "./img/exercise/front-squat.gif";
import hammerCurl from "./img/exercise/hammer-curl.gif";
import highKnee from "./img/exercise/high-knee.gif";
import inclineBenchPress from "./img/exercise/incline-bench-press.gif";
import inclineDumbbellPress from "./img/exercise/incline-dumbbell-press.gif";
import jumpingJack from "./img/exercise/jumping-jack.gif";
import jumpSquat from "./img/exercise/jump-squat.gif";
import lateralRaise from "./img/exercise/lateral-raise.gif";
import latPulldown from "./img/exercise/lat-pulldown.gif";
import legCurl from "./img/exercise/leg-curl.gif";
import legExtension from "./img/exercise/leg-extension.gif";
import lunge from "./img/exercise/lunge.gif";
import muscleUp from "./img/exercise/muscle-up.gif";
import overheadPress from "./img/exercise/overhead-press.gif";
import overheadTricep from "./img/exercise/overhead-tricep.gif";
import pullup from "./img/exercise/pullup.gif";
import pushup from "./img/exercise/pushup.gif";
import shrug from "./img/exercise/shrug.gif";
import skullCrusher from "./img/exercise/skull-crusher.gif";
import slDeadlift from "./img/exercise/sl-deadlift.gif";
import squat from "./img/exercise/squat.gif";
import squatCleanAndPress from "./img/exercise/squat-clean-and-press.gif";
import wallSit from "./img/exercise/wall-sit.gif";
import zBarCurl from "./img/exercise/z-bar-curl.gif";

// Mapping exercise names to their respective GIFs
const exerciseGifs = {
  "air-squat": airSquat,
  "barbell-row": barbellRow,
  "bench-press": benchPress,
  "burpee": burpee,
  "cable-cross": cableCross,
  "cable-pullover": cablePullover,
  "calf-raise": calfRaise,
  "chair-dips": chairDips,
  "clean-and-press": cleanAndPress,
  "crunch": crunch,
  "deadlift": deadlift,
  "decline-pushup": declinePushup,
  "dumbbel-curl": dumbbellCurl,
  "front-raise": frontRaise,
  "front-squat": frontSquat,
  "hammer-curl": hammerCurl,
  "high-knee": highKnee,
  "incline-bench-press": inclineBenchPress,
  "incline-dumbbell-press": inclineDumbbellPress,
  "jumping-jack": jumpingJack,
  "jump-squat": jumpSquat,
  "lateral-raise": lateralRaise,
  "lat-pulldown": latPulldown,
  "leg-curl": legCurl,
  "leg-extension": legExtension,
  "lunge": lunge,
  "muscle-up": muscleUp,
  "overhead-press": overheadPress,
  "overhead-tricep": overheadTricep,
  "pullup": pullup,
  "pushup": pushup,
  "shrug": shrug,
  "skull-crusher": skullCrusher,
  "sl-deadlift": slDeadlift,
  "squat": squat,
  "squat-clean-and-press": squatCleanAndPress,
  "wall-sit": wallSit,
  "z-bar-curl": zBarCurl,
};

const ExerciseGuide = () => {
  const [selectedExercise, setSelectedExercise] = useState("");
  const [exerciseImage, setExerciseImage] = useState(null);

  const handleExerciseChange = (event) => {
    setSelectedExercise(event.target.value);
  };

  const showExercise = () => {
    if (selectedExercise && exerciseGifs[selectedExercise]) {
      setExerciseImage(exerciseGifs[selectedExercise]);
    }
  };

  return (
    <section id="exercise-guide" className="page page-dark">
      <h1>EXERCISE GUIDE</h1>
      <p>Select an exercise to learn how to do it.</p>
      <hr />

      <select value={selectedExercise} onChange={handleExerciseChange}>
        <option value="" disabled hidden>Select an exercise</option>
        {Object.keys(exerciseGifs).map((exercise) => (
          <option key={exercise} value={exercise}>
            {exercise.replace(/-/g, " ")}
          </option>
        ))}
      </select>

      <br />
      <br />

      <button className="btn btn-blue" onClick={showExercise}>
        Show
      </button>

      <br />
      <br />

      {exerciseImage && (
        <img
          src={exerciseImage}
          alt={selectedExercise.replace(/-/g, " ")}
          height="360px"
          style={{
            background: "#EBEBEB",
            padding: "2rem",
            borderRadius: "16px",
            boxShadow: "0 0 4px #000",
          }}
        />
      )}
    </section>
  );
};

export default ExerciseGuide;

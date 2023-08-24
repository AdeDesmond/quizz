import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Progress({ progressState, maxQuestions }) {
  const percentage = progressState;
  return (
    <div className="progress-bar">
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}

export default Progress;

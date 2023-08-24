import { useEffect } from "react";
import { useQuestions } from "./CreateContext";

let timer = 30;

function Timer() {
  const { dispatch, testing } = useQuestions();
  const minsTimer = Math.floor(testing / 60);
  const secondsTimer = testing % 60;

  useEffect(
    function () {
      const questionTimer = setInterval(function () {
        if (timer === 0) {
          return () => clearInterval(questionTimer);
        } else {
          if (timer <= 10) {
            const countdown = new Audio("sounds/finalcountdown.mp3");
            countdown.play();
          }
          dispatch({ type: "test/question", payload: timer });
          return timer--;
        }
      }, 1000);
      return () => clearInterval(questionTimer);
    },
    [dispatch]
  );
  return (
    <h3>
      {minsTimer < 10 && "0"}
      {minsTimer}:{secondsTimer < 10 && "0"}
      {secondsTimer}
    </h3>
  );
}

export default Timer;

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Timer from "./Timer";
import Progress from "./Progress";
import { useQuestions } from "./CreateContext";

const questionBank = [
  {
    id: 1,
    question: " Which of the following is the correct name of React.js?",
    answers: ["React", "React.js", "ReactJS", "All of the above"],
    correct: 3, //correct answer "D"
    points: 10,
  },
  {
    id: 2,
    question:
      "Which of the following command is used to install create-react-app?",
    answers: [
      "npm install -g create-react-app",
      "npm install create-react-app",
      "npm install -f create-react-app",
      "install -g create-react-app",
    ],
    correct: 0,
    points: 10,
  },
  {
    id: 3,
    question:
      "What of the following is used in React.js to increase performance?",
    answers: [
      "Original DOM",
      "Virtual DOM",
      "Both A and B",
      "None of the above",
    ],
    correct: 1,
    points: 10,
  },
  {
    id: 4,
    question:
      "Which of the following command is used to install create-react-app?",
    answers: [
      "npm install -g create-react-app",
      "npm install create-react-app",
      "npm install -f create-react-app",
      "install -g create-react-app",
    ],
    correct: 1,
    points: 10,
  },
  {
    id: 5,
    question:
      "A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
    answers: ["Constructor", "Class", "Object", "DataObject"],
    correct: 1,
    points: 10,
  },
  {
    id: 6,
    question:
      "Which of the following acts as the input of a class-based component?",
    answers: ["Class", "Factory", "Render", "Props"],
    correct: 3,
    points: 10,
  },
  {
    id: 7,
    question:
      "Which of the following keyword is used to create a class inheritance?",
    answers: ["Create", "Inherits", "Extends", "This"],
    correct: 2,
    points: 10,
  },
  {
    id: 8,
    question:
      "How many numbers of elements a valid react component can return?",
    answers: ["1", "2", "3", "4"],
    correct: 0,
    points: 10,
  },
  {
    id: 9,
    question: "What is a state in React?",
    answers: [
      "A permanent storage.",
      "Internal storage of the component.",
      "External storage of the component.",
      "None of the above",
    ],
    correct: 1,
    points: 10,
  },
  {
    id: 10,
    question: "What are the two ways to handle data in React?",
    answers: [
      "State & Props",
      "Services & Components",
      "State & Services",
      "State & Component",
    ],
    correct: 0,
    points: 10,
  },
];

function Questions() {
  const [nextQuestion, setNextQuestion] = useState(0);
  const [answerState, setAnswerState] = useState(false);
  const [checkpoints, setCheckpoints] = useState(0);
  const navigate = useNavigate();

  console.log(nextQuestion);
  console.log(questionBank.length);

  const { dispatch, testing } = useQuestions();

  function handleAnwerFirst(num) {
    if (num === questionBank[nextQuestion].correct) {
      setCheckpoints((c) => c + questionBank[nextQuestion].points);
      dispatch({ type: "finalresults", payload: checkpoints });
    } else {
      //for testing in the future.
    }
    setAnswerState(true);
  }

  function handleNextQuestion() {
    setNextQuestion((s) => s + 1);

    setAnswerState(false);
  }

  if (nextQuestion >= questionBank.length) {
    navigate("/showresults");
  }

  return (
    <section className="displayquestions">
      <Progress
        progressState={checkpoints}
        maxQuestions={questionBank.length}
      />
      <div className="timer">
        {nextQuestion < questionBank.length && <Timer />}
      </div>

      <p className="show-question">
        {nextQuestion < questionBank.length
          ? questionBank[nextQuestion].question
          : "ended"}
      </p>
      {questionBank[nextQuestion].answers.map((value, index) => (
        <div className="showanswer" key={index}>
          <button
            onClick={() => handleAnwerFirst(index)}
            className={`display-answer ${
              answerState && index === questionBank[nextQuestion].correct
                ? "right--answer"
                : answerState && index !== questionBank[nextQuestion].correct
                ? "wrong--answer"
                : ""
            }`}
            disabled={answerState}
          >
            {index}: {value}
          </button>
        </div>
      ))}

      <div className="moveon">
        {nextQuestion <= questionBank.length ? (
          <button onClick={handleNextQuestion} className="next-answer">
            Next Question
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Questions;
// <p className="show-question">Show question</p>

/*
${index === questionBank[nextQuestion].correct}? "right--answer": ${index !== questionBank[nextQuestion].correct}? "wrong--answer" : "display-answer"


        <button className="display-answer ">
          {nextQuestion < questionBank.length
            ? questionBank[nextQuestion].answers[1]
            : "No more questions"}
        </button>
        <button className="display-answer ">
          {nextQuestion < questionBank.length
            ? questionBank[nextQuestion].answers[2]
            : "no more questions"}
        </button>
        <button className="display-answer ">
          {nextQuestion < questionBank.length
            ? questionBank[nextQuestion].answers[3]
            : "no more questions"}
        </button>

"display-answer"{ ${
              index === questionBank[nextQuestion].correct
                ? "right--answer"
                : index !== questionBank[nextQuestion].correct
                ? "wrong--answer"
                : ""
            }}

*/

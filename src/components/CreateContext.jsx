import { createContext, useContext, useReducer } from "react";

const initialState = {
  index: 0,
  timer: 30,
  progress: null,
  finish: false,
  testing: 0,
  data: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "next/question":
      return { ...state, index: state.index + 1 };
    case "timer/question":
      return {
        ...state,
        timer: state.timer - 1,
        finish: state.finish === false,
      };
    case "test/question":
      return { ...state, testing: action.payload };

    case "finalresults":
      return { ...state, data: action.payload };
    default:
      throw new Error("Unknown action please check again");
  }
}

const CreateContext = createContext();

function QuestionContext({ children }) {
  const [{ index, testing, progress, data }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <CreateContext.Provider
      value={{ index, testing, progress, dispatch, data }}
    >
      {children}
    </CreateContext.Provider>
  );
}

function useQuestions() {
  const context = useContext(CreateContext);
  if (context === undefined)
    throw new Error("context used outside of the provider");
  return context;
}

export { useQuestions, QuestionContext };

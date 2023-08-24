import { Link } from "react-router-dom";
import { useQuestions } from "./CreateContext";

function ShowResults() {
  const { data } = useQuestions();
  const maxpoints = data;

  return (
    <>
      <div className="go-home-parent">
        <Link className="go-home" to="/">
          Home
        </Link>
      </div>
      <div className="showresults">
        {maxpoints >= 95 ? "🏆 You are a react Champion" : ""}
        {maxpoints >= 90 && maxpoints <= 95
          ? "🎉 Your react story will be told by next generation"
          : ""}
        {maxpoints >= 80 && maxpoints <= 90 ? "🍻 Not bad " : ""}
        {maxpoints >= 70 && maxpoints <= 80 ? "📖 Start learning more " : ""}
        {maxpoints <= 70 ? "📚 maybe coding is not for you " : ""}
      </div>
    </>
  );
}

export default ShowResults;

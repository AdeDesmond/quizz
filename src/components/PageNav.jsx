import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <div>
      <NavLink to="/questions">Questions</NavLink>
      <NavLink to="/showresults">Showresults</NavLink>
    </div>
  );
}

export default PageNav;

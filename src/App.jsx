import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Questions from "./components/Questions";
import ShowResults from "./components/ShowResults";

//import Questions from "./components/Questions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="questions" element={<Questions />} />
        <Route path="showresults" element={<ShowResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

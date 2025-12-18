import Home from "./assets/pages/landing";
import { Routes, Route } from "react-router-dom";
import "./assets/styles/global.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

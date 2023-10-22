import { HashRouter, Routes, Route } from "react-router-dom";
import "./components/style.css";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Home, Project } from "./components/Navcomponents";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

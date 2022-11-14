import { Route, Routes } from "react-router-dom";
import "./App.css";
import PersistentDrawerRight from "./Components/NavBar/NavBars";
import Neighbours from "./Neighbours/Neighbours";

import Homepage from "./Pages/Homepage";

function App() {
  return (
    <div className="App">
      {/* <PersistentDrawerRight /> */}
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/neighbour" element={<Neighbours />} />
      </Routes>
    </div>
  );
}

export default App;

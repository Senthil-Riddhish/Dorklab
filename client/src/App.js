import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Frontpanel from "./components/Frontpanel";
import Topbar from "./components/Topbar";
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Routes>
        <Route path="/" element={<Frontpanel/>}/>
      </Routes>
    </div>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/homePage";



function App() {
  return (
    <Router>
     
          <Routes>
            <Route path="/" element={<Home />} />
          
          </Routes>
       
    </Router>
  );
}

export default App;

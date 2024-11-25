import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homes from "./pages/Homes";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

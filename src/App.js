import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} exact />
        <Route path="/places/new" element={<NewPlace />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

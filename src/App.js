import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path="/places/new" element={<NewPlace />} exact />
          <Route path="/:userId/places" element={<UserPlaces />} exact />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

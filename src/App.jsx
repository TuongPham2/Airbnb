import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Accommodation from "./pages/Accommodation";
import Experience from "./pages/Experience";
import Service from "./pages/Service";
import Layout from "./component/layout";
import CardDetail from "./pages/CardDetail";

function App() {
  return (
    <Routes>
      {/* Route chính bao gồm Header + Footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/accommodation" />} />
        <Route path="accommodation" element={<Accommodation />} />
        <Route path="experience" element={<Experience />} />
        <Route path="service" element={<Service />} />
        <Route path=":type/:id" element={<CardDetail />} />
      </Route>

      {/* Redirect nếu sai path */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

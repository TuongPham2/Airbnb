import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Accommodation from "./pages/Accommodation/Accommodation";
import Experience from "./pages/Experience/Experience";
import Service from "./pages/Service/Service";
import Layout from "./layout/MainLayout";
import Index from "./pages/CardDetail/CardDetailPage";
import CategoryListings from "./pages/CategoryListings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/accommodation" />} />
        <Route path="accommodation" element={<Accommodation />} />
        <Route path="experience" element={<Experience />} />
        <Route path="service" element={<Service />} />
        <Route path=":type/:id" element={<Index />} />
        <Route path=":category" element={<CategoryListings />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

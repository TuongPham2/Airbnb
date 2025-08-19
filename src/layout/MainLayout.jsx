import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-20 sm:pt-32 lg:pt-[200px] mb-10 px-4 sm:px-6 lg:px-8 pb-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

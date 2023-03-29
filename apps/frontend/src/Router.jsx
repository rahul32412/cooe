import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar";

// Importing the pages
import Home from "./components/pages/home/Home";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Recharge from "./components/pages/recharge/Recharge";

// Importing the Win game
import Win from "./components/win/Win";

import OrderList from "./components/pages/orderlist/OrderList";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/win" element={<Win />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/OrderList" element={<OrderList />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default AppRouter;

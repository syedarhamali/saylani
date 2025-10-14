// Added react-routes by Muhammad Nabeel

import { Routes, Route } from "react-router-dom";
import Signup from "../hamza/signup";
import AboutSec from "../views/M.Taha/aboutSec";
import Dashboard from "../../componenets/mehtab/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/about" element={<AboutSec />} />
      <Route path="/signin" element={<h1>Sign In</h1>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
      <Route path="/theme" element={<h1>Theme</h1>} />
      <Route path="/settings" element={<h1>Settings</h1>} />
    </Routes>
  );
}
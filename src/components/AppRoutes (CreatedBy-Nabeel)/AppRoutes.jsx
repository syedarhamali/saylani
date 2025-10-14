// Added react-routes by Muhammad Nabeel

import { Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/signin" element={<h1>Sign In</h1>} />
      <Route path="/signup" element={<h1>Sign Up</h1>} />
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
      <Route path="/theme" element={<h1>Theme</h1>} />
      <Route path="/settings" element={<h1>Settings</h1>} />
    </Routes>
  );
}
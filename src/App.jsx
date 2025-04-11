import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LeadForm from "./components/LeadForm";
import LeadsList from "./components/LeadsList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<LeadForm />} />
        <Route path="/leads" element={<LeadsList />} />
      </Routes>
    </div>
  );
};

export default App;
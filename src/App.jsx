import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import UserVerification from "./pages/UserVerification";
import FareManagement from "./pages/FareManagement";

import "./styles/index.css";
import "./styles/Dashboard.css";

function Dashboard() {
  return (
    <div>
      <div className="welcome-banner">
        <h1 className="welcome-title">
          RideSync <span className="text-maroon">Admin</span>
        </h1>
        <p className="text-slate-400 mt-2 font-medium">
          Centralized management for Sri Lanka's next-gen public transport
          network.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-label">Active Fleet</p>
          <p className="stat-value">12</p>
        </div>

        <div className="stat-card" style={{ borderLeftColor: "#3b82f6" }}>
          <p className="stat-label">Live Commuters</p>
          <p className="stat-value">1.2k</p>
        </div>

        <div className="stat-card" style={{ borderLeftColor: "#10b981" }}>
          <p className="stat-label">System Credits</p>
          <p className="stat-value">450k</p>
        </div>
      </div>
    </div>
  );
}

function LiveFleet() {
  return (
    <div className="welcome-banner">
      <h1 className="welcome-title text-maroon">Live Fleet Tracking</h1>
      <p>GPS tracking active...</p>
    </div>
  );
}

function Alerts() {
  return (
    <div className="welcome-banner">
      <h1 className="welcome-title text-maroon">Safety Alerts</h1>
      <p>Emergency notifications and incident reports.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/verify" element={<UserVerification />} />
            <Route path="/fares" element={<FareManagement />} />
            <Route path="/fleet" element={<LiveFleet />} />
            <Route path="/alerts" element={<Alerts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
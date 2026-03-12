import React from "react";
import "../styles/Fares.css";
import { Save, CreditCard } from "lucide-react";

const FareManagement = () => {
  return (
    <div>
      <div
        className="welcome-banner"
        style={{
          padding: "2rem",
          marginBottom: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="welcome-title" style={{ fontSize: "1.5rem" }}>
          Fare Configuration
        </h2>

        <button className="save-btn">
          <Save size={18} /> Save Pricing
        </button>
      </div>

      <div className="fare-card">
        <h3 className="font-bold mb-4 text-slate-700 flex items-center">
          <CreditCard className="mr-2 text-maroon" />
          Segment Deductions
        </h3>

        <div className="fare-row">
          <span>Route Segment A to B</span>

          <div>
            <span>LKR </span>
            <input type="text" defaultValue="750" className="fare-input" />
          </div>
        </div>

        <div className="fare-row">
          <span>Route Segment A to C</span>

          <div>
            <span>LKR </span>
            <input type="text" defaultValue="1500" className="fare-input" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareManagement;
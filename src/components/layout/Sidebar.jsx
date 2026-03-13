import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        background: "#800000",
        color: "white",
        height: "100vh",
        padding: "20px"
      }}
    >
      <h2>RideSync</h2>

      <p><Link to="/" style={{ color: "white" }}>Dashboard</Link></p>
      <p><Link to="/routes" style={{ color: "white" }}>Routes</Link></p>
      <p><Link to="/schedules" style={{ color: "white" }}>Schedules</Link></p>
      <p><Link to="/fares" style={{ color: "white" }}>Fares</Link></p>
    </div>
  );
}

export default Sidebar;
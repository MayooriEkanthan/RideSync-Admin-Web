import { NavLink } from "react-router-dom";
import { Home, Users, CreditCard, Map, ShieldAlert } from "lucide-react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "NIC Verification", icon: Users, path: "/verify" },
    { name: "Fare Management", icon: CreditCard, path: "/fares" },
    { name: "Live Fleet", icon: Map, path: "/fleet" },
    { name: "Safety Alerts", icon: ShieldAlert, path: "/alerts" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="logo-text">RideSync</h1>
        <div className="admin-tag">Government Admin</div>
      </div>

      <nav className="nav-list">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <item.icon className="nav-icon" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
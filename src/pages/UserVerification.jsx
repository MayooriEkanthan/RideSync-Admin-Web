import React from "react";
import "../styles/Tables.css";
import { CheckCircle, XCircle, Eye } from "lucide-react";

const UserVerification = () => {
  const users = [
    { id: 1, name: "A.G. Perera", nic: "199512345678", role: "Operator", status: "Pending" },
    { id: 2, name: "M. Mayoori", nic: "200171522504", role: "Traveller", status: "Verified" },
  ];

  return (
    <div>
      <div className="welcome-banner">
        <h2 className="welcome-title">NIC Verification Hub</h2>
      </div>

      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>User Details</th>
              <th>NIC Number</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="font-bold">{user.name}</div>
                  <div className="text-xs">{user.role}</div>
                </td>

                <td>{user.nic}</td>

                <td>
                  <span className={`status-tag ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>

                <td>
                  <button className="action-btn">
                    <Eye size={18} />
                  </button>

                  <button className="action-btn">
                    <CheckCircle size={18} />
                  </button>

                  <button className="action-btn">
                    <XCircle size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserVerification;
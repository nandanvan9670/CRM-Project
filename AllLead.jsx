import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Main.css";

const AllLead = () => {
  const [leads, setLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const res = await axios.get("http://localhost:8080/api/leads");
    setLeads(res.data);
  };
// 
//   const deleteLead = async (id) => {
//     await axios.delete(`http://localhost:8080/api/leads/${id}`);
//     fetchLeads();
//   };

  // ===== PAGINATION LOGIC =====
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentLeads = leads.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(leads.length / recordsPerPage);

  return (
    <div>
      <h2 className="dashboard-title">Lead List</h2>

      <table className="crm-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>City</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentLeads.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No leads found
              </td>
            </tr>
          ) : (
            currentLeads.map((l) => (
              <tr key={l.id}>
                <td>{l.name}</td>
                <td>{l.email}</td>
                <td>{l.contact}</td>
                <td>{l.city}</td>
                <td>{l.status}</td>
                <td>
                  <button
                    onClick={() => navigate(`/updatelead/${l.id}`)}
                    className="update-btn"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* ===== PAGINATION ===== */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <span className="page">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllLead;

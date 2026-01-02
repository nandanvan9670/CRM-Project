import axios from "axios";
import { useEffect, useState } from "react";

const DemoLead = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/leads");
      const filtered = res.data.filter(lead => lead.status.toLowerCase() === "demo");
      setLeads(filtered);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  return (
    <div>
      <h2 className="dashboard-title">Demo Leads</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Contact</th><th>City</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.length === 0 ? (
            <tr><td colSpan="5">No demo leads found</td></tr>
          ) : (
            leads.map(l => (
              <tr key={l.id}>
                <td>{l.name}</td>
                <td>{l.email}</td>
                <td>{l.contact}</td>
                <td>{l.city}</td>
                <td>{l.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DemoLead;

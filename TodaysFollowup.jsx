import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../CSS/Main.css'

const TodaysFollowup = () => {
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/leads");
      // Normalize status for matching (you can adjust this based on your actual data)
   const filtered = res.data.filter(lead => lead.status.toLowerCase() === "followup"
  
   );
      setLeads(filtered);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  return (
    <div>
      <h2 className="dashboard-title">Today's Followup Leads</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Contact</th><th>City</th><th>Status</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.length === 0 ? (
            <tr><td colSpan="5">No followup leads found</td></tr>
          ) : (
            leads.map(l => (
              <tr key={l.id}>
                <td>{l.name}</td>
                <td>{l.email}</td>
                <td>{l.contact}</td>
                <td>{l.city}</td>
                <td>{l.status}</td>
                <td>
                  <button type='submit' onClick={()=> navigate("/email")}>Send Email</button>
                </td>
              </tr>

            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodaysFollowup;

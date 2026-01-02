import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateLead() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lead, setLead] = useState({
    name: "",
    email: "",
    contact: "",
    status: ""
  });

  const handleChange = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchLead = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/leads/${id}`);
        setLead(res.data);
      } catch (err) {
        console.error("Error fetching lead:", err);
      }
    };

    fetchLead();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/leads/${id}`, lead);
      alert("Lead updated!");
      navigate("/udashboard"); // Navigate to user dashboard after update
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <form
      onSubmit={handleUpdate}
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "12px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}
      
    >
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Update Lead</h2>
      Name:<input
        name="name"
        value={lead.name}
        onChange={handleChange}
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "15px"
        }}
      />

      Email:<input
        name="email"
        value={lead.email}
        onChange={handleChange}
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "15px"
        }}
      />

      Phone:<input
        name="contact"
        value={lead.contact}
        onChange={handleChange}
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "15px"
        }}
      />

      Status:<select name="status" value={lead.status} onChange={handleChange}>
        <option value="Open">Open</option>
        <option value="New">New</option>
        <option value="Demo">Demo</option>
        <option value="Closed">Closed</option>
        <option value="FollowUp">FollowUp</option>
      </select>

      <button
        type="submit"
        style={{
          padding: "12px",
          background: "#3B82F6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s"
        }}
      >
        Update Lead
      </button>
    </form>
  );
}

export default UpdateLead;

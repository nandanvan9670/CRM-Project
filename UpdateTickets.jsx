import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTickets = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState({
    title: "",
    body: "",
    contact: "",
    email: ""
  });

  useEffect(() => {
    fetch(`http://localhost:8080/api/tickets/${id}`)
      .then(res => res.json())
      .then(data => setTicket(data));
  }, [id]);

  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:8080/api/tickets/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket)
    });

    alert("Ticket updated successfully!");
    navigate("/customerdashboard"); // customer dashboard route
  };

  return (
    <div className="form-page">
      <form className="ticket-form" onSubmit={handleUpdate}>
        
        {/* ❌ Back Button */}
        <button
          type="button"
          className="close-btn"
          onClick={() => navigate("/customerdashboard")}
          title="Back to Dashboard"
        >
          ✕
        </button>

        <h2>Update Ticket</h2>

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={ticket.title}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="body"
          value={ticket.body}
          onChange={handleChange}
          rows="4"
          required
        />

        <label>Contact</label>
        <input
          type="text"
          name="contact"
          value={ticket.contact}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={ticket.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Update Ticket</button>
      </form>
    </div>
  );
};

export default UpdateTickets;

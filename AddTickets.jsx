import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTickets = () => {
  const [ticket, setTicket] = useState({
    title: "",
    body: "",
    contact: "",
    email: ""
  });
const navigate=useNavigate()
  const handleChange = (e) => {
    setTicket({ ...ticket, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:8080/api/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticket)
  });

  const data = await response.json(); // ✅ VERY IMPORTANT
  console.log("Saved Ticket:", data);

  alert("Ticket added successfully!");
  setTicket({ title: "", body: "", contact: "", email: "" });
  navigate("/tickets");
};


  return (
    <div style={{ padding: "30px" }}>
      <form onSubmit={handleSubmit}>
       <h2>Add Ticket</h2>
         Title:<input
          type="text"
          name="title"
          placeholder="Title"
          value={ticket.title}
          onChange={handleChange}
          required
        /><br /><br />

       

         Phone: <input
          type="text"
          name="contact"
          placeholder="Phone Number"
          value={ticket.contact}
          onChange={handleChange}
          required
        /><br /><br />

         Email:<input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={ticket.email}
          onChange={handleChange}
          required
        /><br /><br />

          <textarea
          name="body"
          placeholder="Description"
          value={ticket.body}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Add Ticket</button>
      </form>
    </div>
  );
};

export default AddTickets;


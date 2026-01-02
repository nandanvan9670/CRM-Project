import { useState } from "react";

const Support = () => {
  const [page, setPage] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);

  // ✨ Move tickets to state SO list updates after adding new ticket
  const [tickets, setTickets] = useState([
    { id: 1, title: "Login Issue", status: "Open", description: "Unable to login", date: "2025-02-01" },
    { id: 2, title: "Payment Failed", status: "Resolved", description: "Payment not going through", date: "2025-01-28" }
  ]);

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setPage("view");
  };

  const addTicket = (ticket) => {
    const newTicket = {
      id: tickets.length + 1,
      ...ticket,
      status: "Open",
      date: new Date().toISOString().split("T")[0],
    };

    setTickets([...tickets, newTicket]); // 🔥 Updates list live
  };

  
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Customer Support</h2>
      <p style={styles.subText}>We are here to help you.</p>

      {page === "" && (
        <div style={styles.cardBox}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Create Support Ticket</h3>
            <p style={styles.cardText}>Facing an issue? Raise a ticket.</p>
            <button style={styles.btnPrimary} onClick={() => setPage("create")}>
              Create Ticket
            </button>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>My Tickets</h3>
            <p style={styles.cardText}>Track your submitted tickets.</p>
            <button style={styles.btnSecondary} onClick={() => setPage("list")}>
              View Tickets
            </button>
          </div>
        </div>
      )}

      {page === "create" && <CreateTicketForm goBack={() => setPage("")} addTicket={addTicket} />}
      {page === "list" && <TicketsList tickets={tickets} onView={handleViewTicket} goBack={() => setPage("")} />}
      {page === "view" && <ViewTicket ticket={selectedTicket} goBack={() => setPage("list")} />}
    </div>
  );
};

export default Support;

/* --------------------------------------------------------
   CREATE TICKET FORM
-------------------------------------------------------- */
const CreateTicketForm = ({ goBack, addTicket }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "",
    contact: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    addTicket(form);
    alert("Ticket Created Successfully!");
    goBack();
  };

  return (
    <div style={styles.formBox}>
      <h3 style={styles.formTitle}>Create Support Ticket</h3>

      <form onSubmit={submitForm} style={styles.form}>
        <input name="title" placeholder="Title" style={styles.input} onChange={handleChange} required />

        <input name="email" placeholder="Email" type="email" style={styles.input} onChange={handleChange} required />

        <input name="contact" placeholder="Contact Number" style={styles.input} onChange={handleChange} required />

        <select name="priority" style={styles.input} onChange={handleChange} required>
          <option value="">Select Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <textarea
          name="description"
          placeholder="Describe your issue…"
          style={{ ...styles.input, height: "80px" }}
          onChange={handleChange}
          required
        />
    
        <button style={styles.btnPrimary}>Submit Ticket</button>
        <button type="button" style={styles.btnCancel} onClick={goBack}>Cancel</button>
      </form>
    </div>
  );
};

/* --------------------------------------------------------
   TICKET LIST
-------------------------------------------------------- */
const TicketsList = ({ tickets, onView, goBack }) => {
  return (
    <div style={styles.formBox}>
      <h3 style={styles.formTitle}>My Tickets</h3>

      <div style={{ overflowX: "auto" }}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.status}</td>
                <td>{t.date}</td>
                <td>
                  <button style={styles.btnSmall} onClick={() => onView(t)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button style={styles.btnCancel} onClick={goBack}>Back</button>
    </div>
  );
};

/* --------------------------------------------------------
   VIEW TICKET
-------------------------------------------------------- */
const ViewTicket = ({ ticket, goBack }) => {
  return (
    <div style={styles.formBox}>
      <h3 style={styles.formTitle}>Ticket Details</h3>

      <p><b>ID:</b> {ticket.id}</p>
      <p><b>Title:</b> {ticket.title}</p>
      <p><b>Description:</b> {ticket.description}</p>
      <p><b>Status:</b> {ticket.status}</p>
      <p><b>Date:</b> {ticket.date}</p>

      <button style={styles.btnCancel} onClick={goBack}>Back</button>
    </div>
  );
};

/* --------------------------------------------------------
   STYLES
-------------------------------------------------------- */
const styles = {
  container: {
    padding: "10px",
    fontFamily: "Poppins",
    color: "#000",
  },
  heading: {
    fontSize: "30px",
    fontWeight: 700,
    color: "#000",
  },
  subText: {
    color: "#222",
    marginBottom: "10px",
    fontSize: "15px",
  },
  cardBox: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#000",
  },
  cardText: {
    color: "#333",
    marginBottom: "10px",
  },
  formBox: {
    background: "#fff",
    padding: "1px",
    borderRadius: "12px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    maxWidth: "700px",
    width: "100%",
  },
  formTitle: {
    fontSize: "20px",
    textAlign: "center",    
    fontWeight: 600,
    color: "#000",
    marginBottom: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },
  input: {
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },
  table: {
    width: "100%",
    minWidth: "500px",
    borderCollapse: "collapse",
  },
  btnPrimary: {
    padding: "10px 18px",
    background: "#4e8cff",
    border: "none",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
  },
  btnSecondary: {
    padding: "10px 18px",
    background: "#34c759",
    border: "none",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
  },
  btnCancel: {
    padding: "10px 18px",
    background: "#d32f2f",
    border: "none",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
  btnSmall: {
    padding: "6px 12px",
    background: "#4e8cff",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },
};

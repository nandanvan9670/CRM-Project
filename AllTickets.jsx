import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllTickets = () => {
  const [tickets, setTickets] = useState([]);
  


  const loadTickets = () => {
    fetch("http://localhost:8080/api/tickets")
      .then(res => res.json())
      .then(data => setTickets(data));
  };

  useEffect(() => {
    loadTickets();
  }, []);

  // const deleteTicket = async (id) => {
  //   await fetch(`http://localhost:8080/api/tickets/${id}`, {
  //     method: "DELETE"
  //   });
  //   alert("Ticket deleted!");
  //   loadTickets();
  // };

  // ---------------------- CSS STYLES ----------------------

  const container = {
    padding: "20px",
    // background: "#f4f6f9",
    minHeight: "100vh",
    position:"relative",  //imp
  };

  const heading = {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#807d7dff",
  };

  const tableContainer = {
    overflowX: "auto",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "15px",
  };

  const thStyle = {
    background: "#2c3e50",
    color: "white",
    padding: "12px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
  };

  const tdStyle = {
    padding: "12px",
    color: "#333",
    borderBottom: "1px solid #eee",
  };

  const btnUpdate = {
    background: "#3498db",
    color: "white",
    border: "none",
    padding: "6px 12px",
    marginRight: "8px",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const btnDelete = {
    background: "#e74c3c",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  };
   


  // ******** MEDIA QUERY USING JS ********
  if (window.innerWidth < 600) {
    heading.fontSize = "20px";
    thStyle.fontSize = "14px";
    tdStyle.fontSize = "13px";
    btnUpdate.fontSize = btnDelete.fontSize = "12px";
    btnUpdate.padding = btnDelete.padding = "5px 8px";
  }

  //---------------------------------------------------------

  return (
    <div style={container}>
      <h2 style={heading}>All Tickets</h2>
    

      <div style={tableContainer}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Contact</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((t) => (
              <tr key={t.id}>
                <td style={tdStyle}>{t.id}</td>
                <td style={tdStyle}>{t.title}</td>
                <td style={tdStyle}>{t.body}</td>
                <td style={tdStyle}>{t.contact}</td>
                <td style={tdStyle}>{t.email}</td>
                <td style={tdStyle}>
                  <Link to={`/update-ticket/${t.id}`}>
                    <button style={btnUpdate}>Update</button>
                  </Link>
                  {/* <button style={btnDelete} onClick={() => deleteTicket(t.id)}> Delete</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTickets;

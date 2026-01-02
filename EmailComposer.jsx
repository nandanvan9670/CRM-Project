import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";   // <-- ADD THIS
import "../CSS/EmailComposer.css";

function EmailComposer() {
  const [form, setForm] = useState({
    to: "",
    subject: "",
    body: "",
    module: "LEAD"
  });

  const navigate = useNavigate(); // <-- For closing

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    const params = new URLSearchParams();
    params.append("to", form.to);
    params.append("subject", form.subject);
    params.append("body", form.body);
    params.append("module", form.module);

    await axios.post("http://localhost:8080/api/crm/email/send", params);
    alert("Email sent from CRM!");
  };

  return (
    <div className="email-composer-container" style={{ position: "relative" }}>

      {/* ❌ Close Icon */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          fontSize: "26px",
          cursor: "pointer",
          fontWeight: "bold",
          color: "red"
        }}
        onClick={() => navigate("/udashboard")} // <-- Back page
      >
        ❌
      </div>

      <h2>CRM Email Module</h2>

      Email:<input
        type="email"
        name="to"
        placeholder="Recipient Email"
        value={form.to}
        onChange={handleChange}
      />

      Subject:<input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
      />

      Message:<textarea
        name="body"
        placeholder="Email Content"
        value={form.body}
        onChange={handleChange}
      />

      <select name="module" onChange={handleChange} value={form.module}>
        <option value="LEAD">Lead</option>
        <option value="TICKET">Ticket</option>
        <option value="CUSTOMER">Customer</option>
      </select>

      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
}

export default EmailComposer;

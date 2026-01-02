const Services = () => {
  const container = {
    background: "white",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    maxWidth: "900px",
    margin: "0 auto",
    marginTop: "10px",
    color: "#333",
    lineHeight: "1.7",
  };

  const heading = {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#2c3e50",
  };

  const text = {
    fontSize: "16px",
    marginBottom: "20px",
  };

  const serviceTitle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: "6px",
  };

  const serviceDesc = {
    fontSize: "15px",
    marginBottom: "16px",
  };

  const responsiveContainer = {
    ...container,
    padding: window.innerWidth < 600 ? "16px" : "24px",
  };

  return (
    <div style={responsiveContainer}>
      <h2 style={heading}>Our CRM Services</h2>

      <p style={text}>
        We provide powerful and easy-to-use Customer Relationship Management (CRM)
        services designed to help businesses manage customers, streamline
        operations, and grow faster.
      </p>

      <dl>
        <dt style={serviceTitle}>Lead Management</dt>
        <dd style={serviceDesc}>
          Capture, track, and manage leads from multiple sources in one centralized
          system. Assign leads to sales teams and monitor the complete customer
          journey.
        </dd>
      </dl>

      <dl>
        <dt style={serviceTitle}>Customer Management</dt>
        <dd style={serviceDesc}>
          Store and organize complete customer information, communication history,
          and activity logs to build strong relationships and improve customer
          retention.
        </dd>
      </dl>

      <dl>
        <dt style={serviceTitle}>Support & Ticketing System</dt>
        <dd style={serviceDesc}>
          Easily manage customer complaints, queries, and technical issues through a
          structured ticketing system with priority and status tracking.
        </dd>
      </dl>

      <dl>
        <dt style={serviceTitle}>Email & SMS Integration</dt>
        <dd style={serviceDesc}>
          Send personalized emails and SMS messages directly from the CRM to engage
          customers and improve communication.
        </dd>
      </dl>
    </div>
  );
};

export default Services;

const AboutUs = () => {
  const container = {
    background: "white",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    lineHeight: "1.7",
    color: "#333",
    maxWidth: "900px",
    margin: "0 auto",
    marginTop: "10px",
  };

  const heading = {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#2c3e50",
  };

  const paragraph = {
    fontSize: "16px",
    marginBottom: "16px",
  };

  // Responsive (mobile screens)
  const responsiveContainer = {
    ...container,
    padding: window.innerWidth < 600 ? "16px" : "24px",
  };

  return (
    <div style={responsiveContainer}>
      <h2 style={heading}>About Us</h2>

      <p style={paragraph}>
        At CRM System, we help businesses build stronger relationships with their
        customers through smart, data-driven solutions. Our platform is designed
        to simplify customer management, improve sales productivity, and deliver
        better customer experiences — all from one powerful dashboard.
      </p>

      <p style={paragraph}>
        We understand that every business is unique. That’s why our CRM is built
        to be flexible, scalable, and easy to use. Whether you’re a startup,
        growing business, or an enterprise, our system adapts to your workflow
        and helps your teams collaborate more efficiently.
      </p>

      <p style={paragraph}>
        Our mission is to make customer relationship management simple,
        effective, and accessible for every organization. We believe in combining
        modern technology with practical business logic to help companies turn
        leads into loyal customers.
      </p>
    </div>
  );
};

export default AboutUs;

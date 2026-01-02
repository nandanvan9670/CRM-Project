import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import AddTickets from "../Pages/AddTickets";
import AllTickets from "../Pages/AllTickets";
import Feedback from "../Pages/Feedback";
import Services from "../Pages/Services";
import Support from "../Pages/Support";

const CustomerDashboard = () => {
  const [page, setPage] = useState("AboutUs");
  const [isMenuOpen, setMenuOpen] = useState(true);

  const navigate = useNavigate();

  const renderPage = () => {
    switch (page) {
      case "AboutUs":
        return <AboutUs />;
      case "services":
        return <Services />;
      case "addtickets":
        return <AddTickets />;
      case "alltickets":
        return <AllTickets />;
      case "feedback":
        return <Feedback />;
      case "support":
        return <Support />;
      default:
        return <p>No Page Found</p>;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        background: "#f4f4f4",
      }}
    >
      {/* ================= SIDEBAR ================= */}
      <div
        style={{
          width: isMenuOpen ? "220px" : "0px",
          background: "#1F2937",
          color: "white",
          padding: isMenuOpen ? "20px" : "0px",
          transition: "0.3s",
          overflow: "hidden",
        }}
      >
        <h3 style={{ marginBottom: "25px" }}>Customer</h3>

        <p style={menu(page, "AboutUs")} onClick={() => setPage("AboutUs")}>
          About Us
        </p>
        <p style={menu(page, "services")} onClick={() => setPage("services")}>
          Services
        </p>
        <p style={menu(page, "addtickets")} onClick={() => setPage("addtickets")}>
          Add Tickets
        </p>
        <p style={menu(page, "alltickets")} onClick={() => setPage("alltickets")}>
          All Tickets
        </p>
        <p style={menu(page, "feedback")} onClick={() => setPage("feedback")}>
          Feedback
        </p>
        <p style={menu(page, "support")} onClick={() => setPage("support")}>
          Support
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#EF4444",
            border: "none",
            color: "white",
            width: "100%",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Exit
        </button>
      </div>

      {/* ================= MOBILE MENU BUTTON ================= */}
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          padding: "10px 12px",
          background: "#1F2937",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          display: window.innerWidth < 768 ? "block" : "none",
        }}
      >
        ☰
      </button>

      {/* ================= RIGHT SECTION ================= */}
      <div
        style={{
          flex: 1,
          background: "#f9fafb",
          position: "relative",
          zIndex: 1 
        }}
      >

        {/* ===== PAGE CONTENT ===== */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

function menu(page, name) {
  return {
    cursor: "pointer",
    padding: "10px 12px",
    marginBottom: "5px",
    background: page === name ? "#374151" : "transparent",
    borderRadius: "6px",
    transition: "0.2s",
    fontSize: "15px",
  };
}

export default CustomerDashboard;

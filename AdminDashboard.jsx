import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AllLead from "../DashboardP/AllLead";
import AllFeedback from "../Pages/AllFeedback";
import AllTickets from "../Pages/AllTickets";
import CustomerList from "../Pages/CustomerList";
import TodaysFollowup from "../DashboardP/TodaysFollowup";

const AdminDashboard = () => {
  const [page, setPage] = useState("CustomerList");
  const [menuOpen, setMenuOpen] = useState(true);
  const navigate = useNavigate();

  const renderPage = () => {
    switch (page) {
      case "CustomerList":
        return <CustomerList />;
      case "AllLead":
        return <AllLead />;
      case "AllTickets":
        return <AllTickets />;
      case "AllFeedback":
        return <AllFeedback />;
      case "TodaysFollowup":
        return <TodaysFollowup />;
            

      default:
        return <p>No Page Found</p>;
    }
  };

  return (
    <div style={styles.container}>
      {/* ===== SIDEBAR ===== */}
      <div
        style={{
          ...styles.sidebar,
          width: menuOpen ? "220px" : "0px",
        }}
      >
        <h3 style={styles.logo}>Admin Panel</h3>

        <p style={menu(page, "CustomerList")} onClick={() => setPage("CustomerList")}>
          Customer List
        </p>
        <p style={menu(page, "AllLead")} onClick={() => setPage("AllLead")}>
          All Lead
        </p>
        <p style={menu(page, "AllTickets")} onClick={() => setPage("AllTickets")}>
          All Tickets
        </p>
        <p style={menu(page, "AllFeedback")} onClick={() => setPage("AllFeedback")}>
          All Feedback
        </p>

        <p style={menu(page, "TodaysFollowup")} onClick={() => setPage("TodaysFollowup")}>
          Todays Followup
        </p>
        
        <button style={styles.exitBtn} onClick={() => navigate("/")}>
          Exit
        </button>
      </div>

      {/* ===== MOBILE MENU BUTTON ===== */}
      <button style={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* ===== RIGHT CONTENT ===== */}
      <div style={styles.content}>
        {renderPage()}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
    background: "#f4f4f4",
  },
  sidebar: {
    background: "#1F2937",
    color: "#fff",
    padding: "20px",
    transition: "0.3s",
    overflow: "hidden",
  },
  logo: {
    marginBottom: "25px",
  },
  content: {
    flex: 1,
    padding: "20px",
    background: "#f9fafb",
    overflowY: "auto",
  },
  menuBtn: {
    position: "absolute",
    top: "15px",
    left: "15px",
    background: "#1F2937",
    color: "#fff",
    border: "none",
    padding: "10px 14px",
    fontSize: "18px",
    borderRadius: "6px",
    cursor: "pointer",
    display: window.innerWidth < 768 ? "block" : "none",
  },
  exitBtn: {
    marginTop: "25px",
    width: "100%",
    padding: "10px",
    background: "#EF4444",
    border: "none",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

function menu(page, name) {
  return {
    cursor: "pointer",
    padding: "10px 12px",
    marginBottom: "6px",
    background: page === name ? "#374151" : "transparent",
    borderRadius: "6px",
    transition: "0.2s",
    fontSize: "15px",
  };
}

export default AdminDashboard;

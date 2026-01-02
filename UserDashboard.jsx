import axios from "axios";
import { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate } from "react-router-dom";

import AllLead from "../DashboardP/AllLead";
import DemoLead from "../DashboardP/Demolead";
import NewLead from "../DashboardP/NewLead";
import OpenLead from "../DashboardP/OpenLead";
import TodaysFollowup from "../DashboardP/TodaysFollowup";

import "../CSS/Main.css";

const UserDashboard = () => {
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/leads");
        setLeads(res.data);
      } catch (error) {
        console.error("Error fetching leads", error);
      }
    };
    fetchLeads();
  }, []);

  // Filters
  const openLeads = leads.filter(l => l.status === "Open");
  const newLeads = leads.filter(l => l.status === "New");
  const demoLeads = leads.filter(l => l.status === "Demo");
  const todaysFollowupLeads = leads.filter(l => l.status === "followup");

  return (
    <div className="dashboard-container">
      {/* ===== HEADER ===== */}
      <div className="dashboard-header">
        <h2 className="dashboard-title">User Dashboard</h2>

        <div className="dashboard-actions">
          {/* ❌ Back Button */}
          <button
            className="close-btn"
            onClick={() => navigate("/")}
            title="Go Back"
          >
            ✕
          </button>

          {/* ➕ Add Lead */}
          <button
            className="add-btn"
            onClick={() => navigate("/createlead")}
          >
            + Add Lead
          </button>
        </div>
      </div>

      {/* ===== TABS ===== */}
      <Tabs defaultActiveKey="allLead" id="dashboard-tab" className="custom-tabs">
        <Tab eventKey="allLead" title="All Lead" >
          <AllLead leads={leads }/>
        </Tab>

        <Tab eventKey="open" title="Open">
          <OpenLead leads={openLeads} />
        </Tab>

        <Tab eventKey="new" title="New Lead">
          <NewLead leads={newLeads} />
        </Tab>

        <Tab eventKey="demo" title="Demo">
          <DemoLead leads={demoLeads} />
        </Tab>

        <Tab eventKey="Followup" title="Today's Followup">
          <TodaysFollowup leads={todaysFollowupLeads} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default UserDashboard;

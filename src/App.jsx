import React, { useState, useMemo, useCallback } from "react";

const STATUSES = [
  "Not Contacted",
  "Contacted",
  "Meeting Scheduled",
  "Proposal Sent",
  "Negotiation",
  "Closed Won",
  "Closed Lost",
];

const SOURCES = ["Call", "Email", "LinkedIn", "Referral"];
const TEMPS = ["Cold", "Warm", "Hot"];
const PRIORITIES = ["Low", "Medium", "High"];
const MEETING_STATUSES = ["None", "Scheduled", "Completed"];

const today = new Date().toISOString().split("T")[0];

const d = (offset) => {
  const dt = new Date();
  dt.setDate(dt.getDate() + offset);
  return dt.toISOString().split("T")[0];
};

const SEED_LEADS = [
  {
    id: 1,
    company: "Apex Logistics",
    contactName: "Sarah Chen",
    email: "s.chen@apexlogistics.com",
    phone: "+1-415-555-0101",
    linkedIn: "https://linkedin.com/in/sarahchen",
    source: "LinkedIn",
    status: "Contacted",
    temperature: "Hot",
    lastContact: d(-2),
    nextFollowUp: today,
    meetingStatus: "Scheduled",
    notes:
      "Struggling with last-mile delivery tracking. Budget approved Q1. Wants demo next week.",
    isDecisionMaker: true,
    dealValue: 48000,
    priority: "High",
  },
];

const TEMP_CONFIG = {
  Hot: { color: "#ef4444", bg: "#fef2f2", icon: "🔥" },
  Warm: { color: "#f97316", bg: "#fff7ed", icon: "♨" },
  Cold: { color: "#3b82f6", bg: "#eff6ff", icon: "❄" },
};

const STATUS_COLORS = {
  "Not Contacted": "#6b7280",
  Contacted: "#3b82f6",
  "Meeting Scheduled": "#8b5cf6",
  "Proposal Sent": "#f59e0b",
  Negotiation: "#f97316",
  "Closed Won": "#10b981",
  "Closed Lost": "#ef4444",
};

const PRIORITY_CONFIG = {
  High: { color: "#ef4444", bg: "#fef2f2" },
  Medium: { color: "#f59e0b", bg: "#fffbeb" },
  Low: { color: "#6b7280", bg: "#f9fafb" },
};

export default function App() {
  const [leads, setLeads] = useState(SEED_LEADS);

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        padding: 16,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#111827",
                margin: 0,
              }}
            >
              B2B Sales Outreach & Pipeline
            </h1>
            <p
              style={{
                margin: 0,
                marginTop: 4,
                fontSize: 13,
                color: "#6b7280",
              }}
            >
              Single-pane view of outreach, follow-ups, and deal progression.
            </p>
          </div>
        </header>

        <div
          style={{
            borderRadius: 12,
            border: "1px solid #e5e7eb",
            padding: 12,
            backgroundColor: "#ffffff",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Leads</h2>
          <p style={{ margin: 0, marginTop: 4, fontSize: 12, color: "#6b7280" }}>
            Total: {leads.length} leads
          </p>
        </div>
      </div>
    </div>
  );
}

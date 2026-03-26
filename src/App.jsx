import React, { useState } from "react";

const today = new Date().toISOString().split("T")[0];

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
    lastContact: "2025-01-10",
    nextFollowUp: today,
    meetingStatus: "Scheduled",
    notes: "Struggling with last-mile delivery tracking. Budget approved Q1. Wants demo next week.",
    isDecisionMaker: true,
    dealValue: 48000,
    priority: "High",
  },
];

export default function App() {
  const [leads] = useState(SEED_LEADS);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#0f172a", minHeight: "100vh", color: "#fff", padding: "20px" }}>
      <h1 style={{ marginBottom: "8px" }}>B2B Sales Outreach & Pipeline</h1>
      <p style={{ color: "#94a3b8", marginBottom: "24px" }}>Single-pane view of outreach, follow-ups, and deal progression.</p>

      <div style={{ background: "#1e293b", borderRadius: "8px", padding: "20px" }}>
        <h2 style={{ margin: "0 0 12px 0", fontSize: "18px" }}>Leads</h2>
        <p style={{ margin: "0 0 16px 0", fontSize: "12px", color: "#94a3b8" }}>Total: {leads.length} lead(s)</p>

        {leads.map((lead) => (
          <div key={lead.id} style={{ borderTop: "1px solid #334155", paddingTop: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
              <div><div style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8" }}>Company</div><div>{lead.company}</div></div>
              <div><div style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8" }}>Contact</div><div>{lead.contactName}</div></div>
              <div><div style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8" }}>Email</div><div>{lead.email}</div></div>
              <div><div style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8" }}>Status</div><div style={{ display: "inline-block", padding: "2px 8px", borderRadius: "4px", background: "#3b82f6", fontSize: "12px" }}>{lead.status}</div></div>
              <div><div style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8" }}>Temperature</div><div style={{ display: "inline-block", padding: "2px 8px", borderRadius: "4px", background: "#fef2f2", color: "#ef4444", fontSize: "12px" }}>{lead.temperature}</div></div>
              <div><div style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8" }}>Priority</div><div style={{ display: "inline-block", padding: "2px 8px", borderRadius: "4px", background: "#fef2f2", color: "#ef4444", fontSize: "12px" }}>{lead.priority}</div></div>
              <div><div style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8" }}>Deal Value</div><div>${lead.dealValue.toLocaleString()}</div></div>
              <div><div style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8" }}>Source</div><div>{lead.source}</div></div>
              <div><div style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8" }}>Next Follow Up</div><div>{lead.nextFollowUp}</div></div>
            </div>
            <div style={{ marginTop: "12px" }}>
              <div style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8" }}>Notes</div>
              <div style={{ fontSize: "14px", color: "#cbd5e1" }}>{lead.notes}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

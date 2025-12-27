import React, { useState } from "react";
import Header from '../components/Header';

/**
 * ForgeKinJobBoard.js
 * Single-file React component that recreates the job-listings page (image 14).
 * - No external libraries required
 * - Inline styles for portability
 * - Sample job data matching the screenshot (6 jobs)
 *
 * Usage:
 *  - Save as ForgeKinJobBoard.js
 *  - Import and render <ForgeKinJobBoard /> in your app
 */

const ACCENT = "#FFBB2E";
const BG = "#F4F5F6";
const CARD_BORDER = "#e6e6e6";
const MUTED = "#6d7176";

const jobsData = [
  {
    id: 1,
    category: "Auto Electrician",
    title: "Experienced Auto Electrician",
    company: "Premier Auto Services",
    experience: "5+ years experience",
    posted: "2hrs ago",
    description:
      "Looking for a skilled auto electrician to diagnose and repair electrical systems in various vehicles. Must have experience with modern diagnostic equipment and vehicle electronics.",
    tags: ["Electrical Diagnostics", "Wiring Systems", "Battery Systems", "Vehicle Electronics"],
    rate: 500,
    shift: "Morning",
  },
  {
    id: 2,
    category: "Plumber",
    title: "Commercial Plumber Needed",
    company: "City Plumbing Solutions",
    experience: "3+ years experience",
    posted: "2hrs ago",
    description:
      "Seeking licensed plumber for commercial building maintenance and repairs. Must be familiar with building codes and have experience with large-scale plumbing systems.",
    tags: ["Pipe Fitting", "Leak Detection", "Water Systems", "Commercial Plumbing"],
    rate: 400,
    shift: "Afternoon",
  },
  {
    id: 3,
    category: "Carpenter",
    title: "Construction Site Carpenter",
    company: "BuildRight Construction",
    experience: "4+ years experience",
    posted: "2hrs ago",
    description:
      "Experienced carpenter needed for residential construction project. Must be able to work from blueprints and have own tools.",
    tags: ["Woodworking", "Blueprint Reading", "Framing", "Finishing"],
    rate: 500,
    shift: "Morning",
  },
  {
    id: 4,
    category: "Tiler",
    title: "Professional Tiler",
    company: "Luxury Homes Renovation",
    experience: "3+ years experience",
    posted: "2hrs ago",
    description:
      "Looking for a skilled tiler for high-end residential projects. Experience with various tile materials and complex patterns required.",
    tags: ["Tile Setting", "Pattern Layout", "Waterproofing", "Surface Preparation"],
    rate: 800,
    shift: "Morning",
  },
  {
    id: 5,
    category: "Welder",
    title: "Certified Welder",
    company: "Industrial Fabrication Co.",
    experience: "4+ years experience",
    posted: "2hrs ago",
    description:
      "Certified welder needed for industrial projects. Must be proficient in MIG and TIG welding. Safety certification required.",
    tags: ["MIG Welding", "TIG Welding", "Blueprint Reading", "Metal Fabrication"],
    rate: 1000,
    shift: "Night",
  },
  {
    id: 6,
    category: "Driver",
    title: "Commercial Driver",
    company: "Logistics Pro",
    experience: "2+ years experience",
    posted: "2hrs ago",
    description:
      "CDL driver needed for local deliveries. Clean driving record and experience with commercial vehicles required.",
    tags: ["CDL License", "Route Planning", "Load Management", "Safety Compliance"],
    rate: 1500,
    shift: "Morning",
  },
];

// Small presentational components below
// Navbar replaced with shared Header component

function SearchBar({ query, setQuery }: { query: string; setQuery: (value: string) => void }) {
  return (
    <div style={{ padding: "18px 40px", background: BG }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", gap: 12, alignItems: "center" }}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search artisanal jobs / contract jobs...."
          style={{
            flex: 1,
            padding: "12px 14px",
            fontSize: 14,
            borderRadius: 8,
            border: `1.5px solid ${CARD_BORDER}`,
            background: "#fff"
          }}
        />
        <button style={{
          borderRadius: 8,
          border: `1.5px solid ${CARD_BORDER}`,
          background: "#fff",
          padding: "10px 14px",
          cursor: "pointer"
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="11" r="6" stroke="#666" strokeWidth="2"/></svg>
          &nbsp; Filters
        </button>
      </div>
    </div>
  );
}

function JobCard({ job }: { job: typeof jobsData[0] }) {
  return (
    <article style={{
      maxWidth: 1160,
      margin: "24px auto",
      background: "#fff",
      borderRadius: 14,
      padding: 26,
      boxShadow: "0 10px 28px rgba(0,0,0,0.04)",
      border: `1px solid ${CARD_BORDER}`
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 18 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{
                background: "#FFF6E6",
                color: "#B68206",
                padding: "6px 12px",
                borderRadius: 16,
                fontWeight: 700,
                fontSize: 12
              }}>{job.category}</span>
            </div>
            <div style={{ color: MUTED, fontSize: 13 }}>{job.posted}</div>
          </div>

          <h2 style={{ margin: "8px 0 10px 0", fontSize: 20, color: "#111" }}>{job.title}</h2>

          <div style={{ color: MUTED, fontSize: 13, marginBottom: 12 }}>
            <span style={{ marginRight: 10, display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 7h18" stroke="#9aa" strokeWidth="1.4"/><path d="M6 7v9a3 3 0 003 3h6a3 3 0 003-3V7" stroke="#9aa" strokeWidth="1.4"/></svg>
              {job.company}
            </span>
            <span>• {job.experience}</span>
          </div>

          <p style={{ color: "#4b5156", lineHeight: 1.6, marginBottom: 14 }}>{job.description}</p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
            {job.tags.map((t, idx) => (
              <span key={idx} style={{
                background: "#F6F7F8",
                color: "#6b6f74",
                padding: "8px 12px",
                borderRadius: 12,
                fontSize: 13
              }}>{t}</span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 28, color: MUTED, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 2v20" stroke="#9aa" strokeWidth="1.5"/><path d="M5 10h14" stroke="#9aa" strokeWidth="1.5"/></svg>
              <strong>Ghs {job.rate}</strong>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#9aa" strokeWidth="1.4"/></svg>
              <span>{job.shift}</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <button style={{
            background: ACCENT,
            color: "#fff",
            padding: "10px 16px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 18px rgba(255,187,46,0.18)"
          }}>
            Apply Now &nbsp;›
          </button>
        </div>
      </div>
    </article>
  );
}

function Pagination({ page, setPage, pages }: { page: number; setPage: React.Dispatch<React.SetStateAction<number>>; pages: number }) {
  const arr = Array.from({ length: pages }, (_, i) => i + 1);
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "28px 0", gap: 8 }}>
      <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
        style={{
          padding: "8px 12px", borderRadius: 8, border: `1px solid ${CARD_BORDER}`, background: "#fff", cursor: "pointer"
        }}>Previous</button>
      {arr.map(n => (
        <button key={n} onClick={() => setPage(n)} style={{
          padding: "8px 12px",
          borderRadius: 8,
          border: `1px solid ${ACCENT}`,
          background: n === page ? ACCENT : "#fff",
          color: n === page ? "#fff" : "#222",
          cursor: "pointer",
          fontWeight: 700
        }}>{n}</button>
      ))}
      <button onClick={() => setPage(p => Math.min(pages, p + 1))} disabled={page === pages}
        style={{
          padding: "8px 12px", borderRadius: 8, border: `1px solid ${CARD_BORDER}`, background: "#fff", cursor: "pointer"
        }}>Next</button>
    </div>
  );
}

// Main exported component
export default function ForgeKinJobBoard() {
  // pagination state (2 jobs per page for demo)
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 2;

  // simple text search across title/company/description/tags
  const filtered = jobsData.filter(j => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return [
      j.title,
      j.company,
      j.description,
      j.tags.join(" ")
    ].join(" ").toLowerCase().includes(q);
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  // If page goes out of range after filtering, reset to 1
  if (page > totalPages) setPage(1);

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "Inter, system-ui, Arial, sans-serif", color: "#222" }}>
      <Header />
      <SearchBar query={query} setQuery={setQuery} />

      <main style={{ padding: "16px 20px 80px 20px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          {visible.map(job => <JobCard job={job} key={job.id} />)}
          {visible.length === 0 && (
            <div style={{ padding: 48, background: "#fff", borderRadius: 12, textAlign: "center", color: MUTED }}>
              No jobs found
            </div>
          )}
          <Pagination page={page} setPage={setPage} pages={totalPages} />
        </div>
      </main>

      <footer style={{ padding: "40px 20px", color: MUTED, fontSize: 14 }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
          <div>About Us</div>
          <div>Contact Support</div>
          <div>Privacy Policy</div>
          <div style={{ fontWeight: 700 }}>Terms Of Service</div>
        </div>
        <div style={{ maxWidth: 1160, margin: "12px auto 0", textAlign: "center", color: "#9aa" }}>
          © 2024 SkillHive. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
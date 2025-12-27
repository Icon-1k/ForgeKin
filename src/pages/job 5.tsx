import React, { useState, useMemo } from "react";
import Header from '../components/Header';

/**
 * ForgeKinJobBoardShiftSelected.js
 *
 * Recreates the job board page with the filter panel where the "Morning" shift
 * radio is selected (matches Image 18).
 *
 * - Single-file React component
 * - No external dependencies
 * - Inline styles for portability
 *
 * Usage:
 *  - Save as ForgeKinJobBoardShiftSelected.js
 *  - Import and render <ForgeKinJobBoardShiftSelected /> in your app
 */

/* Theme colors */
const ACCENT = "#FFBB2E";
const BG = "#F4F5F6";
const CARD_BORDER = "#e6e6e6";
const MUTED = "#6d7176";

/* Sample jobs */
const JOBS = [
  {
    id: 1,
    category: "Auto Electrician",
    title: "Experienced Auto Electrician",
    company: "Premier Auto Services",
    minYears: 5,
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
    minYears: 3,
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
    minYears: 4,
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
    minYears: 3,
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
    minYears: 4,
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
    minYears: 2,
    posted: "2hrs ago",
    description:
      "CDL driver needed for local deliveries. Clean driving record and experience with commercial vehicles required.",
    tags: ["CDL License", "Route Planning", "Load Management", "Safety Compliance"],
    rate: 1500,
    shift: "Morning",
  },
];

// Navbar replaced with shared Header component

function SearchBar({ query, setQuery, onToggleFilters }: { query: string; setQuery: (value: string) => void; onToggleFilters: () => void }) {
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
        <button
          onClick={onToggleFilters}
          style={{
            borderRadius: 8,
            border: `1.5px solid ${CARD_BORDER}`,
            background: "#fff",
            padding: "10px 14px",
            cursor: "pointer",
            display: "flex",
            gap: 8,
            alignItems: "center"
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="11" r="6" stroke="#666" strokeWidth="2"/></svg>
          Filters
        </button>
      </div>
    </div>
  );
}

/* Filter panel with Morning pre-selected */
function FilterPanel({
  trade, setTrade,
  experience, setExperience,
  shift, setShift,
  maxPay, setMaxPay
}: {
  trade: string; setTrade: (value: string) => void;
  experience: string; setExperience: (value: string) => void;
  shift: string; setShift: (value: string) => void;
  maxPay: number; setMaxPay: (value: number) => void;
}) {
  const tradeOptions = ["All Trades", "Auto Electrician", "Plumber", "Carpenter", "Tiler", "Welder", "Driver"];
  const experienceOptions = ["Any Experience", "1+ years", "3+ years", "5+ years"];

  return (
    <div style={{
      maxWidth: 1160,
      margin: "18px auto",
      background: "#fff",
      borderRadius: 12,
      padding: 20,
      boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
      border: `1px solid ${CARD_BORDER}`
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: 8 }}>Trade Category</label>
          <select value={trade} onChange={e => setTrade(e.target.value)} style={{
            width: "100%",
            padding: "10px 12px",
            fontSize: 15,
            borderRadius: 6,
            border: `1px solid ${CARD_BORDER}`,
            background: "#eee"
          }}>
            {tradeOptions.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: 8 }}>Experience Level</label>
          <select value={experience} onChange={e => setExperience(e.target.value)} style={{
            width: "100%",
            padding: "10px 12px",
            fontSize: 15,
            borderRadius: 6,
            border: `1px solid ${CARD_BORDER}`,
            background: "#eee"
          }}>
            {experienceOptions.map(x => <option key={x} value={x}>{x}</option>)}
          </select>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Shift</div>

        {/* Radio list - Morning pre-selected and styled */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {["Morning", "Afternoon", "Night"].map(s => {
            const checked = shift === s;
            return (
              <label key={s} style={{ display: "flex", gap: 12, alignItems: "center", cursor: "pointer" }}>
                <span style={{
                  width: 18,
                  height: 18,
                  borderRadius: 18,
                  border: `2px solid ${checked ? ACCENT : "#cfcfcf"}`,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: checked ? "#fff" : "transparent"
                }}>
                  {checked && <span style={{
                    width: 8, height: 8, borderRadius: 8, background: ACCENT, display: "block"
                  }} />}
                </span>
                <input
                  type="radio"
                  name="shift"
                  value={s}
                  checked={checked}
                  onChange={() => setShift(s)}
                  style={{ display: "none" }}
                  aria-checked={checked}
                />
                <span style={{ fontSize: 15 }}>{s}</span>
              </label>
            );
          })}
          <button onClick={() => setShift("")} style={{
            marginTop: 6,
            color: "#666",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            alignSelf: "flex-start"
          }}>Clear</button>
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <div style={{ fontWeight: 600 }}>Pay Range (GHS)</div>
          <div style={{ color: MUTED, fontSize: 13 }}>Max: GHS {maxPay}</div>
        </div>

        <input
          type="range"
          min={100}
          max={10000}
          step={50}
          value={maxPay}
          onChange={e => setMaxPay(Number(e.target.value))}
          style={{ width: "100%", accentColor: ACCENT }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, color: MUTED }}>
          <div>GHS 100.00</div>
          <div>GHS 10,000.00</div>
        </div>
      </div>
    </div>
  );
}

function JobCard({ job }: { job: { id: number; category: string; title: string; company: string; minYears: number; posted: string; description: string; tags: string[]; rate: number; shift: string } }) {
  return (
    <article style={{
      maxWidth: 1160,
      margin: "24px auto",
      background: "#fff",
      borderRadius: 14,
      padding: 26,
      boxShadow: "0 10px 28px rgba(0,0,0,0.04)",
      border: `1px solid ${CARD_BORDER}`,
      display: "flex",
      justifyContent: "space-between",
      gap: 18
    }}>
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

        <h3 style={{ margin: "8px 0 10px 0", fontSize: 20, color: "#111" }}>{job.title}</h3>

        <div style={{ color: MUTED, fontSize: 13, marginBottom: 12 }}>
          <span style={{ marginRight: 10, display: "inline-flex", alignItems: "center", gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 7h18" stroke="#9aa" strokeWidth="1.4"/><path d="M6 7v9a3 3 0 003 3h6a3 3 0 003-3V7" stroke="#9aa" strokeWidth="1.4"/></svg>
            {job.company}
          </span>
          <span>• {job.minYears}+ years experience</span>
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

      <div style={{ display: "flex", alignItems: "center" }}>
        <button style={{
          background: ACCENT,
          color: "#fff",
          padding: "10px 16px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
        }}>
          Apply Now &nbsp;›
        </button>
      </div>
    </article>
  );
}

function Pagination({ page, setPage, totalPages }: { page: number; setPage: React.Dispatch<React.SetStateAction<number>>; totalPages: number }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "28px 0", gap: 8 }}>
      <button onClick={() => setPage((p: number) => Math.max(1, p - 1))} disabled={page === 1}
        style={{ padding: "8px 12px", borderRadius: 8, border: `1px solid ${CARD_BORDER}`, background: "#fff", cursor: "pointer" }}>
        Previous
      </button>

      {pages.map(n => (
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

      <button onClick={() => setPage((p: number) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
        style={{ padding: "8px 12px", borderRadius: 8, border: `1px solid ${CARD_BORDER}`, background: "#fff", cursor: "pointer" }}>
        Next
      </button>
    </div>
  );
}

/* Main exported component */
export default function ForgeKinJobBoardShiftSelected() {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [trade, setTrade] = useState("All Trades");
  const [experience, setExperience] = useState("Any Experience");
  const [shift, setShift] = useState("Morning"); // Morning pre-selected
  const [maxPay, setMaxPay] = useState(3000);

  // pagination
  const [page, setPage] = useState(1);
  const perPage = 2;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JOBS.filter(j => {
      if (trade !== "All Trades" && j.category !== trade) return false;
      if (experience === "1+ years" && j.minYears < 1) return false;
      if (experience === "3+ years" && j.minYears < 3) return false;
      if (experience === "5+ years" && j.minYears < 5) return false;
      if (shift && j.shift !== shift) return false;
      if (j.rate > maxPay) return false;
      if (!q) return true;
      const hay = [j.title, j.company, j.description, j.tags.join(" ")].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [query, trade, experience, shift, maxPay]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  if (page > totalPages) setPage(1);
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: "Inter, system-ui, Arial, sans-serif", color: "#222" }}>
      <Header />
      <SearchBar query={query} setQuery={setQuery} onToggleFilters={() => setShowFilters(s => !s)} />

      {showFilters && (
        <FilterPanel
          trade={trade} setTrade={setTrade}
          experience={experience} setExperience={setExperience}
          shift={shift} setShift={setShift}
          maxPay={maxPay} setMaxPay={setMaxPay}
        />
      )}

      <main style={{ padding: "8px 20px 80px 20px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          {visible.map(job => <JobCard job={job} key={job.id} />)}
          {visible.length === 0 && (
            <div style={{ padding: 48, background: "#fff", borderRadius: 12, textAlign: "center", color: MUTED }}>
              No jobs found
            </div>
          )}
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
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
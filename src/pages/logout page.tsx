import React, { useState } from "react";
import Header from '../components/Header';

// --- Sample Data ---
const professionals = [
  {
    name: "Michael Doe",
    title: "Professional Carpenter",
    rating: 4.7,
    projects: 67,
    desc:
      "Skilled carpenter with extensive experience in custom furniture and high-end residential projects.",
    tags: ["Custom Furniture", "Installation", "Woodworking"],
    rate: 5,
    time: "Morning",
    avatar:
      "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Kwabena Twumasi",
    title: "Master Plumber",
    rating: 4.9,
    projects: 89,
    desc:
      "Licensed master plumber specializing in commercial installations and complex plumbing systems.",
    tags: ["Commercial Plumbing", "Installation", "Maintenance"],
    rate: 15,
    time: "Morning",
    avatar:
      "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Justin Kotei Forson",
    title: "Senior Auto Electrician",
    rating: 4.8,
    projects: 120,
    desc:
      "Certified auto electrician with 8+ years of experience in diagnostic and repair of modern vehicle electrical systems.",
    tags: ["Electrical Systems", "Diagnostics", "Vehicle Electronics"],
    rate: 45,
    time: "Morning",
    avatar:
      "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

// --- Colors ---
const accent = "#FFBB2E";
const mutedText = "#9B9B9B";
const tagBg = "#E9E9E9";
const borderColor = "#dedede";

// --- Components ---
function RateSlider({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
      <input
        type="range"
        min={1}
        max={300}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ accentColor: accent, width: 105 }}
      />
      <span style={{ color: "#222", fontWeight: 500 }}>GHS {value}</span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: tagBg,
        color: mutedText,
        fontWeight: 500,
        fontSize: 12,
        borderRadius: 6,
        padding: "2px 10px",
        marginRight: 6,
        marginBottom: 2,
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

function StarRating({ value }: { value: number }) {
  // Show up to 5 stars, filled to "value"
  const stars = [];
  for (let i = 1; i <= 5; i++)
    stars.push(
      <span key={i} style={{ color: i <= Math.round(value) ? "#FFD600" : "#d2d2d2", fontSize: 15 }}>
        ★
      </span>
    );
  return stars;
}

function ProfileCard({ pro }: { pro: typeof professionals[0] }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "25px 30px 22px 22px",
        marginBottom: 32,
        boxShadow: "0 2.7px 7px #d0d0d033",
        border: `1.6px solid ${borderColor}`,
        display: "flex",
        gap: 19,
        alignItems: "flex-start",
        minHeight: 138,
        position: "relative"
      }}
    >
      {/* Avatar */}
      <img
        src={pro.avatar}
        alt={pro.name}
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          objectFit: "cover",
          marginTop: 5,
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700, color: "#232323", fontSize: 17 }}>{pro.name}</div>
        <div style={{ color: accent, fontSize: 14, fontWeight: 500, marginTop: 2 }}>
          {pro.title}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 3, marginTop: 1 }}>
          <StarRating value={pro.rating} />
          <span style={{ fontWeight: 500, marginLeft: 4, fontSize: 13, color: "#C7AB24" }}>
            {pro.rating}
          </span>
          <span style={{ color: mutedText, fontSize: 12, marginLeft: 7 }}>
            • {pro.projects} projects
          </span>
        </div>
        <div style={{ margin: "10px 0 10px 0", color: "#232323", fontSize: 13 }}>{pro.desc}</div>
        <div style={{ marginBottom: 7 }}>
          {pro.tags.map((t: string, i) => (
            <Tag key={i}>{t}</Tag>
          ))}
        </div>
        <div style={{ fontSize: 13, color: mutedText, display: "flex", gap: 25, alignItems: "center" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <span role="img" aria-label="money" style={{ fontSize: 15 }}>💵</span>
            Ghs {pro.rate}/hr
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 3 }}>
            <span role="img" aria-label="clock" style={{ fontSize: 15 }}>🕒</span>
            {pro.time}
          </span>
        </div>
      </div>
      {/* View Profile Button */}
      <button
        style={{
          background: accent,
          color: "#fff",
          border: "none",
          borderRadius: 6,
          fontWeight: 600,
          fontSize: 13,
          padding: "8px 18px",
          cursor: "pointer",
          alignSelf: "flex-end",
          position: "absolute",
          right: 23,
          bottom: 22,
          boxShadow: "0 1px 7px #ffbb2e30",
        }}
      >
        View Profile &gt;
      </button>
    </div>
  );
}

export default function ForgeKinTalentList() {
  const [rate, setRate] = useState(300);

  return (
    <div style={{ fontFamily: "Inter,sans-serif", background: "#F7F8F9", minHeight: "100vh" }}>
      <Header />
      {/* Search Bar Area */}
      <div style={{
        padding: "18px 14px 7px 14px",
        background: "#F7F8F9",
        borderBottom: `1px solid #E4E4E4`,
        position:"sticky",
        top:0,
        zIndex:3
      }}>
        <form style={{
          position: "relative",
          width: "100%",
          maxWidth: 570,
          margin: "0 auto",
          background: "#fff",
          border: "1px solid #DBDBDB",
          borderRadius: 7,
        }}>
          <input
            type="search"
            placeholder="Search for skilled professionals..."
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              padding: "11px 15px 11px 38px",
              borderRadius: 7,
              fontSize: 14,
              background: "none"
            }}
          />
          <svg width="19" height="19" fill="none" stroke="#A3A3A3" strokeWidth="2" style={{ position: "absolute", left: 11, top: 12 }}>
            <circle cx="8" cy="8" r="7" /><line x1="13.4" y1="13.4" x2="18" y2="18" />
          </svg>
        </form>
        <div style={{
          width: "100%",
          margin: "12px 0 0 0",
          display: "flex",
          gap: 11,
          alignItems: "center"
        }}>
          <select style={{
            background: "#fff",
            border: "1.3px solid #DEDEDE",
            borderRadius: 7,
            padding: "7px 22px 7px 13px",
            fontSize: 13,
            color: "#232323",
            fontWeight: 500,
            minWidth: 148
          }}>
            <option>Experience Level</option>
            <option>Junior</option>
            <option>Mid-Level</option>
            <option>Senior</option>
          </select>
          <select style={{
            background: "#fff",
            border: "1.3px solid #DEDEDE",
            borderRadius: 7,
            padding: "7px 22px 7px 13px",
            fontSize: 13,
            color: "#232323",
            fontWeight: 500,
            minWidth: 128
          }}>
            <option>Availability</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
          <span style={{marginLeft: 7, color: "#232323", fontWeight: 500, fontSize:12}}>Hourly Rate:</span>
          <RateSlider value={rate} onChange={setRate} />
          <button
            style={{
              marginLeft: "auto",
              background: accent,
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 15,
              padding: "7px 25px",
              cursor: "pointer",
              boxShadow: "0 1px 8px #ffbb2e30",
              minWidth: 126
            }}
            type="button"
          >
            + Post a Job
          </button>
        </div>
      </div>
      {/* Talent Cards */}
      <div style={{
        margin: "32px auto 0 auto",
        maxWidth: 520,
        minHeight: 350,
      }}>
        {professionals.map((p, i) => (
          <ProfileCard pro={p} key={i} />
        ))}
      </div>
      {/* Pagination */}
      <div style={{
        display:"flex", justifyContent:"center", gap:4,marginTop:7,marginBottom:35
      }}>
        <button style={{
          background:"#eee",color:"#999",border:"none",borderRadius:6,padding:"5px 17px",fontWeight:500,fontSize:13,cursor:"pointer"
        }} disabled>Previous</button>
        <button style={{
          background: accent, color:"#fff",border:"none",borderRadius:6,padding:"5px 14px",fontWeight:600,fontSize:13,marginLeft:4,marginRight:2
        }}>1</button>
        <button style={{
          background:"#fff",color:"#333",border:`1.3px solid ${accent}`,borderRadius:6,padding:"5px 14px",fontWeight:600,fontSize:13,
        }}>2</button>
        <button style={{
          background:"#fff",color:"#333",border:`1.3px solid ${accent}`,borderRadius:6,padding:"5px 14px",fontWeight:600,fontSize:13,
        }}>3</button>
        <button style={{
          background:"#eee",color:"#999",border:"none",borderRadius:6,padding:"5px 16px",fontWeight:500,fontSize:13,marginLeft:4,cursor:"pointer"
        }}>Next</button>
      </div>
      {/* Footer */}
      <div style={{
        marginTop: 0,
        paddingBottom: 18,
        color: mutedText,
        fontSize: 14
      }}>
        <div
          style={{
            maxWidth: 490,
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6,
            fontSize: 13,
          }}
        >
          <div>About Us</div>
          <div>Contact Support</div>
          <div>Privacy Policy</div>
          <div style={{ fontWeight: 600 }}>Terms Of Service</div>
        </div>
        <div style={{ textAlign: "center", fontSize: 13, color: mutedText }}>
          © 2024 SkillHive. All rights reserved.
        </div>
      </div>
    </div>
  );
}
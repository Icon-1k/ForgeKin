import  { useState } from "react";
import Header from '../components/Header';

// Color constants
const accent = "#FFBB2E";
const mutedText = "#9B9B9B";
const primaryText = "#232323";

export default function ForgeKinEmployerPortalLogin() {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#F7F8F9", minHeight: "100vh" }}>
      <Header />
      
      {/* Main card */}
      <div
        style={{
          width: 440,
          maxWidth: "95vw",
          margin: "70px auto 0",
          padding: "36px 40px 29px 40px",
          background: "#fff",
          borderRadius: 38,
          boxShadow: "0 2.5px 12px #0001",
          border: `1.4px solid #ededed`
        }}
      >
        <form>
          <div style={{ textAlign: "center", marginBottom: 11 }}>
            {/* Business icon */}
            <svg style={{ marginBottom: 11 }} height={50} width={50} viewBox="0 0 48 48">
              <rect x={5} y={10} width={38} height={28} rx={5} fill="#E8F1FF"/>
              <rect x={11} y={15} width={26} height={20} rx={3.3} fill="#fff" stroke="#529BFC" strokeWidth={2}/>
              <rect x={15} y={21} width={4} height={5.1} rx={1.2} fill="#D3E5FA" />
              <rect x={22} y={21} width={4} height={5.1} rx={1.2} fill="#D3E5FA" />
              <rect x={29} y={21} width={4} height={5.1} rx={1.2} fill="#D3E5FA" />
              <rect x={15} y={29.5} width={4} height={5.1} rx={1.2} fill="#E8F1FF" />
              <rect x={22} y={29.5} width={4} height={5.1} rx={1.2} fill="#E8F1FF" />
              <rect x={29} y={29.5} width={4} height={5.1} rx={1.2} fill="#E8F1FF" />
            </svg>
            <div style={{ fontSize: 27, fontWeight: 700, letterSpacing: -0.2, color: "#181818", marginBottom: 3 }}>Employer portal</div>
            <div style={{
              color: mutedText,
              fontSize: 16,
              fontWeight: 400,
              marginBottom: 8
            }}>Access your account to manage job postings</div>
          </div>
          <div style={{ marginBottom: 10, fontWeight: 600, fontSize: 15 }}>Email or Phone Number</div>
          <div style={{ position: "relative", marginBottom: 18 }}>
            <svg width={25} height={25} fill="none" style={{ position: "absolute", left: 10, top: 11, opacity: 0.4 }}>
              <rect x={3.3} y={7.9} width={18.7} height={10.7} rx={2.7} stroke="#73737e" strokeWidth={1.2} />
              <path d="M5 10l8.5 5.5L21 10" stroke="#73737e" strokeWidth={1.2} strokeLinejoin="round" />
            </svg>
            <input
              type="text"
              placeholder="name@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "13px 11px 13px 45px",
                fontSize: 17,
                background: "#F8F8F8",
                border: `2px solid #e0e0e0`,
                borderRadius: 7,
                outline: "none",
                color: "#bababa",
                fontWeight: 500
              }}
            />
          </div>
          <div style={{ marginBottom: 10, fontWeight: 600, fontSize: 15 }}>Password</div>
          <div style={{ position: "relative", marginBottom: 9 }}>
            <svg width="23" height="23" fill="none" stroke="#bbbbbb" strokeWidth="2"
              style={{ position: "absolute", left: 10, top: 13, opacity: .49 }}>
              <rect x={3.7} y={9.2} width={15} height={7} rx={2.2}/>
              <ellipse cx="11.7" cy="15.5" rx="2.28" ry="2.11"/>
              <rect x={7.9} y={5} width={7.7} height={7} rx={3.8}/>
            </svg>
            <input
              type="password"
              placeholder="Enter your password"
              value={pass}
              onChange={e => setPass(e.target.value)}
              style={{
                width: "100%",
                padding: "13px 11px 13px 45px",
                fontSize: 17,
                background: "#F8F8F8",
                border: `2px solid #e0e0e0`,
                borderRadius: 7,
                outline: "none",
                color: "#bababa",
                fontWeight: 500
              }}
            />
          </div>
          {/* Remember me & Forgot password */}
          <div style={{
            margin: "13px 0 8px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 15
          }}>
            <label style={{ display: "flex", alignItems: "center", fontWeight: 500, gap: 7, userSelect: "none" }}>
              <input type="checkbox" style={{ width: 17, height: 17, marginRight: 3 }} checked={remember} onChange={e => setRemember(e.target.checked)} />
              Remember me
            </label>
            <a href="#" style={{ color: accent, textDecoration: "none", fontWeight: 600, fontSize: 15 }}>
              Forgot password?
            </a>
          </div>
          {/* Sign in button */}
          <button type="submit"
            style={{
              background: accent,
              color: "#fff",
              border: "none",
              borderRadius: 7,
              fontWeight: 600,
              fontSize: 17,
              padding: "12px 0",
              width: "100%",
              marginTop: 13,
              marginBottom: 13,
              letterSpacing: 0.02,
              boxShadow: "0 1.5px 7px #ffbb2e22",
              cursor: "pointer"
            }}>
            Sign in to Dashboard
          </button>
          <div style={{ textAlign: "center", color: mutedText, fontSize: 16 }}>
            Not an Employer?{" "}
            <a href="#" style={{ color: "#FAAD13", cursor: "pointer", fontWeight: 600, textDecoration: "none" }}>
              Sign in as Freelancer
            </a>
          </div>
        </form>
      </div>
      {/* Footer */}
      <div style={{ marginTop: 66, paddingBottom: 20, color: mutedText, fontSize: 15 }}>
        <div
          style={{
            maxWidth: 900,
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6,
            fontSize: 14,
          }}
        >
          <div>About Us</div>
          <div>Contact Support</div>
          <div>Privacy Policy</div>
          <div style={{ fontWeight: 600 }}>Terms Of Service</div>
        </div>
        <div style={{ textAlign: "center", fontSize: 14, color: mutedText }}>
          © 2024 SkillHive. All rights reserved.
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import Header from '../components/Header';

// Color constants
const accent = "#FFBB2E";
const mutedText = "#9B9B9B";
const primaryText = "#232323";

// Stepper for three steps, current is Account Info (step 1)
function Stepper({ step }: { step: number }) {
  const steps = [
    { label: "Personal Info" },
    { label: "Account Info" },
    { label: "Verification" },
  ];
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "24px 0 24px 0",
      background: "#fff",
      borderRadius: 6,
      width: "100%",
      padding: "8px 0"
    }}>
      {steps.map((s, idx) => (
        <React.Fragment key={s.label}>
          <div style={{ textAlign: "center", minWidth: 110 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background:
                  idx < step
                    ? "#1BC800"
                    : idx === step
                    ? accent
                    : "#232323",
                border:
                  idx < step
                    ? "2px solid #1BC800"
                    : idx === step
                    ? `2px solid ${accent}`
                    : `2px solid #232323`,
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              {idx < step ? (
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                  <path d="M4 9.5l4.5 4.5 5-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                idx + 1
              )}
            </div>
            <div style={{
              fontSize: 13,
              color: idx === step ? primaryText : mutedText,
              fontWeight: idx === step ? 600 : 400,
              marginTop: 2,
              letterSpacing: 0.1,
            }}>
              {s.label}
            </div>
          </div>
          {idx < steps.length - 1 && (
            <div style={{
              flex: 1,
              borderTop: `2px solid ${idx < step ? accent : "#E5E5E5"}`,
              margin: "0 10px",
              minWidth: 25,
              marginTop: 14,
              marginBottom: -15,
            }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// Main Page
export default function ForgeKinEmployerAccountInfo() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div style={{ fontFamily: "Inter,sans-serif", background: "#F7F8F9", minHeight: "100vh" }}>
      <Header />

      {/* Main Card */}
      <div style={{
        maxWidth: 600,
        margin: "54px auto 0",
        background: "#fff",
        borderRadius: 17,
        boxShadow: "0 2.5px 10px #0001",
        padding: "38px 48px 28px 48px",
        position: "relative",
        border: `1.5px solid #ededed`,
        minHeight: 430
      }}>
        {/* Icon + Title */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          {/* Business icon */}
          <svg style={{ marginBottom: 10 }} height={54} width={54} viewBox="0 0 48 48">
            <rect x={5} y={10} width={38} height={28} rx={5} fill="#E8F1FF" />
            <rect x={11} y={15} width={26} height={20} rx={3.3} fill="#fff" stroke="#529BFC" strokeWidth={2} />
            <rect x={15} y={21} width={4} height={5.1} rx={1.2} fill="#D3E5FA" />
            <rect x={22} y={21} width={4} height={5.1} rx={1.2} fill="#D3E5FA" />
            <rect x={29} y={21} width={4} height={5.1} rx={1.2} fill="#D3E5FA" />
            <rect x={15} y={29.5} width={4} height={5.1} rx={1.2} fill="#E8F1FF" />
            <rect x={22} y={29.5} width={4} height={5.1} rx={1.2} fill="#E8F1FF" />
            <rect x={29} y={29.5} width={4} height={5.1} rx={1.2} fill="#E8F1FF" />
          </svg>
          <div style={{ fontSize: 27, fontWeight: 700, color: "#181818", marginBottom: 4 }}>Create Employer Account</div>
          <div style={{
            color: mutedText,
            fontSize: 17,
            fontWeight: 400,
            marginBottom: 9
          }}>Join our platform to find the best talent</div>
        </div>

        <Stepper step={1} /> {/* 0-based index; so 1 is "Account Info" */}
        
        {/* Form: Email, Phone */}
        <form style={{ marginTop: 10 }}>
          <div style={{ marginBottom: 17 }}>
            <label style={{ display: "block", fontSize: 16, marginBottom: 7, fontWeight: 500 }}>
              Email Address
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@company.com"
                style={{
                  width: "100%",
                  padding: "13px 11px 13px 42px",
                  fontSize: 18,
                  background: "#FCFCFC",
                  border: `2px solid #e0e0e0`,
                  borderRadius: 7,
                  outline: "none",
                  color: "#b3b3b3",
                  fontWeight: 500
                }}
              />
              <svg width="25" height="25" fill="none" style={{ position: "absolute", left: 11, top: 13, opacity: .43 }}>
                <rect x={3.3} y={7.9} width={18.7} height={10.7} rx={2.7} stroke="#73737e" strokeWidth={1.2} />
                <path d="M5 10l8.5 5.5L21 10" stroke="#73737e" strokeWidth={1.2} strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div style={{ marginBottom: 25 }}>
            <label style={{ display: "block", fontSize: 16, marginBottom: 7, fontWeight: 500 }}>
              Phone Number
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+233 (059) 000-0000"
                style={{
                  width: "100%",
                  padding: "13px 11px 13px 42px",
                  fontSize: 18,
                  background: "#FCFCFC",
                  border: `2px solid #e0e0e0`,
                  borderRadius: 7,
                  outline: "none",
                  color: "#b3b3b3",
                  fontWeight: 500
                }}
              />
              <svg width="25" height="25" fill="none" style={{ position: "absolute", left: 11, top: 13, opacity: .43 }}>
                <path d="M5 12.5A7.5 7.5 0 0 1 17.5 5M2 17.5a9.5 9.5 0 0 0 13.44 1.38l2.23 2.23a2.12 2.12 0 0 0 3-3l-2.23-2.23A9.5 9.5 0 0 0 21.49 2a2.12 2.12 0 1 0-3-3l-2.23 2.23A9.5 9.5 0 0 0 2 17.5Z" stroke="#73737e" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
          <button type="submit" style={{
            background: accent,
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: 0.03,
            padding: "13px 0",
            width: "100%",
            boxShadow: "0 1.5px 6px #ffbb2e25",
            marginBottom: 10,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 11
          }}>
            Continue <span style={{ fontSize: 21, marginTop: -2, fontWeight: 700 }}>›</span>
          </button>
        </form>
        <div style={{ textAlign: "center", color: "#24292f", fontSize: 16, marginTop: 12 }}>
          Already have an account?{" "}
          <a href="#" style={{ color: "#3766E8", cursor: "pointer", textDecoration: "none", fontWeight: 600 }}>
            Sign in
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 45, paddingBottom: 15, color: mutedText, fontSize: 15 }}>
        <div style={{
          maxWidth: 860,
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 6,
          fontSize: 15,
        }}>
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
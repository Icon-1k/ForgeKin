import React, { useState } from "react";
import CenterCard from '../components/CenterCard';
import Header from '../components/Header';
import EmployerSetPasswordCard from '../components/cards/EmployerSetPasswordCard';

// Constants
const accent = "#FFBB2E";
const primaryText = "#232323";
const mutedText = "#9B9B9B";

function Stepper({ step }: { step: number }) {
  const steps = [
    { label: "Account Info" },
    { label: "Personal Info" },
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
          <div style={{ textAlign: "center", minWidth: 120 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background:
                  idx < step ? accent :
                    idx === step ? "#232323" : "#fff",
                border:
                  idx < step ? `2px solid ${accent}` :
                    idx === step ? `2px solid #232323` :
                      `2px solid #E5E5E5`,
                color:
                  idx < step ? "#fff" :
                    idx === step ? "#fff" : primaryText,
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
                  <path d="M4 9.5l4.5 4.5 5-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

export default function ForgeKinEmployerSignup() {
  const [fullName, setFullName] = useState("");
  const [bizName, setBizName] = useState("");
  const [bizType, setBizType] = useState("");

  return (
    <div style={{ fontFamily: "Inter,sans-serif", background: "#F7F8F9", minHeight: "100vh" }}>
      <Header />

      <CenterCard
        variant="employer"
        maxWidth={560}
        padding={'36px 39px 22px 39px'}
        borderRadius={17}
        boxShadow={'0 2.5px 10px #0001'}
        employerContent={<EmployerSetPasswordCard />}
      />

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
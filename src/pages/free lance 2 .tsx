import React from "react";
import CenterCard from '../components/CenterCard';
import Header from '../components/Header';
import FreelanceAccountInfoCard from '../components/cards/FreelanceAccountInfoCard';

// Colors
const accent = "#FFBB2E";
const muted = "#EDEDED";
const primaryText = "#232323";
const mutedText = "#9B9B9B";

// Stepper component
function Stepper({ step }: { step: number }) {
  const steps = [
    { label: "Personal Info" },
    { label: "Account Info" },
    { label: "Verification" },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 32,
        marginTop: 12,
      }}
    >
      {steps.map((s, idx) => (
        <React.Fragment key={s.label}>
          <div style={{ textAlign: "center", minWidth: 140 }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background:
                  idx < step
                    ? "#1BC800"
                    : idx === step
                      ? "#FFBB2E"
                      : "#232323",
                border:
                  idx < step
                    ? "2px solid #1BC800"
                    : idx === step
                      ? `2px solid ${accent}`
                      : `2px solid ${primaryText}`,
                color:
                  idx < step
                    ? "#fff"
                    : idx === step
                      ? "#fff"
                      : "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              {idx < step ? (
                // checkmark
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                  <path d="M4 9.5l4.5 4.5 5-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                idx + 1
              )}
            </div>
            <div
              style={{
                fontSize: 13,
                color: idx === step ? primaryText : mutedText,
                fontWeight: idx === step ? 600 : 400,
                marginTop: 2,
                letterSpacing: 0.1,
              }}
            >
              {s.label}
            </div>
          </div>
          {idx < steps.length - 1 && (
            <div
              style={{
                flex: 1,
                borderTop: `2px solid ${idx < step ? accent : muted}`,
                margin: "0 12px",
                minWidth: 32,
                marginTop: 14,
                marginBottom: -15,
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// Avatars that overlap
function ExampleAvatars() {
  return (
    <div style={{ position: "absolute", right: 65, top: 125, display: "flex", gap: 0 }}>
      <div
        style={{
          width: 36,
          height: 36,
          background: " #825AF8",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: 18,
          boxShadow: "0 2px 10px #0005",
          border: "3px solid #fff",
          zIndex: 2
        }}
      >A</div>
      <div
        style={{
          width: 36,
          height: 36,
          background: "#16C87F",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: 18,
          marginLeft: -10,
          boxShadow: "0 2px 10px #0005",
          border: "3px solid #fff"
        }}
      >M</div>
    </div>
  );
}

export default function ForgeKinAccountForm() {
  return (
    <div style={{ fontFamily: "Inter,sans-serif", background: "#F7F8F9", minHeight: "100vh" }}>
      <Header />

      <CenterCard
        variant="freelance"
        maxWidth={700}
        padding="38px 52px 50px 52px"
        style={{ boxShadow: '0 3px 8px #0001', minHeight: 400 }}
        freelanceContent={<FreelanceAccountInfoCard />}
      />

      {/* Footer */}
      <div style={{ marginTop: 85, paddingBottom: 23, color: mutedText, fontSize: 15 }}>
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
import React, { useState } from "react";
import CenterCard from '../components/CenterCard';
import Header from '../components/Header';
import EmployerAccountInfoCard from '../components/cards/EmployerAccountInfoCard';
import EmployerSetPasswordCard from '../components/cards/EmployerSetPasswordCard';
import FreelanceAccountInfoCard from '../components/cards/FreelanceAccountInfoCard';
import FreelanceVerificationCard from '../components/cards/FreelanceVerificationCard';

const accent = "#FFBB2E";
// const muted = "#EDEDED";
// const primaryText = "#232323";
const mutedText = "#9B9B9B";



function AccountTypeSelector({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
      <div
        onClick={() => setSelected("freelancer")}
        style={{
          border: selected === "freelancer" ? `2px solid ${accent}` : `2px solid #E8E8E8`,
          borderRadius: 16,
          padding: "28px 40px 28px 28px",
          cursor: "pointer",
          minWidth: 230,
          display: "flex",
          alignItems: "center",
          background: "#fff",
          boxShadow: selected === "freelancer" ? "0 2px 12px #ffbb2e20" : "",
        }}
      >
        <svg width="35" height="35" fill="none" stroke="#232323" strokeWidth="1.8" style={{ marginRight: 15 }}>
          <circle cx="17.5" cy="13" r="8.5" />
          <ellipse cx="17.5" cy="26" rx="11.5" ry="6.5" />
        </svg>
        <div>
          <div style={{ fontWeight: 500, marginBottom: 3 }}>Freelancer</div>
          <div style={{ color: mutedText, fontSize: 12 }}>Find freelance opportunities</div>
        </div>
      </div>
      <div
        onClick={() => setSelected("employer")}
        style={{
          border: selected === "employer" ? `2px solid ${accent}` : `2px solid #E8E8E8`,
          borderRadius: 16,
          padding: "28px 40px 28px 28px",
          cursor: "pointer",
          minWidth: 230,
          display: "flex",
          alignItems: "center",
          background: "#fff",
          boxShadow: selected === "employer" ? "0 2px 12px #ffbb2e20" : "",
        }}
      >
        <svg width="35" height="35" fill="none" stroke="#232323" strokeWidth="1.8" style={{ marginRight: 15 }}>
          <rect x="6" y="15" width="23" height="12" rx="2" />
          <rect x="12" y="8" width="11" height="7" rx="2" />
        </svg>
        <div>
          <div style={{ fontWeight: 500, marginBottom: 3 }}>Employer</div>
          <div style={{ color: mutedText, fontSize: 12 }}>Hire skilled professionals</div>
        </div>
      </div>
    </div>
  );
}

export default function ForgeKinStepper() {
  const [selected, setSelected] = useState("freelancer");
  const [showCard, setShowCard] = useState(false);
  const [freelanceStep, setFreelanceStep] = useState(1);
  const [employerStep, setEmployerStep] = useState(1);

  return (
    <div style={{ fontFamily: "Inter,sans-serif", background: "#F7F8F9", minHeight: "100vh" }}>
      <Header />
      {/* Center Stepper / Selection */}
      <CenterCard maxWidth={650} margin={'44px auto 0'} padding="38px 45px 42px" style={{ boxShadow: '0 3px 8px #0001' }}>
        {!showCard ? (
          <>
            <div style={{ textAlign: 'center', marginBottom: 8 }}>
              <svg style={{ marginBottom: 10 }} height={57} width={57} viewBox="0 0 48 48"><rect x={5} y={10} width={38} height={28} rx={5} fill="#E8F1FF" /><rect x={11} y={15} width={26} height={20} rx={3.3} fill="#fff" stroke="#529BFC" strokeWidth={2} /></svg>
              <div style={{ fontSize: 27, fontWeight: 700, color: '#181818', marginBottom: 5 }}>Create Account</div>
              <div style={{ color: mutedText, fontSize: 15 }}>Join our platform as a Freelancer or Employer</div>
            </div>

            <AccountTypeSelector selected={selected} setSelected={setSelected} />

            <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
              <button
                onClick={() => { setShowCard(true); setFreelanceStep(1); setEmployerStep(1); }}
                style={{ flex: 1, background: accent, color: '#fff', border: 'none', padding: '12px 14px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}
              >Continue</button>
              <button onClick={() => { window.location.href = '/'; }} style={{ flex: 1, background: '#fff', color: '#232323', border: '1px solid #e6e6e6', padding: '12px 14px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
            </div>
          </>
        ) : (
          <div>
            {selected === 'freelancer' ? (
              freelanceStep === 1 ? (
                <FreelanceAccountInfoCard onContinue={() => setFreelanceStep(2)} onBack={() => setShowCard(false)} />
              ) : (
                <FreelanceVerificationCard onBack={() => setFreelanceStep(1)} />
              )
            ) : (
              employerStep === 1 ? (
                <EmployerAccountInfoCard onContinue={() => setEmployerStep(2)} />
              ) : (
                <EmployerSetPasswordCard onBack={() => setEmployerStep(1)} />
              )
            )}
            {/* external Back removed — cards provide their own Back controls now */}
          </div>
        )}
      </CenterCard>
      {/* Footer */}
      <div style={{ marginTop: 85, paddingBottom: 23, color: mutedText, fontSize: 15 }}>
        <div
          style={{
            maxWidth: 720,
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
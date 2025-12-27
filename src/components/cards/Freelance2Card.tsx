import React, { useState } from 'react';

const accent = "#FFBB2E";
const muted = "#EDEDED";
const primaryText = "#232323";
const mutedText = "#9B9B9B";

function Stepper({ step }: { step: number }) {
  const steps = [
    { label: "Personal Info" },
    { label: "Account Info" },
    { label: "Verification" },
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 32, marginTop: 12 }}>
      {steps.map((s, idx) => (
        <React.Fragment key={s.label}>
          <div style={{ textAlign: 'center', minWidth: 140 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: idx < step ? '#1BC800' : idx === step ? accent : '#232323', border: idx < step ? '2px solid #1BC800' : idx === step ? `2px solid ${accent}` : `2px solid ${primaryText}`, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 16, marginBottom: 6 }}>
              {idx < step ? (
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                  <path d="M4 9.5l4.5 4.5 5-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                idx + 1
              )}
            </div>
            <div style={{ fontSize: 13, color: idx === step ? primaryText : mutedText, fontWeight: idx === step ? 600 : 400, marginTop: 2, letterSpacing: 0.1 }}>{s.label}</div>
          </div>
          {idx < steps.length - 1 && <div style={{ flex: 1, borderTop: `2px solid ${idx < step ? accent : muted}`, margin: '0 12px', minWidth: 32, marginTop: 14, marginBottom: -15 }} />}
        </React.Fragment>
      ))}
    </div>
  );
}

function ExampleAvatars() {
  return (
    <div style={{ position: 'absolute', right: 65, top: 125, display: 'flex', gap: 0 }}>
      <div style={{ width: 36, height: 36, background: '#825AF8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 18, boxShadow: '0 2px 10px #0005', border: '3px solid #fff', zIndex: 2 }}>A</div>
      <div style={{ width: 36, height: 36, background: '#16C87F', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 18, marginLeft: -10, boxShadow: '0 2px 10px #0005', border: '3px solid #fff' }}>M</div>
    </div>
  );
}

export default function Freelance2Card() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Stepper step={1} />
      <ExampleAvatars />
      <form style={{ marginTop: 24 }}>
        <div style={{ marginBottom: 13 }}>
          <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>Fullname</label>
          <input type="text" style={{ width: '100%', padding: '7px 0', border: 'none', borderBottom: `1.5px solid #909090`, fontSize: 15, outline: 'none', fontFamily: 'inherit', background: 'none' }} placeholder="" value={fullname} onChange={e => setFullname(e.target.value)} />
        </div>
        <div style={{ marginBottom: 13 }}>
          <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>Email</label>
          <input type="email" style={{ width: '100%', padding: '7px 0', border: 'none', borderBottom: `1.5px solid #909090`, fontSize: 15, outline: 'none', fontFamily: 'inherit', background: 'none' }} placeholder="" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div style={{ marginBottom: 13 }}>
          <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>Phone Number</label>
          <input type="text" style={{ width: '100%', padding: '7px 0', border: 'none', borderBottom: `1.5px solid #909090`, fontSize: 15, outline: 'none', fontFamily: 'inherit', background: 'none' }} placeholder="" value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div style={{ marginBottom: 22 }}>
          <label style={{ display: 'block', fontSize: 14, marginBottom: 6 }}>Password</label>
          <input type="password" style={{ width: '100%', padding: '7px 0', border: 'none', borderBottom: `1.5px solid #909090`, fontSize: 15, outline: 'none', fontFamily: 'inherit', background: 'none' }} placeholder="" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" style={{ background: accent, color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 16, letterSpacing: 0.03, padding: '11px 0', width: '100%', cursor: 'pointer', boxShadow: '0 1px 6px #ffbb2e35', marginTop: 12 }}>Continue</button>
      </form>
    </>
  );
}

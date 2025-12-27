import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const accent = '#FFBB2E';
const primaryText = '#232323';
const mutedText = '#9B9B9B';

function Stepper({ step }: { step: number }) {
  const steps = [
    { label: 'Account Info' },
    { label: 'Personal Info' },
    { label: 'Verification' },
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, margin: '18px 0' }}>
      {steps.map((s, i) => (
        <div key={s.label} style={{ textAlign: 'center', minWidth: 90 }}>
          <div style={{ width: 28, height: 28, borderRadius: 999, background: i < step ? accent : i === step ? '#232323' : '#fff', border: `2px solid ${i <= step ? accent : '#E5E5E5'}`, color: i <= step ? '#fff' : primaryText, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{i < step ? '✓' : i + 1}</div>
          <div style={{ fontSize: 12, marginTop: 6, color: i === step ? primaryText : mutedText }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Employer1Card() {
  const [fullName, setFullName] = useState('');
  const [bizType, setBizType] = useState('');
  const navigate = useNavigate();

  const bizTypeOptions = [
    { value: 'startup', label: 'Startup' },
    { value: 'sme', label: 'SME' },
    { value: 'corporation', label: 'Corporation' },
  ];

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <h2 style={{ margin: 0, fontSize: 24 }}>Create Employer Account</h2>
        <p style={{ color: mutedText, marginTop: 6 }}>Join our platform to find the best talent</p>
      </div>

      <Stepper step={1} />

      <form onSubmit={e => { e.preventDefault(); navigate('/'); }} style={{ marginTop: 8 }}>
        <div style={{ marginBottom: 14 }}>
          <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Full Name</label>
          <input value={fullName} onChange={e => setFullName(e.target.value)} placeholder="John Doe" style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #E6E6E6' }} />
        </div>

        <div style={{ marginBottom: 18, position: 'relative' }}>
          <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Business Type</label>
          <select value={bizType} onChange={e => setBizType(e.target.value)} style={{ width: '100%', padding: 12, borderRadius: 8, border: '1px solid #E6E6E6' }}>
            <option value="">Select Business Type</option>
            {bizTypeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <button type="submit" style={{ width: '100%', padding: 12, borderRadius: 8, background: accent, color: '#fff', fontWeight: 700 }}>Continue</button>
      </form>
    </>
  );
}

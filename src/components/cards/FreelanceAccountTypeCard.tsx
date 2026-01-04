import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const accent = "#FFBB2E";
const muted = "#EDEDED";
const primaryText = "#232323";
const mutedText = "#9B9B9B";

function Stepper({ step }: { step: number }) {
    const steps = [
        { label: "Account Info" },
        { label: "Personal Info" },
        { label: "Verification" },
    ];
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 32, marginTop: 12 }}>
            {steps.map((s, idx) => (
                <React.Fragment key={s.label}>
                    <div style={{ textAlign: 'center', minWidth: 140 }}>
                        <div
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: '50%',
                                background: idx < step ? accent : '#fff',
                                border: `2px solid ${idx <= step ? accent : muted}`,
                                color: idx === step ? '#fff' : accent,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: 16,
                                marginBottom: 6,
                            }}
                        >
                            {idx + 1}
                        </div>
                        <div style={{ fontSize: 13, color: idx === step ? primaryText : mutedText, fontWeight: idx === step ? 600 : 400, marginTop: 2, letterSpacing: 0.1 }}>
                            {s.label}
                        </div>
                    </div>
                    {idx < steps.length - 1 && (
                        <div style={{ flex: 1, borderTop: `2px solid ${idx < step ? accent : muted}`, margin: '0 12px', minWidth: 32, marginTop: 14, marginBottom: -15 }} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

function AccountTypeSelector({ selected, setSelected }: { selected: string; setSelected: React.Dispatch<React.SetStateAction<string>> }) {
    return (
        <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
            <div
                onClick={() => setSelected('freelancer')}
                style={{
                    border: selected === 'freelancer' ? `2px solid ${accent}` : `2px solid #E8E8E8`,
                    borderRadius: 16,
                    padding: '28px 40px 28px 28px',
                    cursor: 'pointer',
                    minWidth: 230,
                    display: 'flex',
                    alignItems: 'center',
                    background: '#fff',
                    boxShadow: selected === 'freelancer' ? '0 2px 12px #ffbb2e20' : '',
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
                onClick={() => setSelected('employer')}
                style={{
                    border: selected === 'employer' ? `2px solid ${accent}` : `2px solid #E8E8E8`,
                    borderRadius: 16,
                    padding: '28px 40px 28px 28px',
                    cursor: 'pointer',
                    minWidth: 230,
                    display: 'flex',
                    alignItems: 'center',
                    background: '#fff',
                    boxShadow: selected === 'employer' ? '0 2px 12px #ffbb2e20' : '',
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

export default function FreelanceAccountTypeCard() {
    const [selected, setSelected] = useState('freelancer');
    const navigate = useNavigate();

    return (
        <>
            <Stepper step={0} />
            <AccountTypeSelector selected={selected} setSelected={setSelected} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: 28 }}>
                <button style={{ border: '2px solid #C7C7C7', background: '#fff', color: '#232323', borderRadius: 5, padding: '10px 44px', fontWeight: 500, fontSize: 16, cursor: 'pointer' }}>Back</button>
                <button
                    style={{ background: accent, color: '#fff', border: 'none', borderRadius: 5, fontWeight: 600, fontSize: 16, letterSpacing: 0.03, padding: '10px 44px', cursor: 'pointer', boxShadow: '0 1px 6px #ffbb2e35' }}
                    onClick={() => {
                        if (selected === 'employer') navigate('/signup/employer');
                        else navigate('/signup/freelance');
                    }}
                >
                    Continue
                </button>
            </div>
        </>
    );
}

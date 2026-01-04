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
                                    <path d="M4 9.5l4.5 4.5 5-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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


export default function FreelanceAccountInfoCard({ onContinue, onBack }: { onContinue?: () => void; onBack?: () => void }) {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Stepper step={1} />
            <form style={{ marginTop: 24 }} onSubmit={e => { e.preventDefault(); if (onContinue) onContinue(); }}>
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 28, marginTop: 12, flexWrap: 'wrap' }}>
                    <button type="button" onClick={() => onBack && onBack()} style={{ border: '2px solid #C7C7C7', background: '#F6F7F8', color: '#232323', borderRadius: 8, padding: '11px 60px', fontWeight: 500, fontSize: 18, minWidth: 140, cursor: 'pointer' }}>Back</button>
                    <button type="submit" style={{ background: accent, color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 18, letterSpacing: 0.04, padding: '11px 57px', minWidth: 140, cursor: 'pointer', boxShadow: '0 1px 6px #ffbb2e35' }}>Continue</button>
                </div>
            </form>
        </>
    );
}

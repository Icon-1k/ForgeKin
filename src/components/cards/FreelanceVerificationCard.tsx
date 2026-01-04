import React, { useState } from 'react';

const accent = '#FFBB2E';
const primaryText = '#232323';
const mutedText = '#9B9B9B';

function Stepper({ step }: { step: number }) {
    const steps = [
        { label: 'Personal Info' },
        { label: 'Account Info' },
        { label: 'Verification' },
    ];
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 42, marginTop: 14 }}>
            {steps.map((s, idx) => (
                <React.Fragment key={s.label}>
                    <div style={{ textAlign: 'center', minWidth: 140 }}>
                        <div style={{ width: 28, height: 28, borderRadius: '50%', background: idx < step ? '#1BC800' : idx === step ? '#232323' : '#fff', border: idx < step ? '2px solid #1BC800' : idx === step ? `2px solid ${primaryText}` : `2px solid ${mutedText}`, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 16, marginBottom: 6 }}>
                            {idx < step ? (
                                <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M4 9.5l4.5 4.5 5-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            ) : (idx + 1)}
                        </div>
                        <div style={{ fontSize: 13, color: idx === step ? primaryText : mutedText, fontWeight: idx === step ? 600 : 400, marginTop: 2, letterSpacing: 0.1 }}>{s.label}</div>
                    </div>
                    {idx < steps.length - 1 && <div style={{ flex: 1, borderTop: `2px solid ${idx < step ? accent : mutedText}`, margin: '0 12px', minWidth: 32, marginTop: 14, marginBottom: -15 }} />}
                </React.Fragment>
            ))}
        </div>
    );
}

export default function FreelanceVerificationCard({ onBack }: { onBack?: () => void }) {
    const [code, setCode] = useState('');

    return (
        <>
            <Stepper step={2} />
            <div style={{ textAlign: 'center', marginBottom: 21, marginTop: 2 }}>
                <h2 style={{ margin: 0, padding: 0, fontWeight: 700, letterSpacing: 0.5, color: primaryText, fontSize: 23, display: 'inline-block' }}>Verify&nbsp; your email</h2>
                <div style={{ marginTop: 9, color: primaryText, fontWeight: 400, fontSize: 15 }}>We've sent an email to <span style={{ color: '#232323' }}>youremail@example.com</span></div>
            </div>

            <form style={{ maxWidth: 400, margin: '0 auto' }} onSubmit={e => e.preventDefault()}>
                <div style={{ textAlign: 'left', marginBottom: 7, fontSize: 14, color: primaryText }}>Enter verification code</div>
                <input type="text" style={{ width: '100%', padding: '8px 0', border: 'none', borderBottom: '2.1px solid #C7C7C7', fontSize: 16, outline: 'none', fontFamily: 'inherit', background: 'none', marginBottom: 36 }} value={code} onChange={e => setCode(e.target.value)} autoComplete="off" />
                <div style={{ display: 'flex', justifyContent: 'center', gap: 28 }}>
                    <button type="button" onClick={() => onBack && onBack()} style={{ border: '2px solid #C7C7C7', background: '#F6F7F8', color: '#232323', borderRadius: 8, padding: '11px 60px', fontWeight: 500, fontSize: 18, minWidth: 140, cursor: 'pointer' }}>Back</button>
                    <button type="submit" style={{ background: accent, color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 18, letterSpacing: 0.04, padding: '11px 57px', minWidth: 140, cursor: 'pointer', boxShadow: '0 1px 6px #ffbb2e35' }}>Verify</button>
                </div>
                <div style={{ textAlign: 'center', marginTop: 17 }}>
                    <a href="#" style={{ color: '#3766E8', fontSize: 15, textDecoration: 'none', fontWeight: 400, letterSpacing: 0.1, cursor: 'pointer' }}>Resend verification code</a>
                </div>
            </form>
        </>
    );
}

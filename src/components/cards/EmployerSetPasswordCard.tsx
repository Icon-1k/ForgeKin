import React from 'react';

const accent = "#FFBB2E";
const primaryText = "#232323";
const mutedText = "#9B9B9B";

function Stepper({ step }: { step: number }) {
    const steps = [
        { label: 'Account Info' },
        { label: 'Personal Info' },
        { label: 'Verification' },
    ];
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '24px 0 32px 0', background: 'transparent', borderRadius: 0, width: '100%', padding: '8px 0' }}>
            {steps.map((s, idx) => (
                <React.Fragment key={s.label}>
                    <div style={{ textAlign: 'center', minWidth: 120 }}>
                        <div style={{ width: 28, height: 28, borderRadius: '50%', background: idx < step ? accent : idx === step ? '#232323' : '#fff', border: idx < step ? `2px solid ${accent}` : idx === step ? `2px solid #232323` : `2px solid #E5E5E5`, color: idx < step ? '#fff' : idx === step ? '#fff' : primaryText, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 16, marginBottom: 6 }}>{idx < step ? (
                            <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M4 9.5l4.5 4.5 5-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        ) : (idx + 1)}</div>
                        <div style={{ fontSize: 13, color: idx === step ? primaryText : mutedText, fontWeight: idx === step ? 600 : 400, marginTop: 2, letterSpacing: 0.1 }}>{s.label}</div>
                    </div>
                    {idx < steps.length - 1 && <div style={{ flex: 1, borderTop: `2px solid ${idx < step ? accent : '#E5E5E5'}`, margin: '0 10px', minWidth: 25, marginTop: 18, marginBottom: 0 }} />}
                </React.Fragment>
            ))}
        </div>
    );
}

export default function EmployerSetPasswordCard({ onBack, onContinue }: { onBack?: () => void; onContinue?: () => void }) {
    return (
        <>
            <div style={{ textAlign: 'center', marginBottom: 10 }}>
                <svg style={{ marginBottom: 10 }} height={57} width={57} viewBox="0 0 48 48"><rect x={5} y={10} width={38} height={28} rx={5} fill="#E8F1FF" /><rect x={11} y={15} width={26} height={20} rx={3.3} fill="#fff" stroke="#529BFC" strokeWidth={2} /></svg>
                <div style={{ fontSize: 27, fontWeight: 700, color: '#181818', marginBottom: 5 }}>Create Employer Account</div>
                <div style={{ color: mutedText, fontSize: 17, fontWeight: 400, marginBottom: 8 }}>Join our platform to find the best talent</div>
            </div>

            <Stepper step={2} />

            <form style={{ marginTop: 22, position: 'relative', zIndex: 1, boxSizing: 'border-box' }} onSubmit={e => { e.preventDefault(); if (onContinue) onContinue(); }}>
                <div style={{ marginBottom: 17 }}>
                    <label style={{ display: 'block', fontSize: 16, marginBottom: 7, fontWeight: 500 }}>Password</label>
                    <div style={{ position: 'relative' }}>
                        <svg viewBox="0 0 22 22" width="20" height="20" style={{ position: 'absolute', left: 12, top: 12, opacity: .6, zIndex: 2 }}>
                            <path d="M6 10V8a4 4 0 018 0v2" stroke="#9b9b9b" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
                            <rect x={3} y={10} width={16} height={7} rx={2} stroke="#9b9b9b" strokeWidth={1.4} />
                        </svg>
                        <input type="password" placeholder="Create a strong password" style={{ width: '100%', padding: '11px 12px 11px 44px', fontSize: 16, background: '#FCFCFC', border: `2px solid #e0e0e0`, borderRadius: 7, outline: 'none', color: '#a9a9a9', fontWeight: 500 }} />
                    </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', fontSize: 16, marginBottom: 7, fontWeight: 500 }}>Confirm Password</label>
                    <div style={{ position: 'relative' }}>
                        <svg viewBox="0 0 22 22" width="20" height="20" style={{ position: 'absolute', left: 12, top: 12, opacity: .6, zIndex: 2 }}>
                            <path d="M6 10V8a4 4 0 018 0v2" stroke="#9b9b9b" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
                            <rect x={3} y={10} width={16} height={7} rx={2} stroke="#9b9b9b" strokeWidth={1.4} />
                        </svg>
                        <input type="password" placeholder="Confirm your password" style={{ width: '100%', padding: '11px 12px 11px 44px', fontSize: 16, background: '#FCFCFC', border: `2px solid #e0e0e0`, borderRadius: 7, outline: 'none', color: '#a9a9a9', fontWeight: 500 }} />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
                    <button type="button" onClick={() => onBack && onBack()} style={{ border: '2px solid #C7C7C7', background: '#F6F7F8', color: '#232323', borderRadius: 8, padding: '11px 60px', fontWeight: 500, fontSize: 18, minWidth: 140, cursor: 'pointer' }}>Back</button>
                    <button type="submit" style={{ background: accent, color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 18, letterSpacing: 0.04, padding: '11px 57px', minWidth: 140, cursor: 'pointer', boxShadow: '0 1.5px 6px #ffbb2e25', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 11 }}>Create Account <span style={{ fontSize: 21, marginTop: -2, fontWeight: 700 }}>›</span></button>
                </div>
            </form>

            <div style={{ textAlign: 'center', color: '#24292f', fontSize: 16, marginTop: 12 }}>Already have an account? <a href="#" style={{ color: '#3766E8', cursor: 'pointer', textDecoration: 'none', fontWeight: 600 }}>Sign in</a></div>
        </>
    );
}

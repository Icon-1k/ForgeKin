import { Fragment, useState } from 'react';
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 32, marginTop: 12 }}>
            {steps.map((s, idx) => (
                <Fragment key={s.label}>
                    <div style={{ textAlign: 'center', minWidth: 140 }}>
                        <div
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: '50%',
                                background: idx < step ? accent : idx === step ? '#232323' : '#fff',
                                border: `2px solid ${idx <= step ? accent : '#EDEDED'}`,
                                color: idx === step ? '#fff' : accent,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: 16,
                                marginBottom: 6,
                            }}
                        >
                            {idx < step ? (
                                <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M4 9.5l4.5 4.5 5-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            ) : (
                                idx + 1
                            )}
                        </div>
                        <div style={{ fontSize: 13, color: idx === step ? primaryText : mutedText, fontWeight: idx === step ? 600 : 400, marginTop: 2, letterSpacing: 0.1 }}>{s.label}</div>
                    </div>
                    {idx < steps.length - 1 && (
                        <div style={{ flex: 1, borderTop: `2px solid ${idx < step ? accent : '#EDEDED'}`, margin: '0 12px', minWidth: 32, marginTop: 14, marginBottom: -15 }} />
                    )}
                </Fragment>
            ))}
        </div>
    );
}

export default function EmployerAccountInfoCard({ onContinue, onBack }: { onContinue?: () => void; onBack?: () => void }) {
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

            <form onSubmit={e => { e.preventDefault(); if (onContinue) { onContinue(); } else { navigate('/'); } }} style={{ marginTop: 8 }}>
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

                <div style={{ display: 'flex', justifyContent: 'center', gap: 28 }}>
                    <button type="button" onClick={() => onBack && onBack()} style={{ border: '2px solid #C7C7C7', background: '#F6F7F8', color: '#232323', borderRadius: 8, padding: '11px 60px', fontWeight: 500, fontSize: 18, minWidth: 140, cursor: 'pointer' }}>Back</button>
                    <button type="submit" style={{ background: accent, color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 18, letterSpacing: 0.04, padding: '11px 57px', minWidth: 140, cursor: 'pointer' }}>Continue</button>
                </div>
            </form>
        </>
    );
}

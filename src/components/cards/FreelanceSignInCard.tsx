import { useState } from 'react';

const accent = '#FFBB2E';
const primaryText = '#232323';
const mutedText = '#9B9B9B';

export default function FreelanceSignInCard() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <form autoComplete="off" style={{ marginTop: 3 }}>
                <div style={{ fontSize: 2 > 0 ? '2.1rem' : '2.2rem', fontWeight: 700, textAlign: 'center', marginBottom: 7, letterSpacing: 0.05 }}>
                    Welcome back
                </div>
                <div style={{ color: mutedText, marginBottom: 28, textAlign: 'center', fontSize: 15 }}>Please enter your details to sign in</div>
                <label style={{ fontWeight: 600, fontSize: 15, marginBottom: 6, display: 'block' }}>Email or Phone Number</label>
                <div style={{ position: 'relative', marginBottom: 17, marginTop: 3, height: 38 }}>
                    <svg viewBox="0 0 22 22" fill="none" width="22" height="22" style={{ position: 'absolute', left: 9, top: 7, opacity: .55 }}>
                        <rect x={2.5} y={5} width={17} height={12} rx={2.5} stroke="#939393" strokeWidth={1.5} />
                        <path d="M4 7l7 4.5L18 7" stroke="#939393" strokeWidth={1.3} strokeLinejoin="round" />
                    </svg>
                    <input type="text" placeholder="Enter your email or Phone Number" style={{ width: '100%', border: 'none', outline: 'none', padding: '10px 10px 10px 39px', borderBottom: '2px solid #bfbfbf', background: 'none', borderRadius: 0, fontSize: 16, color: primaryText }} />
                </div>
                <label style={{ fontWeight: 600, fontSize: 15, marginBottom: 7, marginTop: 5, display: 'block' }}>Password</label>
                <div style={{ position: 'relative', marginBottom: 12, marginTop: 3, height: 38 }}>
                    <svg viewBox="0 0 22 22" fill="none" width="22" height="22" style={{ position: 'absolute', left: 9, top: 8, opacity: .55 }}>
                        <rect x={4.3} y={8.2} width={13.5} height={7} rx={2} stroke="#979797" strokeWidth={1.3} />
                        <circle cx={10.99} cy={12.85} r={1.35} stroke="#979797" strokeWidth={1.2} />
                        <rect x={7.4} y={4} width={7.25} height={6} rx={3} stroke="#979797" strokeWidth={1.3} />
                    </svg>
                    <input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" style={{ width: '100%', border: 'none', outline: 'none', padding: '10px 35px 10px 39px', borderBottom: '2px solid #bfbfbf', background: 'none', borderRadius: 0, fontSize: 16, color: primaryText }} />
                    <svg onClick={() => setShowPassword(s => !s)} width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ position: 'absolute', right: 7, top: 10, cursor: 'pointer', opacity: .56 }}>
                        <ellipse cx="11" cy="11" rx="8" ry="4.5" stroke="#9d9d9d" strokeWidth={1.5} />
                        <circle cx="11" cy="11" r="2" fill="none" stroke="#9d9d9d" strokeWidth={1.5} />
                    </svg>
                </div>

                <div style={{ margin: '15px 0 15px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 15 }}>
                    <label style={{ display: 'flex', alignItems: 'center', fontWeight: 500, gap: 7 }}>
                        <input type="checkbox" style={{ width: 16, height: 16, marginRight: 3 }} />
                        Remember me
                    </label>
                    <a href="#" style={{ color: accent, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>Forgot password?</a>
                </div>

                <button type="submit" style={{ background: accent, color: '#fff', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 17, padding: '11px 0', width: '100%', marginTop: 2, marginBottom: 16, letterSpacing: 0.02, boxShadow: '0 1.5px 7px #ffbb2e22', cursor: 'pointer' }}>Sign in</button>
                <div style={{ textAlign: 'center', color: mutedText, fontWeight: 600, marginBottom: 10 }}>OR</div>
                <button type="button" style={{ width: '100%', background: '#fff', color: primaryText, border: `1.5px solid #d8d8d8`, borderRadius: 8, fontWeight: 500, fontSize: 16, padding: '9px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 13, gap: 13, cursor: 'pointer' }}>
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: 26, height: 26, display: 'inline-block', verticalAlign: 'middle' }} /> Continue with Google
                </button>
                <button type="button" style={{ width: '100%', background: '#fff', color: primaryText, border: `1.5px solid #d8d8d8`, borderRadius: 8, fontWeight: 500, fontSize: 16, padding: '9px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2, gap: 13, cursor: 'pointer' }}>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"><path fill="#000" d="M15.84 3.26002C15.16 3.94002 14.19 4.43002 13.22 4.35002C13.12 3.55002 13.55 2.72002 14.18 2.16002C14.81 1.57002 15.81 1.11002 16.7 1.13002C16.81 1.96002 16.47 2.80002 15.84 3.26002ZM18.05 7.13002C17.12 7.19002 16 6.55002 14.67 6.55002C13.33 6.55002 12.91 7.34002 11.57 7.34002C10.23 7.34002 9.57 6.55002 8.38 6.55002C6.98 6.59002 5.47 7.43002 4.57 8.87002C2.93 11.47 3.97 15.56 5.56 17.93C6.36 19.09 7.36 20.44 8.66 20.41C9.93 20.38 10.38 19.59 11.92 19.59C13.46 19.59 13.87 20.41 15.2 20.4C16.5 20.39 17.39 19.13 18.18 17.98C19.04 16.71 19.37 15.9 19.92 14.49C16.22 13.05 15.57 7.96002 19.09 7.18002C18.76 7.14002 18.4 7.11002 18.05 7.13002Z" /></svg>
                    Continue with Apple
                </button>
            </form>
        </>
    );
}

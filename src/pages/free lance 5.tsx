import Header from '../components/Header';


// Color constants
const accent = "#FFBB2E";
const mutedText = "#A0A1A6";
const primaryText = "#232323";

export default function ForgeKinAccountRecovery() {
  return (
    <div style={{ fontFamily: "Inter,sans-serif", background: "#F7F8F9", minHeight: "100vh" }}>
      <Header />

      {/* Centered Account Recovery Card */}
      <div
        style={{
          width: 700,
          maxWidth: "92vw",
          margin: "89px auto 0",
          background: "#fff",
          borderRadius: 28,
          boxShadow: "0 2.5px 12px #0001",
          padding: "50px 0 45px 0",
          position: "relative",
          minHeight: 270,
          border: `1.4px solid #e9e9e6`
        }}
      >
        <div style={{
          fontSize: "2.3rem",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 25,
          letterSpacing: 0.05,
          color: "#171717"
        }}>
          Account Recovery
        </div>
        <style>{`
          .fk-input::placeholder { color: ${mutedText}; }
          .fk-input::-webkit-input-placeholder { color: ${mutedText}; }
          .fk-input::-moz-placeholder { color: ${mutedText}; }
        `}</style>
        <form style={{ maxWidth: 440, margin: "0 auto" }} autoComplete="off">
          <label style={{ fontWeight: 500, fontSize: 19, display: "block", marginBottom: 13, color: "#181820" }}>
            Email or Phone Number
          </label>
          <div style={{
            position: "relative",
            marginBottom: 12,
            marginTop: 3,
            height: 46
          }}>
            <svg viewBox="0 0 30 30" fill="none" width="34" height="34"
              style={{ position: "absolute", left: 2, top: 3, opacity: .34 }}>
              <rect x={3.3} y={7.9} width={23} height={14.7} rx={3.4} stroke="#73737E" strokeWidth={1.7} />
              <path d="M5 10l10 6.5L25 10" stroke="#73737E" strokeWidth={1.65} strokeLinejoin="round" />
            </svg>
            <input
              className="fk-input"
              type="text"
              placeholder="Enter your email or Phone Number"
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                padding: "10px 10px 10px 52px",
                borderBottom: "2px solid #646565",
                background: "none",
                fontSize: 22,
                color: primaryText,
                borderRadius: 0,
                fontWeight: 400,
                letterSpacing: 0.6
              }}
            />
          </div>
        </form>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 109, paddingBottom: 20, color: mutedText, fontSize: 15 }}>
        <div
          style={{
            maxWidth: 950,
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6,
            fontSize: 15,
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
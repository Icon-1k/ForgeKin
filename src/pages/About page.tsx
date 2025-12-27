import Header from '../components/Header';

const accent = "#FFBB2E";
const primaryText = "#232323";
const mutedText = "#9B9B9B";

export default function ForgeKinAboutPage() {
  return (
    <div style={{ fontFamily: "Inter,sans-serif", background: "#F7F8F9", minHeight: "100vh" }}>
      <Header />

      {/* Content Card */}
      <div style={{
        background: "#fff",
        maxWidth: 410,
        margin: "26px auto 0 auto",
        borderRadius: 24,
        boxShadow: "0 2.5px 10px #0001",
        padding: "34px 17px 30px 17px",
        position: "relative",
        minHeight: 650
      }}>
        <div style={{display:"flex",justifyContent:"center",marginBottom: 24 }}>
          <div style={{
            background: accent,
            color: "#fff",
            borderRadius: 7,
            display: "inline-block",
            fontWeight: 700,
            fontSize: 21,
            padding: "5px 26px 5px 26px",
            letterSpacing: 1,
            boxShadow: "0 2.5px 10px #ffbb2e20"
          }}>About Us
          </div>
        </div>
        <div style={{ color: "#272727", marginBottom:18, fontSize:13, textAlign:"center" }}>
          At SKILLHIVE, we specialize in connecting businesses with top-tier talent while empowering job seekers to find meaningful employment opportunities. With a deep understanding of industry needs and workforce trends, we provide tailored staffing solutions that drive success for both employers and employees.
        </div>
        <div style={{ margin: "27px 0 2px 0", fontWeight: 700, fontSize: 18, textAlign:"center" }}>Who We Are</div>
        <div style={{fontSize:13, marginTop:4, color:"#222", marginBottom:12, textAlign:"center" }}>
          We are a dynamic labor agency committed to excellence in workforce management. Whether it’s temporary staffing, permanent placement, contract staffing, managed services, or on-demand staffing, our expert team ensures seamless hiring experiences that match the right people with the right jobs.
        </div>
        <div style={{ margin: "22px 0 2px 0", fontWeight: 700, fontSize: 18, textAlign:"center" }}>Our Mission</div>
        <div style={{fontSize:13, marginTop:4, color:"#222", marginBottom:12, textAlign:"center" }}>
          To bridge the gap between talent and opportunity by delivering efficient, reliable, and innovative staffing solutions that help businesses thrive and individuals build successful careers.
        </div>
        <div style={{ margin: "22px 0 2px 0", fontWeight: 700, fontSize: 18, textAlign:"center" }}>Why Choose Us?</div>
        <div style={{fontSize:13, color:"#222", margin:"0 auto", maxWidth:375, marginTop:6, marginBottom:12}}>
          <div style={{display:"flex", alignItems:"flex-start", marginBottom:3}}>
            <span role="img" aria-label="check" style={{fontSize:17, marginRight:4}}>✅</span>
            <span style={{marginLeft:2}}> Industry Expertise – We understand the unique hiring needs of various industries.</span>
          </div>
          <div style={{display:"flex", alignItems:"flex-start", marginBottom:3}}>
            <span role="img" aria-label="check" style={{fontSize:17, marginRight:4}}>✅</span>
            <span style={{marginLeft:2}}> Flexible Solutions – Custom staffing models designed to suit your business needs.</span>
          </div>
          <div style={{display:"flex", alignItems:"flex-start", marginBottom:3}}>
            <span role="img" aria-label="check" style={{fontSize:17, marginRight:4}}>✅</span>
            <span style={{marginLeft:2}}> Quality Assurance – Rigorous candidate screening and recruitment processes.</span>
          </div>
          <div style={{display:"flex", alignItems:"flex-start", marginBottom:3}}>
            <span role="img" aria-label="check" style={{fontSize:17, marginRight:4}}>✅</span>
            <span style={{marginLeft:2}}> Compliance & Support – Ensuring legal and regulatory compliance for workforce management.</span>
          </div>
        </div>
        <div style={{ margin: "20px 0 2px 0", fontWeight: 700, fontSize: 18, textAlign:"center" }}>Our Commitment</div>
        <div style={{fontSize:13, color:"#222", margin:"0 auto", maxWidth:375, textAlign:"center"}}>
          At SKILLHIVE, we believe in fostering strong partnerships built on trust, integrity, and excellence. Whether you are a company in need of skilled professionals or a job seeker looking for your next opportunity, we are here to make the connection seamless and successful.
        </div>
        <div style={{
          textAlign:"center",
          marginTop:22,
          marginBottom:15,
          fontWeight:500,
          color:primaryText,
          fontSize:15
        }}>
          Let’s build a workforce that works for you!
        </div>
        <div style={{
          margin: "4px auto 0 auto",
          fontSize:12,
          textAlign:"left",
          maxWidth:350,
          color:"#6E5F5F"
        }}>
          <div style={{display:"flex",alignItems:"center", gap:2,marginBottom:2}}>
            <span role="img" aria-label="location" style={{fontSize:13, color:"#FC365B"}}>📍</span>
            <span>Location: [Your Office Address]</span>
          </div>
          <div style={{display:"flex",alignItems:"center", gap:2,marginBottom:2}}>
            <span role="img" aria-label="phone" style={{fontSize:13, color:"#FC365B"}}>☎️</span>
            <span>Contact: [Your Phone Number]</span>
          </div>
          <div style={{display:"flex",alignItems:"center", gap:2}}>
            <span role="img" aria-label="email" style={{fontSize:13, color:"#FC365B"}}>✉️</span>
            <span>Email: [Your Email Address]</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 40,
        paddingBottom: 20,
        color: mutedText,
        fontSize: 14
      }}>
        <div
          style={{
            maxWidth: 450,
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6,
            fontSize: 13,
          }}
        >
          <div>About Us</div>
          <div>Contact Support</div>
          <div>Privacy Policy</div>
          <div style={{ fontWeight: 600 }}>Terms Of Service</div>
        </div>
        <div style={{ textAlign: "center", fontSize: 13, color: mutedText }}>
          © 2024 SkillHive. All rights reserved.
        </div>
      </div>
    </div>
  );
}
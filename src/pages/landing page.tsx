import React from 'react';
import Header from '../components/Header';

// --- Constants & Styles ---
// We define a simple theme object to keep colors consistent
const colors = {
  primary: '#FBB03B',   // Yellow/Orange
  secondary: '#28a745', // Green
  textDark: '#333333',
  textLight: '#6c757d',
  bgLight: '#F8F9FA',
  bgWhite: '#FFFFFF',
  iconBg: '#E6F0FF',    // Light blue for icon background
  iconColor: '#007BFF', // Blue for icons
};

const fonts = {
  body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

// Defining style types helps TypeScript suggest CSS properties
const commonStyles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  button: {
    padding: '10px 24px',
    borderRadius: '5px',
    border: 'none',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'opacity 0.2s',
  },
};

// --- Components ---

// Header extracted to `src/components/Header.tsx`

// 2. Hero Section Component
const HeroSection: React.FC = () => (
  <section style={{ padding: '80px 0', background: colors.bgWhite, position: 'relative', overflow: 'hidden' }}>
    {/* Decorative Background Elements */}
    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '80%', background: '#f0f0f0', transform: 'skewX(-20deg)', zIndex: 0 }} />
    <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '30%', height: '50%', background: '#f0f0f0', transform: 'skewX(-20deg)', zIndex: 0 }} />

    <div style={{ ...commonStyles.container, position: 'relative', zIndex: 1 }}>
      <h1 style={{ fontSize: '48px', fontWeight: 800, color: colors.textDark, marginBottom: '20px' }}>
        Empowering Talents,<br /> One Job at a Time
      </h1>
      <p style={{ fontSize: '18px', color: colors.textLight, marginBottom: '40px', maxWidth: '600px' }}>
        Join the world's largest freelancing community. Find work or hire talent - all in one place.
      </p>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '60px' }}>
        <button style={{ ...commonStyles.button, backgroundColor: colors.primary, color: colors.bgWhite, fontSize: '16px', padding: '12px 30px' }}>
          Sign up as Freelancer
        </button>
        <button style={{ ...commonStyles.button, backgroundColor: colors.secondary, color: colors.bgWhite, fontSize: '16px', padding: '12px 30px' }}>
          Sign up as Employer
        </button>
      </div>
      <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
          alt="Diverse group collaborating"
          style={{ width: '100%', display: 'block' }}
        />
      </div>
      <div style={{ marginTop: '40px' }}>
        <button style={{ ...commonStyles.button, backgroundColor: colors.primary, color: colors.bgWhite, padding: '12px 30px' }}>
          Learn More .....
        </button>
      </div>
    </div>
  </section>
);

// 3. SVG Icons
// These are simple functional components that return JSX
const Icons = {
  Certification: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  ShiftRotation: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Support: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  Global: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

// 4. Feature Card Component
// THIS IS WHERE WE FIX THE ERROR: Define an interface for the props.
interface FeatureCardProps {
  icon: React.ComponentType; // Accepts a component (like Icons.Global)
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div style={{ backgroundColor: colors.bgWhite, padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
    <div style={{ display: 'inline-block', padding: '15px', borderRadius: '10px', backgroundColor: colors.iconBg, marginBottom: '20px' }}>
      {/* We use the capitalized 'Icon' variable to render the component passed in props */}
      <Icon />
    </div>
    <h3 style={{ fontSize: '20px', fontWeight: 700, color: colors.textDark, marginBottom: '15px' }}>{title}</h3>
    <p style={{ color: colors.textLight, lineHeight: '1.6' }}>{description}</p>
  </div>
);

// 5. Why Choose Section Component
const WhyChooseSection: React.FC = () => (
  <section style={{ padding: '80px 0', background: colors.bgLight }}>
    <div style={{ ...commonStyles.container, textAlign: 'center' }}>
      <h2 style={{ fontSize: '36px', fontWeight: 800, color: colors.textDark, marginBottom: '60px' }}>
        Why Choose SkillHive?
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', textAlign: 'left' }}>
        <FeatureCard
          icon={Icons.Certification}
          title="Certification Process and Vetting"
          description="Rigorous vetting and certification for trusted professionals"
        />
        <FeatureCard
          icon={Icons.ShiftRotation}
          title="Shift Rotation"
          description="Seamless shift rotation for 24/7 opportunities."
        />
        <FeatureCard
          icon={Icons.Support}
          title="Resource & Support For Trainers"
          description="Comprehensive resources and support for trainers' success."
        />
        <FeatureCard
          icon={Icons.Global}
          title="Global Opportunities"
          description="Connect with clients and talent from around the world."
        />
      </div>
    </div>
  </section>
);

// 6. Footer Component
const Footer: React.FC = () => (
  <footer style={{ padding: '40px 0', background: colors.bgLight, borderTop: '1px solid #e9ecef' }}>
    <div style={{ ...commonStyles.container }}>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0, marginBottom: '20px', flexWrap: 'wrap' }}>
        {['About Us', 'Contact Support', 'Privacy Policy', 'Terms Of Service'].map((text) => (
          <li key={text} style={{ margin: '0 15px' }}>
            <a href="#" style={{ textDecoration: 'none', color: colors.textLight, fontSize: '14px', fontWeight: 500 }}>
              {text}
            </a>
          </li>
        ))}
      </ul>
      <p style={{ textAlign: 'center', color: colors.textLight, fontSize: '14px' }}>
        © 2024 SkillHive. All rights reserved.
      </p>
    </div>
  </footer>
);

// 7. Main Page Component
const LandingPage: React.FC = () => (
  <div style={{ fontFamily: fonts.body, overflowX: 'hidden' }}>
    <Header />
    <HeroSection />
    <WhyChooseSection />
    <Footer />
  </div>
);

export default LandingPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const ACCENT = '#FFBB2E';
  const navigate = useNavigate();
  return (
    <header style={{
      background: '#fff',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      padding: '0 44px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
      position: 'sticky',
      top: 0,
      zIndex: 30
    }}>
      {/* Brand on the left */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <span style={{ color: ACCENT, fontWeight: 800, fontSize: 20 }}>ForgeKin</span>
      </div>

      {/* Nav pushed to the right, next to avatar */}
      <nav style={{ display: 'flex', gap: 18, color: '#666', marginLeft: 'auto', alignItems: 'center' }}>
        <a href="#" style={{ textDecoration: 'none', color: '#666' }}>About</a>
        <a href="#" style={{ textDecoration: 'none', color: '#666' }}>Hire Talent</a>
        <a href="#" style={{ textDecoration: 'none', color: ACCENT, fontWeight: 700 }}>Find Jobs</a>

        {/* Avatar / user area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginLeft: 18 }}>
          
          <button
            onClick={() => { navigate('/signup'); }}
            style={{
              background: ACCENT,
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '10px 20px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
              textTransform: 'uppercase',
              letterSpacing: 0.6
            }}
            aria-label="Get started"
          >
            GET STARTED
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

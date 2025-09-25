import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      padding: '3rem 1rem 2rem',
      background: '#000',
      color: '#fff',
      borderTop: '1px solid #333'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          {/* Left Side - Copyright */}
          <div style={{
            textAlign: window.innerWidth >= 768 ? 'left' : 'center'
          }}>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              90TUN
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: '#ccc'
            }}>
              © 2025 Akande Ayomidotun. All rights reserved.
            </div>
          </div>

          {/* Right Side - Back to Top */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <button
              onClick={scrollToTop}
              style={{
                background: 'transparent',
                border: '1px solid #666',
                color: '#ccc',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.9rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = '#000';
                e.target.style.borderColor = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#ccc';
                e.target.style.borderColor = '#666';
              }}
            >
              ↑ Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Divider */}
        <div style={{
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '1px solid #333',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '0.8rem',
            color: '#999'
          }}>
            Built with React & styled with passion for clean design
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
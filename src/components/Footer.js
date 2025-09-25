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
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2rem'
        }}>
          {/* Brand and Copyright */}
          <div>
            <div style={{
              fontSize: 'clamp(1rem, 3vw, 1.2rem)',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>
              90TUN
            </div>
            <div style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              color: '#ccc',
              lineHeight: '1.4'
            }}>
              © 2025 Akande Ayomidotun. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(1rem, 3vw, 2rem)',
            fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
          }}>
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#ccc',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  padding: '0.5rem'
                }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = '#ccc'}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              style={{
                background: 'transparent',
                border: '1px solid #666',
                color: '#ccc',
                padding: 'clamp(0.5rem, 2vw, 0.8rem) clamp(1rem, 3vw, 1.5rem)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
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
            fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
            color: '#999',
            lineHeight: '1.4'
          }}>
            Built with React & styled with passion for clean design
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
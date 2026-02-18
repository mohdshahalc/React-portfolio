import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem 0',
            marginTop: '4rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'var(--text-light)',
            fontSize: '0.9rem'
        }}>
            <p>&copy; {new Date().getFullYear()} Muhammad Shahal. All rights reserved.</p>
            <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                <a href="https://www.linkedin.com/in/muhammad-shahal-30736a351/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>LinkedIn</a>
                <a href="https://github.com/mohdshahalc" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>GitHub</a>
                <a href="mailto:shahal.c077@gmail.com" style={{ color: 'var(--text-light)', textDecoration: 'none' }}>Email</a>
            </div>
        </footer>
    );
};

export default Footer;

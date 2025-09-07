import React, { useState } from "react";
import "./Header.css"; // 👈 we'll create a CSS file for styles

export default function Header({ logo = null, links = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Left: logo + nav */}
          <div className="logo-nav">
            <a href="/" className="logo">
              {logo || <span className="logo-text">This header is separate app</span>}
            </a>

            <nav className="nav desktop-nav">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="nav-link">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: actions */}
          <div className="actions">
            <div className="auth desktop-auth">
              <a href="/signin" className="signin">Sign in</a>
              <a href="/signup" className="signup">Get started</a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="menu-btn"
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="mobile-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="mobile-link">
              {l.label}
            </a>
          ))}
          <div className="mobile-auth">
            <a href="/signin" className="signin">Sign in</a>
            <a href="/signup" className="signup">Get started</a>
          </div>
        </div>
      )}
    </header>
  );
}

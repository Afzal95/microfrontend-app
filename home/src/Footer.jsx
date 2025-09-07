import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Logo / Brand */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            AcmeCorp
          </a>
          <p className="footer-desc">
            Building modern web solutions with love 💜
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <div className="footer-col">
            <h4>Company</h4>
            <a href="/about">About</a>
            <a href="/careers">Careers</a>
            <a href="/blog">Blog</a>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <a href="/docs">Docs</a>
            <a href="/support">Support</a>
            <a href="/privacy">Privacy</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@acme.com">Email</a>
            <a href="/contact">Contact Form</a>
            <a href="/locations">Locations</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://twitter.com" aria-label="Twitter">🐦</a>
          <a href="https://linkedin.com" aria-label="LinkedIn">💼</a>
          <a href="https://github.com" aria-label="GitHub">🐙</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AK projects. All rights reserved.</p>
        <p>This is a separate footer app.</p>
      </div>
    </footer>
  );
}

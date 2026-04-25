import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <button
            type="button"
            className="mobile-icon-btn nav-hamburger"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>

          <a href="#" className="nav-logo" aria-label="GWM Solutions">
            <img src="./brand logo/logo.png" alt="GWM Solutions" />
          </a>

          <ul className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <li>
              <a href="#" className="active" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#calculator" onClick={closeMenu}>
                Calculator
              </a>
            </li>
            <li>
              <a href="#industries" onClick={closeMenu}>
                Industries
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-phone">
            <div className="nav-phone-icon">
              <i className="fa-solid fa-phone-volume"></i>
            </div>
            <div className="nav-phone-text">
              <span>Have Questions?</span>
              <strong>+92 313 3456789</strong>
            </div>
          </div>

          <a href="#contact" className="mobile-icon-btn nav-search" aria-label="Contact">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
      </header>

      <div className="sticky-right-btns">
        <a href="https://wa.me/923133456789" target="_blank" rel="noreferrer" className="sticky-btn whatsapp">
          <span className="sbtn-icon">
            <i className="fa-brands fa-whatsapp"></i>
          </span>
          <span className="sbtn-text">WhatsApp</span>
        </a>
        <a href="tel:+923133456789" className="sticky-btn phone">
          <span className="sbtn-icon">
            <i className="fa-solid fa-phone"></i>
          </span>
          <span className="sbtn-text">Call Us</span>
        </a>
        <a href="mailto:info@gwmsolutions.com" className="sticky-btn email">
          <span className="sbtn-icon">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <span className="sbtn-text">Email Us</span>
        </a>
      </div>
    </>
  )
}


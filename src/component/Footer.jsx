export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="ftr-logo" aria-label="GWM Solutions">
              <img src="./brand logo/logo1.png" alt="GWM Solutions" />
            </a>
            <p>
              GWM Solutions simplifies tax and compliance for individuals, startups, and businesses across Pakistan. Trusted
              since 2014.
            </p>
            <div className="ftr-socials">
              <a href="#" className="ftr-social" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="ftr-social" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="ftr-social" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="ftr-social" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <nav className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">
                  <i className="fa-solid fa-chevron-right"></i> Home
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="fa-solid fa-chevron-right"></i> Services
                </a>
              </li>
              <li>
                <a href="#calculator">
                  <i className="fa-solid fa-chevron-right"></i> Tax Calculator
                </a>
              </li>
              <li>
                <a href="#industries">
                  <i className="fa-solid fa-chevron-right"></i> Industries
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="fa-solid fa-chevron-right"></i> About Us
                </a>
              </li>
            </ul>
          </nav>

          <nav className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="#services">
                  <i className="fa-solid fa-chevron-right"></i> Income Tax Filing
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="fa-solid fa-chevron-right"></i> Corporate Tax
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="fa-solid fa-chevron-right"></i> Withholding Tax
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="fa-solid fa-chevron-right"></i> Sales Tax (GST)
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="fa-solid fa-chevron-right"></i> FBR Audit Help
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer-col">
            <h4>Get In Touch</h4>
            <div className="ftr-contact-item">
              <div className="ftr-contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="ftr-contact-info">
                <span>Phone</span>
                <a href="tel:+923133456789">+92 313 3456789</a>
              </div>
            </div>
            <div className="ftr-contact-item">
              <div className="ftr-contact-icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="ftr-contact-info">
                <span>Email</span>
                <a href="mailto:info@gwmsolutions.com">info@gwmsolutions.com</a>
              </div>
            </div>
            <div className="ftr-contact-item">
              <div className="ftr-contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="ftr-contact-info">
                <span>Office</span>
                <p>
                  Office No. 12, Business Hub,
                  <br />
                  Karachi, Pakistan
                </p>
              </div>
            </div>
          </div>

          <div className="ftr-newsletter">
            <h4>Stay Updated</h4>
            <p>Get the latest FBR tax updates, deadlines, and compliance tips in your inbox.</p>
            <div className="ftr-newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="button">Subscribe</button>
            </div>
            <div className="ftr-note">No spam. Unsubscribe anytime.</div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="container">
        <div className="footer-bottom">
          <p>
            © 2025 <strong>GWM Solutions</strong>. All rights reserved. FBR Registered Tax Consultancy.
          </p>
          <div className="ftr-bottom-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


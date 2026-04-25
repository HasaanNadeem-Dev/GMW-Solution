export default function WhyUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="why-grid reveal-split">
          <div>
            <div className="section-tag">Our Advantage</div>
            <h2 className="section-title">
              Why Choose <span className="grad">GWM Solutions</span>
            </h2>
            <p className="section-sub">
              We combine certified expertise with technology to deliver accurate, reliable, and stress-free tax solutions.
            </p>
            <div className="why-features">
              <div className="why-item">
                <div className="why-icon">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <div className="why-text">
                  <h3>Certified Tax Experts</h3>
                  <p>
                    Our team holds ICAP and FBR certifications with over 10 years of combined experience in tax law and
                    compliance.
                  </p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">
                  <i className="fa-solid fa-microchip"></i>
                </div>
                <div className="why-text">
                  <h3>Technology-Driven Approach</h3>
                  <p>We use AI-powered tools and automated systems to ensure precision in every calculation and filing.</p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <div className="why-text">
                  <h3>100% Confidential</h3>
                  <p>
                    Your financial data is protected with bank-grade encryption. Your information never leaves our secure
                    systems.
                  </p>
                </div>
              </div>
              <div className="why-item">
                <div className="why-icon">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className="why-text">
                  <h3>Year-Round Support</h3>
                  <p>
                    We don't disappear after filing season. Our team is available throughout the year for all your compliance
                    needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="why-cta-row" style={{ marginTop: 32 }}>
              <a href="#contact" className="btn-primary">
                Get Started Today <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#services" className="btn-outline">
                View All Services
              </a>
            </div>
          </div>

          <div className="why-visual">
            <div className="why-visual-title">Our Track Record</div>
            <div className="why-visual-sub">Numbers that prove our commitment to excellence.</div>
            <div className="why-stats">
              <div className="why-stat-item">
                <div className="why-stat-label">Clients Served</div>
                <div className="why-stat-val">5,200+</div>
              </div>
              <div className="why-stat-item">
                <div className="why-stat-label">Tax Returns Filed</div>
                <div className="why-stat-val">18,000+</div>
              </div>
              <div className="why-stat-item">
                <div className="why-stat-label">Client Satisfaction Rate</div>
                <div className="why-stat-val">98.3%</div>
              </div>
              <div className="why-stat-item">
                <div className="why-stat-label">Average Tax Savings</div>
                <div className="why-stat-val">PKR 85K+</div>
              </div>
              <div className="why-stat-item">
                <div className="why-stat-label">Years of Experience</div>
                <div className="why-stat-val">10+ Years</div>
              </div>
            </div>
            <div className="why-cta-row">
              <a href="#contact" className="btn-white">
                Book Consultation
              </a>
              <a href="#about" className="btn-ghost-white">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


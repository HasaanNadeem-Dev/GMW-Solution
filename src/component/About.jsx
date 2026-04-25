export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid reveal-split">
          <div className="about-visual-wrap">
            <div className="about-main-card">
              <div className="about-logo-circle">
                <img src="./brand logo/gmw solution.png" alt="GWM Solutions" />
              </div>
              <div className="about-firm-name">GWM Solutions</div>
              <div className="about-tagline">Your Trusted Tax Partner Since 2014</div>
              <div className="about-stats-grid">
                <div className="about-stat">
                  <span className="about-stat-val">10+</span>
                  <span className="about-stat-label">Years Experience</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-val">5K+</span>
                  <span className="about-stat-label">Happy Clients</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-val">18K+</span>
                  <span className="about-stat-label">Returns Filed</span>
                </div>
              </div>
            </div>
            <div className="abt-chip abt-chip-1">
              <i className="fa-solid fa-shield-halved"></i> FBR Registered
            </div>
            <div className="abt-chip abt-chip-2">
              <i className="fa-solid fa-star"></i> 98% Satisfaction
            </div>
          </div>

          <div className="about-content">
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title">
              About <span className="grad">GWM Solutions</span>
            </h2>
            <p className="about-body">
              GWM Solutions is a premier tax consultancy firm based in Karachi, Pakistan. Since 2014, we have been empowering
              businesses and individuals to navigate the complexities of Pakistan's tax system with confidence. Our team of
              certified professionals combines deep regulatory knowledge with innovative technology to deliver accurate, timely,
              and stress-free tax solutions.
            </p>
            <div className="about-checklist">
              <div className="abt-check">
                <i className="fa-solid fa-circle-check"></i> ICAP Certified Tax Professionals on staff
              </div>
              <div className="abt-check">
                <i className="fa-solid fa-circle-check"></i> FBR Registered Consultancy Firm
              </div>
              <div className="abt-check">
                <i className="fa-solid fa-circle-check"></i> Always updated with latest Finance Acts
              </div>
              <div className="abt-check">
                <i className="fa-solid fa-circle-check"></i> Dedicated client portal for document management
              </div>
              <div className="abt-check">
                <i className="fa-solid fa-circle-check"></i> Strict data confidentiality &amp; security protocols
              </div>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">
                Book Consultation <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="center">
          <div className="section-tag">Our Process</div>
          <h2 className="section-title">
            How It <span className="grad">Works</span>
          </h2>
          <p className="section-sub">
            A simple, transparent process that gets your tax matters sorted quickly and professionally.
          </p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-num">
              <span className="step-icon">
                <i className="fa-solid fa-clipboard-list"></i>
              </span>
            </div>
            <div className="step-text">
              <h3 className="step-title">Initial Consultation</h3>
              <p className="step-desc">
                Book a free consultation. We assess your tax situation, goals, and requirements in a confidential session.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-num">
              <span className="step-icon">
                <i className="fa-regular fa-folder-open"></i>
              </span>
            </div>
            <div className="step-text">
              <h3 className="step-title">Document Collection</h3>
              <p className="step-desc">
                We guide you on exactly what documents are needed — salary slips, bank statements, business records — no guesswork.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-num">
              <span className="step-icon">
                <i className="fa-solid fa-gears"></i>
              </span>
            </div>
            <div className="step-text">
              <h3 className="step-title">Expert Processing</h3>
              <p className="step-desc">
                Our certified tax professionals prepare and review all filings with precision, ensuring full FBR compliance.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-num">
              <span className="step-icon">
                <i className="fa-solid fa-check"></i>
              </span>
            </div>
            <div className="step-text">
              <h3 className="step-title">File &amp; Confirm</h3>
              <p className="step-desc">
                We submit your return on your behalf and provide you with all acknowledgement receipts and documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

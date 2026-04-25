export default function ContactCTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>
              Ready to Simplify
              <br />
              Your Taxes?
            </h2>
            <p>
              Book a free, no-obligation consultation with our certified tax experts today. Let us handle the complexity while
              you focus on what matters most.
            </p>
          </div>
          <div className="cta-actions">
            <div className="cta-btns">
              <a href="tel:+923133456789" className="btn-white">
                <i className="fa-solid fa-phone"></i> Call Us Now
              </a>
              <a href="mailto:info@gwmsolutions.com" className="btn-ghost-white">
                <i className="fa-regular fa-envelope"></i> Send Email
              </a>
            </div>
            <div className="cta-note">
              <i className="fa-solid fa-circle-check"></i>
              Free consultation &nbsp;·&nbsp; No hidden charges &nbsp;·&nbsp; 100% Confidential
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


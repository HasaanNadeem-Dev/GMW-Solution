export default function Testimonials() {
  return (
    <section className="section alt" style={{ paddingTop: 60 }} id="testimonials">
      <div className="container">
        <div className="center" style={{ marginBottom: 0 }}>
          <div className="section-tag">Testimonials</div>
          <h2 className="section-title">
            What Our Clients <span className="grad">Say About Us</span>
          </h2>
          <p className="section-sub">
            Hear from the businesses and individuals who trust GWM Solutions with their tax needs.
          </p>
        </div>
        <div className="testimonials-grid">
          <div className="testi-card">
            <div className="testi-quote-icon">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p className="testi-text">
              GWM Solutions transformed how we handle our corporate tax filing. Their team is responsive, professional, and
              incredibly knowledgeable about FBR regulations.
            </p>
            <div className="testi-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="testi-author">
              <div className="testi-avatar">AK</div>
              <div>
                <div className="testi-name">Ahmed Karimi</div>
                <div className="testi-role">CFO, Technobridge Pvt. Ltd</div>
              </div>
            </div>
          </div>

          <div className="testi-card featured">
            <div className="testi-quote-icon">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p className="testi-text">
              Filing my income tax return used to be a nightmare. With GWM, it's completely stress-free. They handle everything
              from withholding tax to salary slabs — and always on time.
            </p>
            <div className="testi-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: 'rgba(255,255,255,.15)' }}>
                SR
              </div>
              <div>
                <div className="testi-name">Sara Raza</div>
                <div className="testi-role">Owner, Raza Textiles</div>
              </div>
            </div>
          </div>

          <div className="testi-card">
            <div className="testi-quote-icon">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <p className="testi-text">
              Best tax advisors in Karachi, hands down. Their real estate tax guidance saved us hundreds of thousands in capital
              gains. Highly recommended for property investors.
            </p>
            <div className="testi-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <div className="testi-author">
              <div className="testi-avatar">ZM</div>
              <div>
                <div className="testi-name">Zubair Malik</div>
                <div className="testi-role">Director, Malik Properties</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


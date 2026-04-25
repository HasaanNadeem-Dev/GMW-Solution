export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <i className="fa-solid fa-location-dot"></i>
        <span>Office No. 12, Business Hub, Karachi, Pakistan</span>
      </div>
      <div className="topbar-right">
        <div className="topbar-email">
          <i className="fa-regular fa-envelope"></i>
          <span>info@gwmsolutions.com</span>
        </div>
        <div className="topbar-socials">
          <a href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  )
}


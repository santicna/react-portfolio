import { faGithub, faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import './index.scss'

const Topbar = () => {
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">Santi</div>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink exact="true" activeclassname="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <i className="icon">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/scartagena147/">
              <FontAwesomeIcon icon={faLinkedin} color="#4D4D4E" className="fa-icon" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/santicna">
              <FontAwesomeIcon icon={faGithub} color="#4D4D4E" className="fa-icon" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://wa.me/+541158647220">
              <FontAwesomeIcon icon={faWhatsapp} color="#4D4D4E" className="fa-icon" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://t.me/Themilkman">
              <FontAwesomeIcon icon={faTelegram} color="#4D4D4E" className="fa-icon" />
            </a>
          </i>
        </ul>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  )
}

export default Topbar

import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.linkedin.com/in/jannat349/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/jannat-349" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.facebook.com/jannatul.ferdoush.1217" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/00_magical_witch" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
            <div className="copyright">
                <p>&copy; 2026 Jannatul Ferdoush Jannati. All rights reserved.</p>
            </div>
            <div className="contact-info">
                <p>
                    <a href="tel:+19453832463" className="contact-link">
                        <i className="fas fa-phone contact-icon phone-icon"></i> Phone: +1 (945) 383-2463
                    </a>
                </p>
                <p>
                    <a href="mailto:jannatul.6249@gmail.com" className="contact-link">
                        <i className="fas fa-envelope contact-icon email-icon"></i> Email: jannatul.6249@gmail.com
                    </a>
                </p>
                <p>
                    <a href="https://www.google.com/maps/search/?api=1&query=Texas%2C%20United+States" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="fas fa-map-marker-alt contact-icon address-icon"></i> Address: Texas, United States
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="logo-container">
            <Image src="/images/logo.png" alt="ARLinks Logo" width={120} height={35} style={{ height: '35px', width: 'auto' }} />
          </Link>
          <p>Connecting you to the world with affordable, premium flights. Fly safely, travel comfortably.</p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="social-icon" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="social-icon" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="social-icon" aria-label="Linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" className="social-icon" aria-label="Youtube"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/travel">Travel</Link></li>
            <li><Link href="/opportunities">Opportunities</Link></li>
            <li><Link href="/engagement">Engagement</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Opportunities</h5>
          <ul>
            <li><Link href="/opportunities#careers">Careers</Link></li>
            <li><Link href="/opportunities#invest">Investor Relations</Link></li>
            <li><Link href="/opportunities#partnerships">Partnerships</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><Link href="/services#flight-booking">Flight Booking</Link></li>
            <li><Link href="/services#hotel-reservations">Hotel Booking</Link></li>
            <li><Link href="/services#travel-insurance">Travel Insurance</Link></li>
            <li><Link href="/services#airport-transfers">Airport Transfers</Link></li>
            <li><Link href="/services#holiday-packages">Holiday Packages</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Support</h5>
          <ul>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/contact#faq">Help &amp; FAQs</Link></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-col" style={{ gridColumn: 'span 1' }}>
          <h5>Contact Us</h5>
          <ul className="contact-info">
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>+234 800 123 4567</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>support@arlinks.com</span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>Airport Road, Ikeja, Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ARLinks. All rights reserved.</p>
        <p>Designed with excellence for a seamless traveler experience.</p>
      </div>
    </footer>
  );
}

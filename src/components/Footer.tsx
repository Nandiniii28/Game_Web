import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4">
          {/* <div className="col-md-4 px-3">
            <img 
              src="/logo.webp" 
              alt="Finunique Logo" 
              height="64"
              className="mb-3"
            />
            <div className="d-flex flex-column gap-2">
              <p className="d-flex gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>P.NO 97, Dakshinpuri Shri Kishanpura, Opposite to Somya Sky Apartments, Jagatpura, Jaipur, Rajasthan - 302017</span>
              </p>
              <p className="d-flex align-items-center gap-2">
                <Mail size={20} />
                <a href="mailto:Info@finunique.in">Info@finunique.in</a>
              </p>
              <p className="d-flex align-items-center gap-2">
                <Phone size={20} />
                <a href="tel:7297026119">7297026119</a>
              </p>
            </div>
          </div>
          <div className="col-md-2 px-3">
            <h4 className="h5 mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/responsible-gaming">Responsible Gaming</Link></li>
            </ul>
          </div>
          <div className="col-md-2 px-3">
            <h4 className="h5 mb-3">Legal</h4>
            <ul className="list-unstyled">
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/refund">Refund Policy</Link></li>
            </ul>
          </div>
          <div className="col-md-4 px-3">
            <h4 className="h5 mb-3">Connect With Us</h4>
            <div className="d-flex gap-3">
              <a href="#" className="text-decoration-none">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-decoration-none">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-decoration-none">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-decoration-none">
                <Mail size={24} />
              </a>
            </div>
          </div> */}
          <div className="col-md-2 px-3">
            <div className="logo_section">
              <img src="/logo.webp" alt="Finunique Logo" height="64" className="mb-3" />
            </div>
          </div>
          <div className="col-md-4 px-3">
            <div className="office_address">
              <p><i className="bi bi-geo-fill"></i> Office</p>
              <span>P.NO 97, Dakshinpuri Shri Kishanpura, Opposite to Somya Sky Apartments, Jagatpura, Jaipur, Rajasthan - 302017</span>
            </div>
          </div>
          <div className="col-md-3 px-3">
            <div className="link_section">
              <h4 className="h5 mb-3">Quick Links</h4>
              <ul className="list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/responsible-gaming">Responsible Gaming</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 px-3">
            <div className="social_links">
              <h4 className="h5 mb-3">Connect With Us</h4>
              <div className="d-flex gap-3">
                <a href="https://www.facebook.com/finuniquegamezone" target="_blank" className="text-decoration-none">
                  <Facebook size={24} />
                </a>
                <a href="https://twitter.com/finuniquegamezone" target="_blank" className="text-decoration-none">
                  <Twitter size={24} />
                </a>
                <a href="https://www.instagram.com/finuniquegamezone/" target="_blank" className="text-decoration-none">
                  <Instagram size={24} />
                </a>
                <a href="mailto:Info@finunique.in" target="_blank" className="text-decoration-none">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top border-secondary mt-4 pt-4 text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Finunique small pvt ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
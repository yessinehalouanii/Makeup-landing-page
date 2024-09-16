import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#FFDB58', padding: '2rem 1rem', color: 'black', textAlign: 'left', marginTop: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        
        {/* O'BARBERSHOP Section */}
        <div>
          <h3>O'BARBERSHOP</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Contact Us</li>
          </ul>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <a href="#" style={{ color: 'black' }}><FaFacebook size={24} /></a>
            <a href="#" style={{ color: 'black' }}><FaInstagram size={24} /></a>
            <a href="#" style={{ color: 'black' }}><FaTwitter size={24} /></a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3>Links</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>All Products</a></li>
            <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>All Collections</a></li>
            <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Find a Barber</a></li>
            <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Our Story</a></li>
            <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Site Map</a></li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h3>Our Services</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>My Account</a></li>
            <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Order Tracking</a></li>
            <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Delivery</a></li>
            <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Returns and Exchanges</a></li>
          </ul>
        </div>

        {/* Professionals Section */}
        <div>
          <h3>Professionals</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>O'Barbershop Pro</a></li>
            <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Become a Partner</a></li>
            <li><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Glossary</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3>Newsletter</h3>
          <form style={{ display: 'flex', alignItems: 'center' }}>
            <input type="email" placeholder="Your email address" style={{ padding: '0.5rem', flex: '1' }} />
            <button type="submit" style={{ padding: '0.5rem', backgroundColor: 'black', color: '#FFDB58', border: 'none' }}>Ok</button>
          </form>
          <div style={{ marginTop: '1rem' }}>
            <img src="https://via.placeholder.com/80x20" alt="Verified Reviews" /> {/* Replace with actual image */}
          </div>
        </div>
        
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>&copy; 2024 O'Barbershop. All rights reserved.</p>
        <p>Terms and Conditions - Privacy Policy - Legal Notices</p>
      </div>
    </footer>
  );
};

export default Footer;

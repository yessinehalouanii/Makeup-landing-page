"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#FFDB58', // Mustard background color
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    }}>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/images/poppps.jpg" alt="Logo" width={50} height={50} style={{ borderRadius: '50%' }} />
        <div style={{
          marginLeft: '1rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          color: 'black', // Adjusted color for text
        }}>
          The Perfect Barber
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link href="/pricing" passHref>
          <button style={{
            background: 'black',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            margin: '0 1rem',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', // Black shadow
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.6)'; // Black shadow on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)'; // Black shadow on leave
            }}
          >
            Pricing
          </button>
        </Link>
        <Link href="/pages/about" passHref>
          <button style={{
            background: 'black',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            margin: '0 1rem',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', // Black shadow
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.6)'; // Black shadow on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)'; // Black shadow on leave
            }}
          >
            About Us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

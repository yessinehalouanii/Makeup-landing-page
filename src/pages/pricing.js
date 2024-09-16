// pages/pricing.js
import React from 'react';
import CarCard from '@/app/CarCard';
import Navbar from '@/app/Navbar';
import Footer from '@/app/Footer';

const PricingPage = () => {
  const cars = [
    {
      image: '/images/hh.jpg',
      title: 'Hair trimming',
      pricePerDay: 20,
      
    },
    {
      image: '/images/dd.jpg',
      title: 'Hair and beard trimming',
      pricePerDay: 30,
      
    },
    {
      image: '/images/ss.jpg',
      title: 'Hair coloring',
      pricePerDay: 90,

    }
  ];

  return (
    <div style={{ backgroundColor: '#FFDB58', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Offers</h1>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </main>
      <div style={{ backgroundColor: 'black', height: '2px', width: '100%' }}></div>
      <Footer />
    </div>
  );
};

export default PricingPage;

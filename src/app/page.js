import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CarSection from './CarSection';
import CarBox from './CarBox';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#FFDB58', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <CarSection
          image="/images/ao.jpg"
          description="Every man needs a clean haircut now and then to look fresh"
        />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
          <CarBox image="/images/GGG.jpg" text="Nowadays cutting hair is an art, not only a job" />
          <CarBox image="/images/ii.jpg" text="A beard is the beauty of male, so choose your barber wisely" />
        </div>
        
        {/* Added Image Section with Description */}
        <div style={{ position: 'relative', margin: '2rem 0' }}>
          <img
            src="/images/tr.jpg"  // Replace with your image path
            alt="Full width image"
            style={{ width: '100%', height: '600px', objectFit: 'cover' }}  // Full width and desired height
          />
          <div style={{
            position: 'absolute',
            top: '40%',  // Center vertically
            left: '3%',  // Align to the left with some padding
            transform: 'translateY(-50%)',  // Adjust for exact centering
            padding: '1rem 2rem',
            borderRadius: '10px',
            color: '#FFDB58',
            maxWidth: '40%',  // Control width of the description box
            fontSize: '1.2rem',
            lineHeight: '1.5',
          }}>
            <p>
              We offer a wide range of pricing and offers to make our clients satisfied all year round, so stay stress-free and enjoy your cut.
            </p>
          </div>
        </div>
      </main>
      <Footer style={{ width: '100%' }} />

    </div>
  );
};

export default HomePage;

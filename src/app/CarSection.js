import React from 'react';

const CarSection = ({ image, description }) => {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '15px',
      padding: '2rem',
      margin: '2rem 0',
      maxWidth: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px',
      color: 'rgba(255, 255, 255, 0.85)',
      border: '5px solid black',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',  
    }}>
      <div style={{
        position: 'absolute',
        top: '44%',
        left: '80%',
        right: '1%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        borderRadius: '5px',
        padding: '0.5rem 1rem',
        maxWidth: '60%',
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        background: 'linear-gradient(103deg, #FFDB58 800%, rgba(0, 0, 0, 0.8) 70%, #000000 100%)', // Adjusted gradient for a more controlled fade
        WebkitBackgroundClip: 'text',
        color: 'transparent',
      }}>
        <p style={{ margin: 0 }}>{description}</p>
      </div>
    </div>
  );
};

export default CarSection;

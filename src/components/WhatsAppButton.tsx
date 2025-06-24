import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+5491173635882'; // Cambiar por tu número
  const message = encodeURIComponent('Hola, quisiera recibir información.');

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        zIndex: 1000,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1ebe57')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25D366')}
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;

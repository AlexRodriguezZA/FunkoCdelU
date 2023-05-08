import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/xxxxxxxxxx', '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '9999',
      }}
    >
      <button
        style={{
          width: "45px",
          height: "45px",
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#fff',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 4px rgba(0, 0, 0, 0.3)"
        }}
        onClick={handleWhatsAppClick}
      >
      <FaWhatsapp style={{color: "white", fontSize: "24px",textAlign: "center"}}/>
      </button>
    </div>
  );
};

export default WhatsAppButton;

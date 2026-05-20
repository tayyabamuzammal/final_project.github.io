import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BookingSuccess() {
  const [token, setToken] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const randomToken = 'MRA' + Math.floor(1000 + Math.random() * 9000);
    setToken(randomToken);

    const year = 2026;
    const month = 5; // June
    const day = Math.floor(Math.random() * 30) + 1;
    const hour = Math.floor(Math.random() * 8) + 9;
    const minute = Math.floor(Math.random() * 4) * 15;

    const randomDate = new Date(year, month, day, hour, minute);

    const formattedTime = randomDate.toLocaleTimeString('en-PK', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
    const formattedDate = randomDate.toLocaleDateString('en-PK', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    setTime(`${formattedDate}, ${formattedTime}`);
  }, []);

  return (
    <div style={{textAlign:'center', padding:'80px 20px'}}>
      <h2 style={{color:'#4caf50', fontSize:'32px', marginBottom:'20px'}}>✓ Booking Confirmed!</h2>
      <p style={{fontSize:'18px', marginBottom:'30px'}}>Your appointment has been booked successfully.</p>

      <div style={{maxWidth:'400px', margin:'0 auto', padding:'30px', border:'2px solid #d32f2f', borderRadius:'10px', background:'#fff5f5'}}>
        <h3 style={{color:'#d32f2f', marginBottom:'15px'}}>Your Token</h3>
        <p style={{fontSize:'36px', fontWeight:'bold', color:'#d32f2f', margin:'10px 0'}}>{token}</p>
        
        <h4 style={{marginTop:'20px', marginBottom:'5px'}}>Appointment Time</h4>
        <p style={{fontSize:'18px'}}>{time}</p>
      </div>

      <Link to="/" style={{display:'inline-block', marginTop:'30px', padding:'12px 25px', background:'#d32f2f', color:'white', textDecoration:'none', borderRadius:'5px'}}>
        Back to Home
      </Link>
    </div>
  );
}

export default BookingSuccess; // <-- Ye line zaroori hai
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BookingSuccess() {
  const [step, setStep] = useState('form'); // form, loading, success
  const [token, setToken] = useState('');
  const [time, setTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    cnic: '',
    phone: '',
    email: '',
    age: '',
    department: 'MRI',
    appointmentDate: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Form input handle
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // Backend me save + token generate
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!formData.name || !formData.cnic || !formData.appointmentDate) {
      setError('Name, CNIC aur Date zaroori hai');
      return;
    }
    
    setError('');
    setStep('loading');
    
    try {
      // Backend ko data bhejo
      const res = await fetch('http://localhost:3000/api/appointment/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await res.json();
      
      if(!res.ok) {
        setError(result.message || 'Booking failed');
        setStep('form');
        return;
      }
      
      // Success: Token + Time generate karo
      const randomToken = 'MRA' + Math.floor(1000 + Math.random() * 9000);
      setToken(randomToken);
      
      const date = new Date(formData.appointmentDate);
      const formattedTime = date.toLocaleTimeString('en-PK', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
      const formattedDate = date.toLocaleDateString('en-PK', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      setTime(`${formattedDate}, ${formattedTime}`);
      
      setStep('success');
      
    } catch(err) {
      setError('Server not found. Backend check karo port 3000');
      setStep('form');
      console.error(err);
    }
  };

  // Loading state
  if(step === 'loading') {
    return (
      <div style={{textAlign:'center', padding:'100px 20px'}}>
        <h2 style={{color:'#d32f2f'}}>Booking in progress...</h2>
        <p>Please wait</p>
      </div>
    );
  }

  // Success state - ye wala page show hoga
  if(step === 'success') {
    return (
      <div style={{textAlign:'center', padding:'80px 20px'}}>
        <h2 style={{color:'#4caf50', fontSize:'32px', marginBottom:'20px'}}>✓ Booking Confirmed!</h2>
        <p style={{fontSize:'18px', marginBottom:'30px'}} Appoinment booked></p>

        <div style={{maxWidth:'400px', margin:'0 auto', padding:'30px', border:'2px solid #d32f2f', borderRadius:'10px', background:'#fff5f5'}}>
          <h3 style={{color:'#d32f2f', marginBottom:'15px'}}>Your Token</h3>
          <p style={{fontSize:'36px', fontWeight:'bold', color:'#d32f2f', margin:'10px 0'}}>{token}</p>
          
          <h4 style={{marginTop:'20px', marginBottom:'5px'}}>Name</h4>
          <p style={{fontSize:'18px'}}>{formData.name}</p>
          
          <h4 style={{marginTop:'15px', marginBottom:'5px'}}>CNIC</h4>
          <p style={{fontSize:'18px'}}>{formData.cnic}</p>
          
          <h4 style={{marginTop:'15px', marginBottom:'5px'}}>Appointment Time</h4>
          <p style={{fontSize:'18px'}}>{time}</p>
          
          <h4 style={{marginTop:'15px', marginBottom:'5px'}}>Department</h4>
          <p style={{fontSize:'18px'}}>{formData.department}</p>
        </div>

        <p style={{marginTop:'20px', color:'gray'}}> </p>
        
        <Link to="/" style={{display:'inline-block', marginTop:'30px', padding:'12px 25px', background:'#d32f2f', color:'white', textDecoration:'none', borderRadius:'5px'}}>
          Back to Home
        </Link>
      </div>
    );
  }

  // Form state - ye pehle show hoga
  return (
    <div style={{maxWidth:'500px', margin:'40px auto', padding:'20px'}}>
      <h2 style={{color:'#d32f2f', textAlign:'center', marginBottom:'30px'}}>Book Appointment</h2>
      
      {error && (
        <div style={{background:'red', color:'white', padding:'12px', borderRadius:'6px', marginBottom:'20px', textAlign:'center'}}>
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} style={{display:'grid', gap:'15px'}}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{padding:'12px', border:'1px solid #ccc', borderRadius:'6px', fontSize:'16px'}}
        />
        
        <input
          type="text"
          name="cnic"
          placeholder="CNIC 35202-1000083-3"
          value={formData.cnic}
          onChange={handleChange}
          required
          style={{padding:'12px', border:'1px solid #ccc', borderRadius:'6px', fontSize:'16px'}}
        />
        
        <input
          type="tel"
          name="phone"
          placeholder="Phone 0300-1234567"
          value={formData.phone}
          onChange={handleChange}
          style={{padding:'12px', border:'1px solid #ccc', borderRadius:'6px', fontSize:'16px'}}
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{padding:'12px', border:'1px solid #ccc', borderRadius:'6px', fontSize:'16px'}}
        />
        
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          style={{padding:'12px', border:'1px solid #ccc', borderRadius:'6px', fontSize:'16px'}}
        />
        
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          style={{padding:'12px', border:'1px solid #ccc', borderRadius:'6px', fontSize:'16px'}}
        >
          <option value="MRI">MRI Scan</option>
          <option value="CT Scan">CT Scan</option>
          <option value="X-Ray">X-Ray</option>
          <option value="Ultrasound">Ultrasound</option>
          <option value="Lab Test">Lab Test</option>
        </select>
        
        <input
          type="datetime-local"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          required
          style={{padding:'12px', border:'1px solid #ccc', borderRadius:'6px', fontSize:'16px'}}
        />
        
        <button
          type="submit"
          style={{
            padding:'14px', 
            background:'#d32f2f', 
            color:'white', 
            border:'none', 
            borderRadius:'6px', 
            fontSize:'18px',
            fontWeight:'bold',
            cursor:'pointer'
          }}
        >
          Book Now
        </button>
      </form>
      
      <p style={{textAlign:'center', marginTop:'20px', color:'gray', fontSize:'14px'}}>
        
      </p>
    </div>
  );
}

export default BookingSuccess;
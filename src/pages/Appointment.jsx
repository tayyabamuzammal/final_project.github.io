import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const doctors = [
  {id: 1, name: "Dr. Ahmed Khan", category: "Cardiologist", time: "Mon-Fri 9AM-2PM"},
  {id: 2, name: "Dr. Sara Ali", category: "Neurologist", time: "Tue-Sat 10AM-4PM"},
  // ... add all 20 doctors here same as above, or import from a data file
  {id: 20, name: "Dr. Mahnoor Siddiqui", category: "Dentist", time: "Mon-Fri 9AM-5PM"}
];

export default function Appointment() {
  const {doctorId} = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDoc, setSelectedDoc] = useState(doctorId || '');

  const doctor = doctors.find(d => d.id == selectedDoc);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/booking-success');
  };

  return (
    <div style={{padding: '40px 20px', maxWidth: '600px', margin: '0 auto'}}>
      
      <h1 style={{background: '#d32f2f', color: 'white', padding: '20px', textAlign: 'center', borderRadius: '8px'}}>
        Book Appointment
      </h1>

      <form onSubmit={handleSubmit} style={{background: 'white', padding: '30px', borderRadius: '12px', marginTop: '30px', boxShadow: '0 3px 10px rgba(0,0,0,0.1)'}}>
        
        <label style={{display: 'block', marginBottom: '15px'}}>
          <strong>Select Doctor:</strong>
          <select 
            value={selectedDoc} 
            onChange={(e) => setSelectedDoc(e.target.value)}
            required
            style={{width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc'}}
          >
            <option value="">-- Choose Doctor --</option>
            {doctors.map(d => (
              <option key={d.id} value={d.id}>{d.name} - {d.category}</option>
            ))}
          </select>
        </label>

        {doctor && (
          <div style={{background: '#f5f5f5', padding: '15px', borderRadius: '6px', marginBottom: '20px'}}>
            <p style={{margin: 0}}><strong>Timing:</strong> {doctor.time}</p>
          </div>
        )}

        <label style={{display: 'block', marginBottom: '15px'}}>
          <strong>Your Name:</strong>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required
            style={{width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc'}}
          />
        </label>

        <label style={{display: 'block', marginBottom: '20px'}}>
          <strong>Phone Number:</strong>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{width: '100%', padding: '10px', marginTop: '5px', borderRadius: '6px', border: '1px solid #ccc'}}
          />
        </label>

        <button type="submit" style={{
          background: '#d32f2f', 
          color: 'white', 
          border: 'none', 
          padding: '12px', 
          borderRadius: '6px', 
          cursor: 'pointer',
          width: '100%',
          fontSize: '16px'
        }}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
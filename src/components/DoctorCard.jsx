import { useNavigate } from 'react-router-dom';

export default function DoctorCard({doctor}) {
  const navigate = useNavigate();

  return (
    <div style={{
      background: 'white', 
      padding: '25px', 
      borderRadius: '12px', 
      boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
      borderLeft: '5px solid #d32f2f'
    }}>
      <h3 style={{color: '#d32f2f', margin: '0 0 10px 0'}}>{doctor.name}</h3>
      <p style={{color: '#666', fontSize: '14px', margin: '0 0 5px 0'}}><strong>Category:</strong> {doctor.category}</p>
      <p style={{color: '#555', margin: '0 0 10px 0', lineHeight: '1.6'}}>{doctor.bio}</p>
      <p style={{color: '#666', fontSize: '14px', margin: '0 0 15px 0'}}><strong>Timing:</strong> {doctor.time}</p>
      <button 
        onClick={() => navigate(`/appointment/${doctor.id}`)}
        style={{
          background: '#d32f2f', 
          color: 'white', 
          border: 'none', 
          padding: '10px 25px', 
          borderRadius: '6px', 
          cursor: 'pointer',
          width: '100%'
        }}
      >
        Book Appointment
      </button>
    </div>
  );
}
import { useState, useEffect } from 'react';

export default function PatientRecord() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Yahi pe API fetching ho rahi hai
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => {
        if (!res.ok) throw new Error('API se data nahi mila');
        return res.json();
      })
     .then(data => {
        setPatients(data);
        setLoading(false);
      })
     .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{textAlign:'center', marginTop:'50px'}}>Loading...</h2>;
  if (error) return <h2 style={{textAlign:'center', color:'red', marginTop:'50px'}}>Error: {error}</h2>;

  return (
    <div style={{padding:'40px 20px', overflowX:'auto'}}>
      <h2 style={{color:'#d32f2f', marginBottom:'20px', textAlign:'center'}}>Patient Records</h2>
      <p style={{textAlign:'center', marginBottom:'30px'}}>Total Patients: {patients.length}</p>
      
      <table style={{width:'100%', borderCollapse:'collapse', fontSize:'14px'}}>
        <thead>
          <tr style={{background:'#d32f2f', color:'white'}}>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>ID</th>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>Name</th>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>Email</th>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>Phone</th>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>City</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(p => (
            <tr key={p.id}>
              <td style={{padding:'8px', border:'1px solid #ddd', textAlign:'center'}}>{p.id}</td>
              <td style={{padding:'8px', border:'1px solid #ddd'}}>{p.name}</td>
              <td style={{padding:'8px', border:'1px solid #ddd'}}>{p.email}</td>
              <td style={{padding:'8px', border:'1px solid #ddd'}}>{p.phone}</td>
              <td style={{padding:'8px', border:'1px solid #ddd'}}>{p.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
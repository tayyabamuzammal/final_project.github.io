import { useState } from 'react';

export default function LabReport() {
  const [input, setInput] = useState('');
  const [report, setReport] = useState(null);

  const checkReport = () => {
    if(!input) return alert('Please enter name or report number');
    
    const reports = [
      { test: 'Blood Test', result: 'Normal', status: 'Completed', date: '2025-10-01' },
      { test: 'X-Ray Chest', result: 'Clear', status: 'Completed', date: '2025-10-02' },
      { test: 'ECG', result: 'Normal Sinus Rhythm', status: 'Completed', date: '2025-10-03' },
      { test: 'Urine Test', result: 'Normal', status: 'Completed', date: '2025-10-04' }
    ];
    
    setReport(reports[Math.floor(Math.random() * reports.length)]);
  };

  return (
    <div style={{padding:'40px 20px', maxWidth:'600px', margin:'0 auto'}}>
      <h2 style={{color:'#d32f2f', marginBottom:'20px'}}>Lab Report Check</h2>
      <p style={{marginBottom:'20px'}}>You can check your report here. Enter your name or any report number.</p>
      
      <div style={{display:'flex', gap:'10px', marginBottom:'30px'}}>
        <input 
          type="text" 
          placeholder="Enter Name or Report Number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{flex:1, padding:'12px', border:'1px solid #ccc', borderRadius:'6px'}}
        />
        <button 
          onClick={checkReport}
          style={{padding:'12px 25px', background:'#d32f2f', color:'white', border:'none', borderRadius:'6px', cursor:'pointer'}}
        >
          Check Report
        </button>
      </div>

      {report && (
        <div style={{border:'2px solid #d32f2f', padding:'20px', borderRadius:'8px', background:'#fff5f5'}}>
          <h3 style={{marginBottom:'15px'}}>Report Found</h3>
          <p><strong>Patient:</strong> {input}</p>
          <p><strong>Test:</strong> {report.test}</p>
          <p><strong>Result:</strong> {report.result}</p>
          <p><strong>Status:</strong> {report.status}</p>
          <p><strong>Date:</strong> {report.date}</p>
        </div>
      )}
    </div>
  );
}
import { useState } from 'react';

export default function LabReport() {
  const [input, setInput] = useState('');
  const [report, setReport] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const checkReport = async () => {
    if(!input.trim()) {
      alert('Please enter CNIC');
      return;
    }
    
    setError('');
    setReport(null);
    setLoading(true);
    
    try {
      // Dashboard wala route use kiya - direct patient mil jayega
      const res = await fetch(`http://localhost:3000/api/patient/dashboard/${input.trim()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      // 404 = patient 50 me nahi hai
      if(res.status === 404){
        const data = await res.json();
        setError(data.message || 'Patient Not Found in 50 records');
        setLoading(false);
        return;
      }
      
      // Server error
      if(!res.ok){
        setError('Server error: ' + res.status);
        setLoading(false);
        return;
      }
      
      const result = await res.json();
      
      if(result.success && result.data){
        setReport(result.data); // direct object hai, array nahi
      } else {
        setError('No report data found');
      }
    } catch (err) {
      setError('Server not found. Check if backend is running on port 3000');
      console.error(err);
    }
    setLoading(false);
  };

  // Enter dabane pe bhi search ho jaye
  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      checkReport();
    }
  };

  return (
    <div style={{padding:'40px 20px', maxWidth:'600px', margin:'0 auto'}}>
      <h2 style={{color:'#d32f2f', marginBottom:'20px'}}>Lab Report Check</h2>
      <p style={{marginBottom:'20px'}}>Enter your CNIC to check report.</p>
      
      <div style={{display:'flex', gap:'10px', marginBottom:'30px'}}>
        <input 
          type="text" 
          placeholder="35202-1000083-3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{flex:1, padding:'12px', border:'1px solid #ccc', borderRadius:'6px', fontSize:'16px'}}
        />
        <button 
          onClick={checkReport}
          disabled={loading}
          style={{
            padding:'12px 25px', 
            background: loading ? '#ccc' : '#d32f2f', 
            color:'white', 
            border:'none', 
            borderRadius:'6px', 
            cursor: loading ? 'not-allowed' : 'pointer',
            fontSize:'16px'
          }}
        >
          {loading ? 'Checking...' : 'Check Report'}
        </button>
      </div>

      {/* Error show karo */}
      {error && (
        <div style={{
          color:'red', 
          textAlign:'center', 
          padding:'20px', 
          fontWeight:'bold', 
          border:'2px solid red', 
          borderRadius:'6px',
          background:'#ffebee'
        }}>
          {error}
        </div>
      )}

      {/* Report show karo */}
      {report && (
        <div style={{
          border:'2px solid #d32f2f', 
          padding:'25px', 
          borderRadius:'8px', 
          background:'#fff5f5',
          boxShadow:'0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{marginBottom:'20px', color:'#d32f2f', borderBottom:'2px solid #d32f2f', paddingBottom:'10px'}}>
            Patient Lab Report
          </h3>
          
          <div style={{display:'grid', gap:'12px'}}>
            <p><strong>Name:</strong> {report.name || 'N/A'}</p>
            <p><strong>CNIC:</strong> {report.cnic || 'N/A'}</p>
            <p><strong>Age:</strong> {report.age || 'N/A'}</p>
            <p><strong>Test:</strong> {report.test || 'Not Done'}</p>
            <p>
              <strong>Result:</strong> 
              <span style={{
                color: report.result === 'Positive' ? 'red' : report.result === 'Negative' ? 'green' : 'orange',
                fontWeight:'bold',
                marginLeft:'5px'
              }}>
                {report.result || 'Pending'}
              </span>
            </p>
            <p><strong>Status:</strong> {report.status || 'N/A'}</p>
            <p><strong>Total Bill:</strong> Rs {report.totalBill || 0}</p>
            <p><strong>Admit Date:</strong> {report.admitDate ? new Date(report.admitDate).toLocaleDateString('en-PK') : 'N/A'}</p>
            
            {report.reportUrl && (
              <p style={{marginTop:'10px'}}>
                <a 
                  href={report.reportUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{color:'#d32f2f', fontWeight:'bold'}}
                >
                  📄 View Report PDF
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
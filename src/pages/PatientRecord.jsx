export default function PatientRecord() {
  const firstNames = [
    'Ahmed', 'Fatima', 'Ali', 'Ayesha', 'Usman', 'Sara', 'Hassan', 'Zainab', 
    'Bilal', 'Hina', 'Omar', 'Maryam', 'Hamza', 'Laiba', 'Saad', 'Iqra',
    'Farhan', 'Amna', 'Zain', 'Noor', 'Hammad', 'Sana', 'Abdullah', 'Areeba',
    'Haris', 'Hafsa', 'Arsalan', 'Maira', 'Danish', 'Aiman'
  ];
  
  const lastNames = [
    'Khan', 'Malik', 'Ahmed', 'Sheikh', 'Rana', 'Butt', 'Mirza', 'Qureshi', 
    'Hashmi', 'Siddiqui', 'Rizvi', 'Chaudhry', 'Abbasi', 'Javed', 'Farooq',
    'Shah', 'Ali', 'Hussain', 'Raza', 'Ansari'
  ];

  const getRandomName = (i) => {
    // Har patient ko unique name dene ke liye index use kar rahe hain
    const first = firstNames[i % firstNames.length];
    const last = lastNames[Math.floor(i / firstNames.length) % lastNames.length];
    return `${first} ${last}`;
  };

  const diseases = ['Fever', 'Diabetes', 'Hypertension', 'Asthma', 'Fracture', 'Dengue', 'Typhoid', 'Migraine', 'Pneumonia', 'Malaria'];
  const doctors = ['Dr. Ali', 'Dr. Sara', 'Dr. Ahmed', 'Dr. Fatima', 'Dr. Hassan', 'Dr. Ayesha', 'Dr. Bilal', 'Dr. Hina'];

  const patients = Array.from({length: 100}, (_, i) => ({
    id: i + 1,
    name: getRandomName(i),
    age: 18 + (i % 62),
    gender: i % 2 === 0 ? 'Male' : 'Female',
    disease: diseases[i % diseases.length],
    admitted: `2025-09-${String((i % 28) + 1).padStart(2, '0')}`,
    discharged: i % 3 === 0 ? `2025-10-${String((i % 28) + 1).padStart(2, '0')}` : 'Not Discharged',
    doctor: doctors[i % doctors.length]
  }));

  return (
    <div style={{padding:'40px 20px', overflowX:'auto'}}>
      <h2 style={{color:'#d32f2f', marginBottom:'20px', textAlign:'center'}}>Patient Records</h2>
      <p style={{textAlign:'center', marginBottom:'30px'}}>Total Patients: 100</p>
      
      <table style={{width:'100%', borderCollapse:'collapse', fontSize:'14px'}}>
        <thead>
          <tr style={{background:'#d32f2f', color:'white'}}>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>ID</th>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>Name</th>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>Age</th>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>Gender</th>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>Disease</th>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>Doctor</th>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>Admitted</th>
            <th style={{padding:'10px', border:'1px solid #ddd'}}>Discharged</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(p => (
            <tr key={p.id}>
              <td style={{padding:'8px', border:'1px solid #ddd', textAlign:'center'}}>{p.id}</td>
              <td style={{padding:'8px', border:'1px solid #ddd'}}>{p.name}</td>
              <td style={{padding:'8px', border:'1px solid #ddd', textAlign:'center'}}>{p.age}</td>
              <td style={{padding:'8px', border:'1px solid #ddd', textAlign:'center'}}>{p.gender}</td>
              <td style={{padding:'8px', border:'1px solid #ddd'}}>{p.disease}</td>
              <td style={{padding:'8px', border:'1px solid #ddd'}}>{p.doctor}</td>
              <td style={{padding:'8px', border:'1px solid #ddd'}}>{p.admitted}</td>
              <td style={{padding:'8px', border:'1px solid #ddd'}}>{p.discharged}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
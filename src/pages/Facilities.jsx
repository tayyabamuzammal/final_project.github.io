export default function Facilities() {
  const facilities = [
    {
      name: "MRI Scan",
      desc: "1.5 Tesla MRI machine for high-resolution imaging of brain, spine, joints and soft tissues. Scan time reduced by 40% with AI-assisted imaging.",
      features: ["Non-invasive procedure", "24/7 available", "Reports in 4 hours", "Expert radiologists"]
    },
    {
      name: "CT Scan",
      desc: "128-slice CT scanner for detailed cross-sectional imaging. Used for trauma, stroke, cancer detection and internal injuries.",
      features: ["Low radiation dose", "Whole body scan in 30 sec", "3D reconstruction", "Emergency priority"]
    },
    {
      name: "Laboratory",
      desc: "Fully automated NABL certified laboratory with latest analyzers for blood tests, biochemistry, microbiology and pathology.",
      features: ["500+ tests available", "Reports in 2-6 hours", "Home sample collection", "Digital reports"]
    },
    {
      name: "ICU & CCU",
      desc: "20-bed intensive care unit with ventilators, cardiac monitors, and 24/7 intensivist coverage for critical patients.",
      features: ["1:1 nurse ratio", "Advanced life support", "Isolation rooms", "Family counseling"]
    },
    {
      name: "Operation Theater",
      desc: "5 modular operation theaters with HEPA filtration, laminar airflow and advanced anesthesia workstations for all surgeries.",
      features: ["Zero infection rate", "Robotic surgery support", "24/7 emergency OT", "Pain management team"]
    },
    {
      name: "Emergency Services",
      desc: "Level-1 trauma center with dedicated emergency physicians, ambulance service and triage system for immediate care.",
      features: ["Ambulance 24/7", "Trauma team on standby", "Fast-track registration", "Free first aid"]
    }
  ];

  return (
    <div style={{padding: '40px 20px', maxWidth: '1100px', margin: '0 auto', background: '#f9f9f9'}}>
      
      <div style={{background: '#d32f2f', padding: '25px', borderRadius: '8px', marginBottom: '40px'}}>
        <h1 style={{color: 'white', textAlign: 'center', margin: 0, fontSize: '32px'}}>Our Facilities</h1>
        <p style={{color: 'white', textAlign: 'center', margin: '10px 0 0 0', fontSize: '16px'}}>
          World-class medical technology and expert care under one roof
        </p>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        {facilities.map((item, index) => (
          <div key={index} style={{
            background: 'white', 
            padding: '30px',
            borderRadius: '12px', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            borderLeft: '5px solid #d32f2f'
          }}>
            
            <h2 style={{color: '#d32f2f', marginBottom: '15px', fontSize: '24px'}}>{item.name}</h2>
            <p style={{color: '#555', lineHeight: '1.7', marginBottom: '20px'}}>{item.desc}</p>
            
            <h4 style={{color: '#333', marginBottom: '10px'}}>Key Features:</h4>
            <ul style={{paddingLeft: '20px', color: '#555'}}>
              {item.features.map((f, i) => (
                <li key={i} style={{marginBottom: '8px'}}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
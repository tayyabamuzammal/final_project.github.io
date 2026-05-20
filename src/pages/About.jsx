export default function About() {
  return (
    <div style={{padding: '50px 20px', maxWidth: '900px', margin: '0 auto'}}>
      <h2 style={{background: '#d32f2f', color: 'white', textAlign: 'center', padding: '15px', borderRadius: '8px', marginBottom: '30px'}}>
        About MediCare Connect
      </h2>
      
      <div style={{background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
        <h3 style={{color: '#d32f2f', marginBottom: '15px'}}>Who We Are</h3>
        <p style={{color: '#555', lineHeight: '1.7', marginBottom: '20px'}}>
          MediCare Connect is a leading healthcare provider committed to delivering exceptional medical care with compassion and advanced technology. 
          Our team of experienced doctors, nurses, and healthcare professionals work 24/7 to ensure your health and wellbeing.
        </p>
        
        <h3 style={{color: '#d32f2f', marginBottom: '15px'}}>Our Mission</h3>
        <p style={{color: '#555', lineHeight: '1.7', marginBottom: '20px'}}>
          To provide accessible, affordable, and high-quality healthcare services to every patient with dignity and respect.
        </p>
        
        <h3 style={{color: '#d32f2f', marginBottom: '15px'}}>Why Choose Us</h3>
        <ul style={{color: '#555', lineHeight: '1.8', paddingLeft: '20px'}}>
          <li>24/7 Emergency Services</li>
          <li>Expert Medical Team</li>
          <li>Advanced Medical Equipment</li>
          <li>Patient-Centered Care</li>
          <li>Affordable Treatment Plans</li>
        </ul>
      </div>
    </div>
  );
}
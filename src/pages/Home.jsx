import { useState, useEffect } from 'react';
import {
  Calendar, Search, FlaskConical, Heart, ChevronLeft, ChevronRight,
  Ambulance, Pill, Bed, HeartPulse, Baby, Stethoscope, UserCheck, BedSingle,
  Phone, Mail, MapPin, Clock
} from 'lucide-react';

export default function Home() {
  const [patients, setPatients] = useState([]);
  const [services, setServices] = useState([]);
  const [currentPatient, setCurrentPatient] = useState(0);

  useEffect(() => {
    setPatients([
      {
        name: "Tayyaba",
        history: "I came to Medicare Hospital with severe chest pain. The cardiology team responded immediately and performed an angioplasty within 30 minutes. Thanks to their quick action and 24/7 emergency service, I am healthy today."
      },
      {
        name: "Sarah Khan",
        history: "My 2-year-old daughter had a high fever and breathing issues. The pediatric department took excellent care of her in the NICU. They explained everything clearly and made sure we felt comfortable."
      },
      {
        name: "Ahmed Ali",
        history: "After my car accident, I was brought here with multiple fractures. The orthopedics and surgery team worked together to fix everything. The physiotherapy support after surgery helped me walk again in just 2 months."
      }
    ]);

    setServices([
      { id: 1, title: 'Cardiology', desc: 'Advanced heart care with 24/7 emergency cardiac services.', img: 'https://img.icons8.com/color/96/heart-with-pulse.png', detail: 'We provide 24/7 cardiology services with ECG, Echo, Angiography and Angioplasty facilities.' },
      { id: 2, title: 'Neurology', desc: 'Brain and nervous system treatment.', img: 'https://img.icons8.com/color/96/brain.png', detail: 'Advanced neurology department with MRI, CT Scan and neuro-surgery facilities.' },
      { 
  id: 3, 
  title: 'Orthopedics', 
  desc: 'Bone, joint and muscle treatment.', 
  img: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png', 
  detail: 'Complete orthopedic care including fracture treatment, joint replacement and physiotherapy.' 
},
      { id: 4, title: 'Pediatrics', desc: 'Complete healthcare for children.', img: 'https://img.icons8.com/color/96/baby.png', detail: 'Specialized pediatric care for infants, children and adolescents with 24/7 NICU.' },
      { id: 5, title: 'Dermatology', desc: 'Skin, hair and nail treatment.', img: 'https://img.icons8.com/color/96/skin.png', detail: 'Complete skin, hair and cosmetic treatments with latest technology.' },
      { id: 6, title: 'Oncology', desc: 'Cancer diagnosis and treatment.', img: 'https://img.icons8.com/color/96/cancer.png', detail: 'Comprehensive cancer care with chemotherapy, radiotherapy and surgical oncology.' }
    ]);
  }, []);

  const actionBoxes = [
    { title: 'Book An Appointment', icon: <Calendar size={32} /> },
    { title: 'Find A Doctor', icon: <Search size={32} /> },
    { title: 'Lab & Diagnosis Report', icon: <FlaskConical size={32} /> },
    { title: 'My Medicare Health', icon: <Heart size={32} /> }
  ];

  const facilities = [
    { icon: <Bed size={32} />, name: "Minor OT" },
    { icon: <HeartPulse size={32} />, name: "CCU" },
    { icon: <Stethoscope size={32} />, name: "CICU" },
    { icon: <Baby size={32} />, name: "NICU" },
    { icon: <UserCheck size={32} />, name: "Labour Room" },
    { icon: <BedSingle size={32} />, name: "VIP Rooms" },
  ];

  const handleReadMore = (id) => {
    const service = services.find(s => s.id === id);
    alert(service.detail);
  };

  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <img src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1920" alt="Hospital" />
        <div className="hero-overlay">
          Where Patient Care Is At The Heart Of All We Do
        </div>
      </div>

      {/* Action Boxes */}
      <div className="grid-4 container">
        {actionBoxes.map((box, idx) => (
          <div key={idx} className="action-card">
            <div style={{marginBottom: '12px', display: 'flex', justifyContent: 'center'}}>{box.icon}</div>
            <h3>{box.title}</h3>
          </div>
        ))}
      </div>

      {/* Patient Stories */}
      <div className="section">
        <h2 className="section-title-red">Patient Stories</h2>
        <div className="flex-center">
          <button className="arrow-btn" onClick={() => setCurrentPatient(p => (p - 1 + patients.length) % patients.length)}>
            <ChevronLeft size={24} />
          </button>

          {patients[currentPatient] && (
            <div className="patient-card">
              <h3>{patients[currentPatient].name}</h3>
              <p>{patients[currentPatient].history}</p>
            </div>
          )}

          <button className="arrow-btn" onClick={() => setCurrentPatient(p => (p + 1) % patients.length)}>
            <ChevronRight size={24} />
          </button>
        </div>
        <div style={{textAlign: 'center', marginTop: '12px', color: '#6b7280'}}>
          {patients.length > 0 && `${currentPatient + 1} / ${patients.length}`}
        </div>
      </div>

      {/* Services - 1 Card Per Line */}
      <div>
        <h2 className="section-title-red">Our Core Services</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '0 20px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {services.map((service) => (
            <div key={service.id} style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                  flexShrink: 0
                }}
              />
              <div style={{flex: 1, textAlign: 'left'}}>
                <h3 style={{color: '#d32f2f', marginBottom: '8px'}}>{service.title}</h3>
                <p style={{color: '#555', fontSize: '14px', marginBottom: '12px'}}>{service.desc}</p>
                <button
                  onClick={() => handleReadMore(service.id)}
                  style={{
                    background: '#d32f2f',
                    color: 'white',
                    border: 'none',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facilities */}
      <section style={{padding: '40px 15px', background: '#f9f9f9', marginTop: '40px'}}>
        <div style={{background: '#d32f2f', padding: '15px', textAlign: 'center', borderRadius: '8px', marginBottom: '25px'}}>
          <h2 style={{color: 'white', margin: 0, fontSize: '24px'}}>Our Facilities</h2>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', marginBottom: '25px'}}>
          <div style={{background: '#d32f2f', color: 'white', display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 25px', borderRadius: '50px', width: '90%', maxWidth: '350px'}}>
            <Ambulance size={28} />
            <span>Emergency Service Available 24/7</span>
          </div>
          <div style={{background: '#d32f2f', color: 'white', display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 25px', borderRadius: '50px', width: '90%', maxWidth: '350px'}}>
            <Pill size={28} />
            <span>OPD Consultant Clinics</span>
          </div>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
          {facilities.map((item, index) => (
            <div key={index} style={{background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
              <div style={{color: '#d32f2f', marginBottom: '8px'}}>{item.icon}</div>
              <p style={{margin: 0, fontWeight: '500'}}>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact - Black Background */}
      <section style={{background: '#1a1a1a', color: 'white', padding: '50px 20px', marginTop: '40px'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto'}}>
          <h2 style={{textAlign: 'center', fontSize: '28px', marginBottom: '40px'}}>Contact Us</h2>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px'}}>

            <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <Phone size={32} color="#d32f2f" />
              <div>
                <h4 style={{margin: '0 0 5px 0', color: '#d32f2f'}}>Phone</h4>
                <p style={{margin: 0}}>Emergency: +92 300 1234567</p>
                <p style={{margin: 0}}>Reception: +92 42 1234567</p>
              </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <Mail size={32} color="#d32f2f" />
              <div>
                <h4 style={{margin: '0 0 5px 0', color: '#d32f2f'}}>Email</h4>
                <p style={{margin: 0}}>info@medicare.com</p>
                <p style={{margin: 0}}>support@medicare.com</p>
              </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <MapPin size={32} color="#d32f2f" />
              <div>
                <h4 style={{margin: '0 0 5px 0', color: '#d32f2f'}}>Address</h4>
                <p style={{margin: 0}}>123 Main Boulevard, Gulberg III</p>
                <p style={{margin: 0}}>Lahore, Punjab, Pakistan</p>
              </div>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
              <Clock size={32} color="#d32f2f" />
              <div>
                <h4 style={{margin: '0 0 5px 0', color: '#d32f2f'}}>Working Hours</h4>
                <p style={{margin: 0}}>Emergency: 24/7 Available</p>
                <p style={{margin: 0}}>OPD: Mon - Sat | 9AM - 9PM</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="footer">
        © 2025 MediCare Connect. All rights reserved.
      </footer>
{/* Responsive + Styling CSS */}
<style>{`
  /* Hero image responsive */
  .hero img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  .hero {
    position: relative;
  }

  .hero-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    padding: 0 20px;
  }

  /* Action boxes - red background, white text */
  .grid-4 {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
  }

  .action-card {
    background: #d32f2f;
    color: white;
    flex: 1 1 100%;
    min-height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    border-radius: 6px;
  }

  .action-card h3 {
    color: white;
    margin: 0;
    font-size: 16px;
  }

  /* Tablet: 2 per row */
  @media (min-width: 768px) {
    .action-card {
      flex: 1 1 calc(50% - 10px);
    }
  }

  /* Desktop: 4 per row */
  @media (min-width: 1024px) {
    .action-card {
      flex: 1 1 calc(25% - 10px);
    }
  }

  /* Patient card - navy blue with white text */
  .patient-card {
    background: #1e3a8a;
    color: white;
    padding: 30px;
    border-radius: 12px;
    max-width: 700px;
    margin: 0 15px;
    text-align: center;
  }

  .patient-card h3 {
    color: white;
    margin-bottom: 15px;
  }

  .patient-card p {
    color: white;
    line-height: 1.6;
  }

  /* Section heading - red background, white text */
  .section-title-red {
    background: #d32f2f;
    color: white;
    padding: 15px;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 25px;
    font-size: 24px;
  }

  /* Arrow buttons */
  .arrow-btn {
    background: #d32f2f;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section {
    padding: 40px 20px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Mobile responsive for services */
  @media (max-width: 900px) {
    div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
      grid-template-columns: 1fr!important;
    }
  }
  @media (max-width: 600px) {
    div[style*="display: flex"][style*="alignItems: center"][style*="gap: 20px"] {
      flex-direction: column!important;
      text-align: center!important;
    }
    div[style*="textAlign: left"] {
      text-align: center!important;
    }
    .hero-overlay {
      font-size: 18px;
    }
  }
`}</style>
    </div>
  );
}
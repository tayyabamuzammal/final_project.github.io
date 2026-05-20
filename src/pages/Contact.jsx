import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../data/siteData';

export default function Contact() {
  return (
    <section style={{background: '#1a1a1a', color: 'white', padding: '50px 20px', minHeight: '70vh'}}>
      <div style={{maxWidth: '1000px', margin: '0 auto'}}>
        <h2 style={{textAlign: 'center', fontSize: '28px', marginBottom: '40px'}}>Contact Us</h2>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <Phone size={32} color="#d32f2f" />
            <div>
              <h4 style={{margin: '0 0 5px 0', color: '#d32f2f'}}>Phone</h4>
              <p style={{margin: 0}}>Emergency: {contactInfo.phone1}</p>
              <p style={{margin: 0}}>Reception: {contactInfo.phone2}</p>
            </div>
          </div>

          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <Mail size={32} color="#d32f2f" />
            <div>
              <h4 style={{margin: '0 0 5px 0', color: '#d32f2f'}}>Email</h4>
              <p style={{margin: 0}}>{contactInfo.email1}</p>
              <p style={{margin: 0}}>{contactInfo.email2}</p>
            </div>
          </div>

          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <MapPin size={32} color="#d32f2f" />
            <div>
              <h4 style={{margin: '0 0 5px 0', color: '#d32f2f'}}>Address</h4>
              <p style={{margin: 0}}>{contactInfo.address1}</p>
              <p style={{margin: 0}}>{contactInfo.address2}</p>
            </div>
          </div>

          <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <Clock size={32} color="#d32f2f" />
            <div>
              <h4 style={{margin: '0 0 5px 0', color: '#d32f2f'}}>Working Hours</h4>
              <p style={{margin: 0}}>{contactInfo.hours1}</p>
              <p style={{margin: 0}}>{contactInfo.hours2}</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          div[style*="gridTemplateColumns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr!important;
          }
        }
      `}</style>
    </section>
  );
}
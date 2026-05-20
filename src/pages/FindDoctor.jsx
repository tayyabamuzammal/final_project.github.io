import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';

const categories = [
  "Cardiologist", "Neurologist", "Orthopedic", "Dermatologist", 
  "Pediatrician", "Gynecologist", "Urologist", "Psychiatrist",
  "ENT Specialist", "Dentist", "Oncologist", "Gastroenterologist"
];

const doctors = [
  {id: 1, name: "Dr. Ahmed Khan", category: "Cardiologist", bio: "MBBS, FCPS Cardiology. 12 years experience in heart diseases.", time: "Mon-Fri 9AM-2PM"},
  {id: 2, name: "Dr. Sara Ali", category: "Neurologist", bio: "MD Neurology. Specialist in epilepsy and stroke treatment.", time: "Tue-Sat 10AM-4PM"},
  {id: 3, name: "Dr. Usman Raza", category: "Orthopedic", bio: "MS Orthopedic. Joint replacement and sports injury expert.", time: "Mon-Sat 11AM-5PM"},
  {id: 4, name: "Dr. Fatima Noor", category: "Dermatologist", bio: "MBBS, MCPS Dermatology. Skin and hair specialist.", time: "Daily 2PM-8PM"},
  {id: 5, name: "Dr. Hassan Malik", category: "Pediatrician", bio: "FCPS Pediatrics. Child health and vaccination expert.", time: "Mon-Fri 9AM-1PM"},
  {id: 6, name: "Dr. Ayesha Siddiqui", category: "Gynecologist", bio: "MBBS, FCPS Gynecology. Women's health specialist.", time: "Tue-Sun 10AM-6PM"},
  {id: 7, name: "Dr. Bilal Ahmed", category: "Urologist", bio: "MS Urology. Kidney and urinary tract specialist.", time: "Mon-Sat 3PM-9PM"},
  {id: 8, name: "Dr. Hira Khan", category: "Psychiatrist", bio: "MD Psychiatry. Mental health and counseling expert.", time: "Mon-Fri 4PM-8PM"},
  {id: 9, name: "Dr. Imran Shah", category: "ENT Specialist", bio: "FCPS ENT. Ear, nose and throat surgeon.", time: "Tue-Sat 9AM-3PM"},
  {id: 10, name: "Dr. Sana Javed", category: "Dentist", bio: "BDS, MDS Orthodontics. Dental and braces specialist.", time: "Daily 11AM-7PM"},
  {id: 11, name: "Dr. Kamran Ali", category: "Oncologist", bio: "MD Oncology. Cancer treatment and chemotherapy expert.", time: "Mon-Fri 10AM-4PM"},
  {id: 12, name: "Dr. Nadia Hussain", category: "Gastroenterologist", bio: "FCPS Gastroenterology. Liver and stomach specialist.", time: "Wed-Mon 2PM-8PM"},
  {id: 13, name: "Dr. Omer Farooq", category: "Cardiologist", bio: "MBBS, MD Cardiology. 8 years experience.", time: "Mon-Sat 9AM-1PM"},
  {id: 14, name: "Dr. Rabia Khan", category: "Pediatrician", bio: "MBBS, DCH. Newborn and child care specialist.", time: "Daily 10AM-5PM"},
  {id: 15, name: "Dr. Talha Saeed", category: "Orthopedic", bio: "MS Orthopedic. Spine surgery specialist.", time: "Tue-Sun 12PM-6PM"},
  {id: 16, name: "Dr. Zainab Ali", category: "Dermatologist", bio: "MCPS Dermatology. Cosmetic dermatology expert.", time: "Mon-Fri 3PM-9PM"},
  {id: 17, name: "Dr. Farhan Malik", category: "Neurologist", bio: "MD Neurology. Headache and migraine specialist.", time: "Mon-Sat 10AM-4PM"},
  {id: 18, name: "Dr. Iqra Ahmed", category: "Gynecologist", bio: "FCPS Gynecology. Infertility specialist.", time: "Tue-Sat 11AM-7PM"},
  {id: 19, name: "Dr. Salman Khan", category: "Urologist", bio: "MS Urology. Kidney stone and prostate specialist.", time: "Daily 4PM-10PM"},
  {id: 20, name: "Dr. Mahnoor Siddiqui", category: "Dentist", bio: "BDS, Cosmetic Dentistry expert.", time: "Mon-Fri 9AM-5PM"}
];

export default function FindDoctor() {
  const [selectedCat, setSelectedCat] = useState("All");
  const filteredDoctors = selectedCat === "All" ? doctors : doctors.filter(d => d.category === selectedCat);

  return (
    <div style={{padding: '40px 20px', maxWidth: '1200px', margin: '0 auto'}}>
      
      <h1 style={{background: '#d32f2f', color: 'white', padding: '20px', textAlign: 'center', borderRadius: '8px', marginBottom: '30px'}}>
        Find a Doctor
      </h1>

      <div style={{marginBottom: '40px'}}>
        <h3 style={{marginBottom: '15px'}}>Select Category</h3>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
          <button onClick={() => setSelectedCat("All")} style={catBtnStyle(selectedCat === "All")}>All</button>
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCat(cat)} style={catBtnStyle(selectedCat === cat)}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
        {filteredDoctors.map(doc => <DoctorCard key={doc.id} doctor={doc} />)}
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr!important;
          }
        }
      `}</style>
    </div>
  );
}

const catBtnStyle = (active) => ({
  padding: '10px 20px',
  border: active ? 'none' : '1px solid #d32f2f',
  background: active ? '#d32f2f' : 'white',
  color: active ? 'white' : '#d32f2f',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: '14px'
});
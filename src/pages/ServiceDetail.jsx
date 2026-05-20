import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Yehi array Services.jsx me bhi honi chahiye. Better hai isko alag file me rakho, 
// lekin abhi ke liye yahin daal do
const services = [
  {
    id: 1,
    name: "Cardiology",
        img: 'https://img.icons8.com/color/96/heart-with-pulse.png',
    shortDesc: "Advanced heart care with 24/7 emergency cardiac services.",
    fullDesc: `Our Cardiology department provides comprehensive cardiac care including ECG, Echo, Angiography, and Angioplasty. 
    We have a dedicated 24/7 Cardiac Emergency unit with experienced cardiologists and cardiac surgeons available round the clock.
    Our state-of-the-art Cath Lab is equipped with the latest technology for diagnosing and treating heart conditions.`
  },
  {
    id: 2,
    name: "Neurology", 
    img: 'https://img.icons8.com/color/96/brain.png',
    shortDesc: "Brain and nervous system treatment.",
    fullDesc: `The Neurology department specializes in diagnosing and treating disorders of the brain, spinal cord, and nervous system. 
    We handle cases of stroke, epilepsy, Parkinson's disease, migraines, and neuropathy. 
    Our team includes qualified neurologists and neurosurgeons with modern diagnostic equipment like EEG and EMG.`
  },
  {
    id: 3,
    name: "Orthopedics",
    img: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
    shortDesc: "Bone, joint and muscle treatment.",
    fullDesc: `Our Orthopedics department provides treatment for all bone, joint, and muscle conditions. 
    We perform joint replacement surgeries, fracture management, spine surgeries, and sports injury treatments. 
    We also have physiotherapy and rehabilitation services to ensure complete recovery.`
  },
  {
    id: 4,
    name: "Pediatrics",
     img: 'https://img.icons8.com/color/96/baby.png',
    shortDesc: "Complete healthcare for children.",
    fullDesc: `The Pediatrics department offers specialized healthcare for infants, children, and adolescents. 
    We provide vaccination, neonatal care, pediatric emergency services, and treatment for childhood diseases. 
    Our pediatricians are experienced in handling child-specific medical conditions with care and compassion.`
  },
  {
    id: 5,
    name: "Gastroenterology",
    img: 'https://img.icons8.com/color/96/skin.png',
    shortDesc: "Digestive system and stomach care.",
    fullDesc: `Our Gastroenterology department deals with disorders of the digestive system including stomach, liver, pancreas, and intestines. 
    We perform endoscopy, colonoscopy, and treat conditions like acidity, ulcers, IBS, and liver diseases.`
  },
  {
    id: 6,
    name: "Dermatology",
        img: 'https://img.icons8.com/color/96/cancer.png',
    shortDesc: "Skin, hair and nail treatments.",
    fullDesc: `The Dermatology department provides treatment for all skin, hair, and nail conditions. 
    We treat acne, eczema, psoriasis, fungal infections, and also offer cosmetic procedures like laser treatment and chemical peels.`
  }
];

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <div style={{textAlign: 'center', padding: '80px 20px'}}>
        <h2>Service Not Found</h2>
        <Link to="/services" style={{color: '#d32f2f'}}>← Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail">
      <Link to="/services" className="back-btn">
        <ArrowLeft size={20} /> Back to Services
      </Link>
      
      <div className="detail-content">
        <img src={service.img} alt={service.name} />
        <div className="detail-text">
          <h1>{service.name}</h1>
          <p className="short-desc">{service.shortDesc}</p>
          <div className="full-desc">
            {service.fullDesc}
          </div>
          <Link to="/appointment" className="book-btn">
            Book Appointment
          </Link>
        </div>
      </div>

      <style>{`
        .service-detail {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #d32f2f;
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 30px;
        }
        .back-btn:hover {
          text-decoration: underline;
        }
        .detail-content {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        .detail-content img {
          width: 400px;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          flex-shrink: 0;
        }
        .detail-text h1 {
          color: #d32f2f;
          margin: 0 0 15px 0;
          font-size: 32px;
        }
        .short-desc {
          font-size: 18px;
          color: #333;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .full-desc {
          font-size: 16px;
          line-height: 1.8;
          color: #555;
          white-space: pre-line;
        }
        .book-btn {
          display: inline-block;
          background: #d32f2f;
          color: white;
          padding: 14px 30px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          margin-top: 25px;
        }
        .book-btn:hover {
          background: #b71c1c;
        }
        @media (max-width: 768px) {
          .detail-content {
            flex-direction: column;
          }
          .detail-content img {
            width: 100%;
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
}
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    name: "Cardiology",
    desc: "Advanced heart care with 24/7 emergency cardiac services and expert cardiologists.",
    img: 'https://img.icons8.com/color/96/heart-with-pulse.png',
  },
  {
    id: 2,
    name: "Neurology", 
    desc: "Complete diagnosis and treatment for brain, spine and nervous system disorders.",
     img: 'https://img.icons8.com/color/96/brain.png'
  },
  {
    id: 3,
    name: "Orthopedics",
    desc: "Treatment for bones, joints, muscles with joint replacement and physiotherapy.",
    img: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png'
  },
  {
    id: 4,
    name: "Pediatrics",
    desc: "Specialized healthcare for infants, children and adolescents with 24/7 emergency.",
    img: 'https://img.icons8.com/color/96/baby.png'
  },
  {
    id: 5,
    name: "Gastroenterology",
    desc: "Expert care for digestive system, liver, stomach and intestinal disorders.",
    img: 'https://img.icons8.com/color/96/skin.png'
  },
  {
    id: 6,
    name: "Dermatology",
    desc: "Advanced treatment for skin, hair and nail conditions with cosmetic procedures.",
    img: 'https://img.icons8.com/color/96/cancer.png'
  }
];

export default function Services() {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Medical Services</h1>
        <p>Comprehensive healthcare services with experienced specialists</p>
      </div>
      
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.img} alt={service.name} />
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
              <Link to={`/service/${service.id}`} className="read-btn">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .services-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          background: #f5f5f5;
          min-height: 100vh;
        }

        .services-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .services-header h1 {
          color: #d32f2f;
          font-size: 36px;
          margin-bottom: 10px;
        }

        .services-header p {
          color: #666;
          font-size: 16px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 25px;
        }

        .service-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .service-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .service-info {
          padding: 20px;
        }

        .service-info h3 {
          color: #d32f2f;
          margin: 0 0 12px 0;
          font-size: 24px;
        }

        .service-info p {
          color: #555;
          line-height: 1.6;
          margin: 0 0 20px 0;
          min-height: 50px;
        }

        .read-btn {
          display: inline-block;
          background: #d32f2f;
          color: white;
          text-decoration: none;
          padding: 12px 28px;
          border-radius: 25px;
          font-weight: 600;
          transition: background 0.3s;
        }

        .read-btn:hover {
          background: #b71c1c;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .services-header h1 {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
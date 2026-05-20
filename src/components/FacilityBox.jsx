import { 
  Ambulance, Pill, Bed, HeartPulse, Baby, Stethoscope, 
  UserCheck, BedSingle, ShieldCheck, User 
} from 'lucide-react';

export default function Facilities() {
  const facilities = [
    { icon: <Bed size={32} />, name: "Minor OT" },
    { icon: <HeartPulse size={32} />, name: "CCU" },
    { icon: <Stethoscope size={32} />, name: "CICU" },
    { icon: <Baby size={32} />, name: "NICU" },
    { icon: <UserCheck size={32} />, name: "Labour Room" },
    { icon: <BedSingle size={32} />, name: "VIP Rooms" },
    { icon: <ShieldCheck size={32} />, name: "Deluxe/ Private Rooms" },
    { icon: <User size={32} />, name: "Semi Private Rooms" },
    { icon: <HeartPulse size={32} />, name: "Cath Lab with Recovery" },
    { icon: <Bed size={32} />, name: "General Ward" },
  ];

  return (
    <section className="facilities-section">
      <h2 className="facilities-title">
        <span className="dash">-</span> Our <span className="highlight">Facilities</span> <span className="dash">-</span>
      </h2>

      {/* Red Buttons with icons */}
      <div className="red-services">
        <div className="red-btn">
          <Ambulance size={28} />
          <span>Emergency Service Available 24/7</span>
        </div>
        
        <div className="red-btn">
          <Pill size={28} />
          <span>OPD Consultant Clinics</span>
        </div>
      </div>

      {/* Grid Cards with icons */}
      <div className="facilities-grid">
        {facilities.map((item, index) => (
          <div className="facility-card" key={index}>
            {item.icon}  {/* ye wala icon add ho gaya */}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
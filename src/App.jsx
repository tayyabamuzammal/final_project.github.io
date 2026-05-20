import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import Facilities from './pages/Facilities';
import FindDoctor from './pages/FindDoctor';
import Appointment from './pages/Appointment';
import BookingSuccess from './pages/BookingSuccess';
import LabReport from './pages/LabReport';
import PatientRecord from './pages/PatientRecord';
import MedicareHelp from './pages/MedicareHelp';
import './App.css';

// Loading Component
function Loading() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontSize: '20px' 
    }}>
      Loading...
    </div>
  );
}

// Error Component
function ConnectionError() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      color: 'red',
      height: '100vh' 
    }}>
      <h2>Connection Error</h2>
      <p> Internet not connected.Please check your network.</p>
      <button 
        onClick={() => window.location.reload()} 
        style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}
      >
        Retry
      </button>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Hamesha 2 sec loading dikhao
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Loading state
  if (loading) {
    return <Loading />;
  }

  // Offline + loading khatam ho gaya
  if (!isOnline) {
    return <ConnectionError />;
  }

  // Normal app
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointment/:doctorId" element={<Appointment />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/lab-report" element={<LabReport />} />
        <Route path="/patient-record" element={<PatientRecord />} />
        <Route path="/help" element={<MedicareHelp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
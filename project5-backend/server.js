const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // CORS IMPORT
const app = express();
const PORT = 3000;

// NAYA: CORS sabse uper
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// 50 valid CNIC store karne ke liye array
let validCNICs = [];

// MongoDB connect
mongoose.connect("mongodb://mongo:oQzxMfNedqFQVCRdApjpxWmlAbIesqkF@thomas.proxy.rlwy.net:36019/project5?authSource=admin")
.then(() => {
    console.log("MongoDB Connected ");
    loadValidCNICs();
  })
.catch(err => console.log("Error:", err));

// Patient Schema with test + result fields
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cnic: { type: String, unique: true, required: true },
  age: Number,
  phone: String,
  test: { type: String, default: "" },
  result: { type: String, enum: ["Normal", "Positive", "Negative"], default: "Normal" },
  admitDate: { type: Date, default: Date.now },
  rechargeDate: Date,
  totalBill: { type: Number, default: 0 },
  status: { type: String, default: "Admitted" },
  appointmentDate: Date,
  reportUrl: String,
  notes: String
});

const Patient = mongoose.model("Patient", patientSchema);

// ===== NAYA: APPOINTMENT SCHEMA ADD KIYA =====
const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cnic: { type: String, required: true, unique: true },
  phone: String,
  email: String,
  age: Number,
  department: { type: String, default: "General" }, // MRI, X-Ray, Ultrasound etc
  appointmentDate: { type: Date, required: true },
  status: { type: String, default: 'Pending' }, // Pending, Confirmed, Completed
  bookedAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
// ===== APPOINTMENT SCHEMA KHATAM =====

// 50 CNIC load karne wala function
async function loadValidCNICs() {
  try {
    const patients = await Patient.find({}, { cnic: 1, _id: 0 })
  .sort({ admitDate: -1 })
  .limit(50);

    validCNICs = patients.map(p => String(p.cnic).trim());
    console.log('50 valid CNICs loaded:', validCNICs.length);
    console.log('Sample:', validCNICs[0]);
  } catch (err) {
    console.log('Error loading CNICs:', err);
  }
}

// Home route
app.get("/", (req, res) => {
  res.send("Backend + Database dono chal rahi hai 🔥");
});

// ===== NAYA: APPOINTMENT BOOKING ROUTE =====
// Website se data yahan aayega POST
app.post("/api/appointment/book", async (req, res) => {
  try {
    const { name, cnic, phone, email, age, department, appointmentDate } = req.body;

    if(!name ||!cnic ||!appointmentDate) {
      return res.status(400).json({
        success: false,
        message: 'Name, CNIC aur Date zaroori hai'
      });
    }

    // Check karo CNIC pehle se to nahi
    const existing = await Appointment.findOne({ cnic: cnic.trim() });
    if(existing) {
      return res.status(400).json({
        success: false,
        message: 'Is CNIC pe appointment pehle se booked hai'
      });
    }

    const newAppointment = new Appointment({
      name: name.trim(),
      cnic: cnic.trim(),
      phone,
      email,
      age,
      department: department || 'General',
      appointmentDate: new Date(appointmentDate)
    });

    await newAppointment.save();

    res.json({
      success: true,
      message: 'Appointment booked successfully! ✅',
      data: newAppointment
    });
  } catch(err) {
    if(err.code === 11000) {
      return res.status(400).json({ success: false, message: 'CNIC duplicate hai' });
    }
    res.status(500).json({ success: false, message: err.message });
  }
});

// URL se appointment check karne ka route
app.get("/api/appointment/check/:cnic", async (req, res) => {
  try {
    const cnic = String(req.params.cnic).trim();
    const appointment = await Appointment.findOne({ cnic });
    if(!appointment) {
      return res.status(404).json({ success: false, message: 'No appointment found on this CNIC' });
    }
    res.json({ success: true, data: appointment });
  } catch(err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Saari appointments dekhne ka route
app.get("/api/appointment/all", async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ bookedAt: -1 });
    res.json({ success: true, total: appointments.length, data: appointments });
  } catch(err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
// ===== APPOINTMENT ROUTES KHATAM =====

// 1. Saare patient - RECORD: test aur result hide
app.get("/api/patient/all", async (req, res) => {
  try {
    const patients = await Patient.find()
   .select('-test -result -reportUrl -notes -__v')
   .sort({admitDate: -1});
    res.json({ success: true, total: patients.length, data: patients });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. LAB REPORTS - sirf name age phone cnic test result
app.get("/api/patient/lab-reports", async (req, res) => {
  try {
    const patients = await Patient.find()
   .select('name age phone cnic test result _id')
   .sort({admitDate: -1});
    res.json({ success: true, total: patients.length, data: patients });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. 1 patient ka dashboard CNIC se
app.get("/api/patient/dashboard/:cnic", async (req, res) => {
  try {
    const cnic = String(req.params.cnic).trim();

    if(!validCNICs.includes(cnic)){
      return res.status(404).json({ message: "Patient not found in 50 records" });
    }

    const patient = await Patient.findOne({cnic: cnic});
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json({ success: true, data: patient });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Naya patient add
app.post("/api/patient/add", async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    loadValidCNICs();
    res.json({ success: true, data: patient, message: "Patient add ho gaya ✅" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 5. Bill update
app.put("/api/patient/update-bill/:id", async (req, res) => {
  try {
    const { totalBill, rechargeDate, status } = req.body;
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      { totalBill, rechargeDate, status },
      { new: true }
    );
    res.json({ success: true, data: patient, message: "Updated ✅" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 6. Discharged patients
app.get("/api/patient/discharged", async (req, res) => {
  try {
    const patients = await Patient.find({status: "discharged"});
    res.json({ success: true, total: patients.length, data: patients });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 7. Sirf Record - name, age, cnic, phone
app.get("/api/patient/record/:cnic", async (req, res) => {
  try {
    const cnic = String(req.params.cnic).trim();
    if(!validCNICs.includes(cnic)) return res.status(404).json({ message: "Patient not found" });

    const patient = await Patient.findOne({cnic: cnic})
  .select('name age cnic phone admitDate status');
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json({ success: true, data: patient });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 8. Full Report - record + test + result sab
app.get("/api/patient/report/:cnic", async (req, res) => {
  try {
    const cnic = String(req.params.cnic).trim();
    if(!validCNICs.includes(cnic)) return res.status(404).json({ message: "Patient not found" });

    const patient = await Patient.findOne({cnic: cnic});
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json({ success: true, data: patient });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 9. 50 valid patient test karne ke liye
app.get("/api/test/valid-50", async (req, res) => {
  try {
    const patients = await Patient.find({}, { cnic: 1, name: 1, admitDate: 1, _id: 0 })
  .sort({ admitDate: -1 })
  .limit(50);

    res.json({
      success: true,
      total: patients.length,
      valid_cnic_list: patients,
      message: "Ye 50 CNIC dashboard me kaam karenge"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Multiple patients ka test/result 1 saath update
app.put("/api/patient/bulk-update", async (req, res) => {
  try {
    const { updates } = req.body;

    const bulkOps = updates.map(u => ({
      updateOne: {
        filter: { cnic: String(u.cnic).trim() },
        update: { $set: { test: u.test, result: u.result } }
      }
    }));

    const result = await Patient.bulkWrite(bulkOps);
    await loadValidCNICs(); // CNIC list refresh kar di
    res.json({
      success: true,
      matched: result.matchedCount,
      updated: result.modifiedCount,
      message: "Sab update ho gaye "
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Sab patients ke test/result random update karne ke liye
app.get("/api/patient/generate-lab-reports", async (req, res) => {
  try {
    const tests = [
      "Blood CBC",
      "MRI Brain",
      "CT Scan",
      "ECG",
      "X-Ray Chest",
      "Urine Test",
      "Blood Sugar",
      "Covid PCR",
      "Liver Function Test",
      "Kidney Function Test"
    ];

    const results = ["Normal", "Positive", "Negative"];

    const patients = await Patient.find();

    for (const patient of patients) {
      patient.test = tests[Math.floor(Math.random() * tests.length)];
      patient.result = results[Math.floor(Math.random() * results.length)];
      await patient.save();
    }

    await loadValidCNICs();
    res.json({
      success: true,
      message: "All lab reports generated successfully"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Server start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
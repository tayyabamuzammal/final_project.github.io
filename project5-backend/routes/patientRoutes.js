const express = require('express');
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');
const router = express.Router();

// 1. Patient Admit
router.post('/admit', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json({ success: true, data: patient });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Patient Dashboard - detail data
router.get('/dashboard/:cnic', async (req, res) => {
  try {
    const patient = await Patient.findOne({ cnic: req.params.cnic });
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.json({ success: true, data: patient });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Appointment book karo
router.post('/appointment', async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ success: true, data: appointment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

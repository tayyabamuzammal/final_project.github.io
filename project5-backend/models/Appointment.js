const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  patientName: String,
  doctorName: String,
  department: String,
  date: { type: Date, required: true },
  time: String,
  status: { type: String, enum: ['pending', 'done', 'cancelled'], default: 'pending' },
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);

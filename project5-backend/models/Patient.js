const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cnic: { type: String, required: true, unique: true }, // real CNIC
  phone: String,
  age: Number,
  gender: { type: String, enum: ['Male', 'Female'] },
  disease: String,
  doctor: String,
  
  // Detail wali dates
  admitDate: { type: Date, required: true },
  rechargeDate: { type: Date }, // jab payment recharge ho
  dischargeDate: { type: Date },
  
  // Payment
  dailyCharges: { type: Number, default: 5000 },
  totalBill: { type: Number, default: 0 },
  paidAmount: { type: Number, default: 0 },
  dueAmount: { type: Number, default: 0 },
  
  status: { type: String, enum: ['admitted', 'discharged'], default: 'admitted' }
}, { timestamps: true });

// Bill auto calculate
patientSchema.pre('save', function(next) {
  const endDate = this.dischargeDate || new Date();
  const days = Math.ceil((endDate - this.admitDate) / (1000*60*60*24));
  this.totalBill = days * this.dailyCharges;
  this.dueAmount = this.totalBill - this.paidAmount;
  next();
});

module.exports = mongoose.models.Patient || mongoose.model('Patient', patientSchema);

module.exports = mongoose.models.Patient || mongoose.model('Patient', patientSchema);

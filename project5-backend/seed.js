const mongoose = require('mongoose');
const Patient = require('./models/Patient');

// 👇 Yahan apna MongoDB link paste karo - wahi jo server.js me ha
const MONGO_URI = 'mongodb://mongo:oQzxMfNedqFQVCRdApjpxWmlAbIesqkF@thomas.proxy.rlwy.net:36019/project5?authSource=admin';

const firstNames = ['Ahmed','Fatima','Ali','Ayesha','Usman','Sara','Hassan','Zainab','Bilal','Hina','Omar','Maryam','Hamza','Laiba','Saad','Iqra','Farhan','Amna','Zain','Noor','Hammad','Sana','Abdullah','Areeba','Haris','Hafsa','Arsalan','Maira','Danish','Aiman'];

const lastNames = ['Khan','Malik','Ahmed','Sheikh','Rana','Butt','Mirza','Qureshi','Hashmi','Siddiqui','Rizvi','Chaudhry','Abbasi','Javed','Farooq','Shah','Ali','Hussain','Raza','Ansari'];

const diseases = ['Fever','Diabetes','Hypertension','Asthma','Fracture','Dengue','Typhoid','Migraine','Pneumonia','Malaria'];

const doctors = ['Dr. Ali','Dr. Sara','Dr. Ahmed','Dr. Fatima','Dr. Hassan','Dr. Ayesha','Dr. Bilal','Dr. Hina'];

const getRandomName = (i) => {
  const first = firstNames[i % firstNames.length];
  const last = lastNames[Math.floor(i / firstNames.length) % lastNames.length];
  return `${first} ${last}`;
};

const generateCNIC = (i) => {
  const middle = String(1000000 + i).padStart(7, '0');
  const last = i % 10;
  return `35202-${middle}-${last}`;
};

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Connected for seeding...');
    
    await Patient.deleteMany();
    console.log('Old data cleared...');
    
    const patients = Array.from({length: 100}, (_, i) => {
      const admitDate = new Date(2025, 8, (i % 28) + 1);
      const isDischarged = i % 3 === 0;
      const dischargeDate = isDischarged ? new Date(2025, 9, (i % 28) + 1) : null;
      const dailyCharges = 5000 + (i % 5) * 1000;
      const paidAmount = Math.floor(Math.random() * dailyCharges * 10);
      
      return {
        name: getRandomName(i),
        cnic: generateCNIC(i),
        phone: `0300${String(10000000 + i).slice(-8)}`,
        age: 18 + (i % 62),
        gender: i % 2 === 0 ? 'Male' : 'Female',
        disease: diseases[i % diseases.length],
        doctor: doctors[i % doctors.length],
        admitDate,
        dischargeDate,
        rechargeDate: new Date(admitDate.getTime() + 2*24*60*60*1000),
        dailyCharges,
        paidAmount,
        status: isDischarged ? 'discharged' : 'admitted'
      };
    });
    
    await Patient.insertMany(patients);
    console.log('✅ 100 patients inserted with real CNIC + bill details');
    console.log('Sample CNIC: 35202-1000000-0 to 35202-1000099-9');
    
  } catch (err) {
    console.error('Error:', err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
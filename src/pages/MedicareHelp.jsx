export default function MedicareHelp() {
  const tips = [
    {title:'Drink Water', desc:'Drink at least 8 glasses of water daily to stay hydrated.'},
    {title:'Balanced Diet', desc:'Eat fruits, vegetables, and protein in every meal.'},
    {title:'Exercise', desc:'Walk 30 minutes daily to keep your heart healthy.'},
    {title:'Sleep', desc:'Take 7-8 hours of sleep for better recovery and immunity.'},
    {title:'Hand Hygiene', desc:'Wash hands regularly to avoid infections.'},
    {title:'Regular Checkup', desc:'Visit doctor every 6 months for routine checkup.'},
    {title:'Avoid Smoking', desc:'Smoking increases risk of heart and lung diseases.'},
    {title:'Manage Stress', desc:'Practice meditation or deep breathing for 10 mins daily.'}
  ];

  return (
    <div style={{padding:'40px 20px', maxWidth:'900px', margin:'0 auto'}}>
      <h2 style={{color:'#d32f2f', marginBottom:'10px', textAlign:'center'}}>Medicare Health Tips</h2>
      <p style={{textAlign:'center', marginBottom:'30px'}}>Follow these suggestions for a healthier life</p>
      
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:'20px'}}>
        {tips.map((tip, i) => (
          <div key={i} style={{border:'1px solid #eee', padding:'20px', borderRadius:'8px', boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
            <h3 style={{color:'#d32f2f', marginBottom:'10px'}}>{i+1}. {tip.title}</h3>
            <p style={{color:'#555', lineHeight:'1.6'}}>{tip.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
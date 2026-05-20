export default function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img src={service.img} alt={service.title} className="mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.desc}</p>
    </div>
  );
}
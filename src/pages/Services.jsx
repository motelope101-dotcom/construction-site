import './Services.css';

const services = [
  {
    title: 'Excavation & Site Prep',
    description: 'We clear, grade, and prepare your land for solid foundations.',
    image: '/images/excavation.jpg',
  },
  {
    title: 'Framing & Structural Work',
    description: 'Precision framing for residential and commercial builds.',
    image: '/images/framing.jpg',
  },
  {
    title: 'Roofing & Exterior',
    description: 'Durable roofing and exterior finishes built to last.',
    image: '/images/roofing.jpg',
  },
];

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

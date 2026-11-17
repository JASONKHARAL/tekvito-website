
import "./Services.css";

const services = [
  {
    number: "01",
    title: "IT Consulting",
    description:
      "Strategic technology guidance, IT advisory and digital transformation support to help businesses make better technology decisions.",
  },
  {
    number: "02",
    title: "IT Staffing",
    description:
      "Connecting organizations with skilled IT professionals who match their technical requirements and business goals.",
  },
  {
    number: "03",
    title: "Talent Acquisition",
    description:
      "Finding, evaluating and connecting businesses with qualified candidates through a structured recruitment process.",
  },
  {
    number: "04",
    title: "Background Verification & Screening",
    description:
      "Responsible candidate screening, including identity, education, employment history and professional reference verification, with appropriate consent and in accordance with applicable laws.",
  },
  {
    number: "05",
    title: "Project Support",
    description:
      "Supporting technology projects through technical assistance, coordination and implementation support.",
  },
];

function Services() {
  return (
    <div className="services-page">

      <section className="services-hero">
        <span className="services-eyebrow">
          WHAT WE DO
        </span>

        <h1>
          Solutions that bring
          <span> technology and talent </span>
          together.
        </h1>

        <p>
          From technology consulting to talent acquisition
          and background verification, we help businesses
          build stronger teams and better solutions.
        </p>
      </section>

      <section className="services-list">
        <div className="services-heading">
          <span className="services-eyebrow">
            OUR SERVICES
          </span>
          <h2>How we help businesses move forward.</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              className="service-item"
              key={service.number}
            >
              <span className="service-number">
                {service.number}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="screening-section">
        <span className="services-eyebrow">
          TRUST & CONFIDENCE
        </span>

        <h2>
          Better hiring starts with
          responsible verification.
        </h2>

        <p>
          Our background screening approach is designed
          to support informed hiring decisions through
          relevant, accurate and appropriately authorized
          checks.
        </p>

        <ul>
          <li>Identity verification</li>
          <li>Education and qualification verification</li>
          <li>Employment history verification</li>
          <li>Professional reference checks</li>
        </ul>

        <p className="screening-note">
          Screening scope depends on the position,
          candidate consent and applicable laws.
        </p>
      </section>

    </div>
  );
}

export default Services;

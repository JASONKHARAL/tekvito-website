
import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      number: "01",
      title: "IT Consulting",
      description:
        "Technology guidance and practical expertise to help businesses plan, improve, and deliver IT projects.",
    },
    {
      number: "02",
      title: "IT Staffing",
      description:
        "Connect with skilled IT professionals for project-based, contract, and long-term staffing needs.",
    },
    {
      number: "03",
      title: "Talent Acquisition",
      description:
        "Find professionals whose experience and skills match your organization's technology needs.",
    },
    {
      number: "04",
      title: "Project Support",
      description:
        "Build the right project team with technical talent for on-site and remote engagements.",
    },
  ];

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot"></span>
            IT CONSULTING · STAFFING · TALENT
          </div>

          <h1>
            The right talent.
            <br />
            <span>The right technology.</span>
            <br />
            Better outcomes.
          </h1>

          <p className="hero-description">
            Tekvito connects businesses with technology professionals
            and IT expertise to help move projects forward — on-site
            and remotely.
          </p>

          <div className="hero-actions">
            <Link className="primary-button" to="/employers">
              Find IT Talent <span>↗</span>
            </Link>

            <Link className="secondary-button" to="/careers">
              Explore Careers <span>→</span>
            </Link>
          </div>

          <div className="hero-note">
            <span>✦</span> Connecting businesses and technology talent
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>

          <div className="visual-card card-one">
            <span className="visual-icon">⌘</span>
            <div>
              <strong>Technology</strong>
              <small>IT Consulting</small>
            </div>
          </div>

          <div className="visual-card card-two">
            <span className="visual-icon">◈</span>
            <div>
              <strong>People</strong>
              <small>Talent & Staffing</small>
            </div>
          </div>

          <div className="visual-center">
            <div className="center-ring">
              <span>t<span className="cyan">.</span></span>
            </div>
            <p>TECHNOLOGY MEETS TALENT</p>
          </div>

          <div className="visual-caption">BUILDING WHAT'S NEXT</div>
        </div>
      </section>

      <section className="trust-strip">
        <p>ONE PARTNER FOR YOUR TECHNOLOGY AND TALENT NEEDS</p>
        <div>
          <span>CONSULTING</span>
          <span>STAFFING</span>
          <span>PROJECT SUPPORT</span>
          <span>CAREER OPPORTUNITIES</span>
        </div>
      </section>

      <section className="section services">
        <div className="section-heading">
          <div>
            <span className="section-label">WHAT WE DO</span>
            <h2>Solutions built around<br />your next move.</h2>
          </div>

          <p>
            We bring technology consulting and talent solutions
            together to help organizations meet their goals.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/services">Learn more <span>↗</span></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;


import { useState } from "react";
import "./App.css";

function App() {const [form, setForm] = useState({
  enquiry_type: "Employer",
  full_name: "",
  email: "",
  company: "",
  message: ""
});

const [status, setStatus] = useState("");
const [submitting, setSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  setStatus("");

  try {
    const response = await fetch("http://localhost:5000/api/enquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Submission failed");
    }

    setStatus("Thank you! Your enquiry has been submitted.");

    setForm({
      enquiry_type: "Employer",
      full_name: "",
      email: "",
      company: "",
      message: ""
    });
  } catch (error) {
    setStatus(error.message || "Could not connect to the server.");
  } finally {
    setSubmitting(false);
  }
};
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
    <div className="website">
      <header className="navbar">
        <a className="logo" href="#home">
          tekvito<span>·</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#employers">For Employers</a>
          <a href="#careers">Careers</a>
          <a href="#about">About Us</a>
        </nav>

        <a className="nav-button" href="#contact">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
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
              <a className="primary-button" href="#employers">
                Find IT Talent <span>↗</span>
              </a>
              <a className="secondary-button" href="#careers">
                Explore Careers <span>→</span>
              </a>
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

        <section className="section services" id="services">
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
                <a href="#contact">Learn more <span>↗</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="audience-section" id="employers">
          <div className="audience-panel employer-panel">
            <span className="section-label">FOR EMPLOYERS</span>
            <h2>Build your team.<br />Move your projects forward.</h2>
            <p>
              Looking for technology talent? Tell us about your project
              and the skills your team needs.
            </p>
            <a className="light-button" href="#contact">
              Discuss Your Needs <span>↗</span>
            </a>
          </div>

          <div className="audience-panel careers-panel" id="careers">
            <span className="section-label">FOR PROFESSIONALS</span>
            <h2>Your skills.<br />Your next opportunity.</h2>
            <p>
              Explore potential IT opportunities and connect with
              a team that understands technology careers.
            </p>
            <a className="outline-button" href="#contact">
              Explore Opportunities <span>↗</span>
            </a>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-mark">t<span>.</span></div>
          <div>
            <span className="section-label">ABOUT TEKVITO</span>
            <h2>People and technology,<br />working together.</h2>
            <p>
              Tekvito LLC is an IT consulting and staffing company focused
              on connecting organizations with technology talent.
              We support business needs across on-site and remote
              project environments.
            </p>
          </div>
        </section>

        
<section className="contact-section" id="contact">
  <span className="section-label">LET'S CONNECT</span>
  <h2>Let's start a conversation.</h2>
  <p>
    Tell us what you need. Whether you're hiring IT talent
    or exploring your next career opportunity, we're here to listen.
  </p>

  <form className="enquiry-form" onSubmit={handleSubmit}>
    <label>I'm contacting Tekvito as</label>
    <select
      value={form.enquiry_type}
      onChange={(e) =>
        setForm({ ...form, enquiry_type: e.target.value })
      }
    >
      <option value="Employer">An Employer / Company</option>
      <option value="Job Seeker">An IT Professional / Job Seeker</option>
    </select>

    <label>Full name *</label>
    <input
      type="text"
      required
      placeholder="Your full name"
      value={form.full_name}
      onChange={(e) =>
        setForm({ ...form, full_name: e.target.value })
      }
    />

    <label>Email address *</label>
    <input
      type="email"
      required
      placeholder="you@example.com"
      value={form.email}
      onChange={(e) =>
        setForm({ ...form, email: e.target.value })
      }
    />

    <label>Company name (optional)</label>
    <input
      type="text"
      placeholder="Your company"
      value={form.company}
      onChange={(e) =>
        setForm({ ...form, company: e.target.value })
      }
    />

    <label>How can we help? *</label>
    <textarea
      required
      rows="5"
      placeholder="Tell us about your project or career interests..."
      value={form.message}
      onChange={(e) =>
        setForm({ ...form, message: e.target.value })
      }
    />

    <button
      type="submit"
      className="primary-button"
      disabled={submitting}
    >
      {submitting ? "Submitting..." : "Submit Enquiry"}
      <span>↗</span>
    </button>

    {status && <p className="form-status">{status}</p>}
  </form>
</section>

      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          tekvito<span>·</span>
        </a>
        <p>Technology. Talent. Possibility.</p>
        <span>© {new Date().getFullYear()} Tekvito LLC. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;

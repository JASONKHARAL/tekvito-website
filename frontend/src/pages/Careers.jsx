
import { Link } from "react-router-dom";
import "./Careers.css";

function Careers() {
  return (
    <div className="careers-page">

      {/* Hero */}
      <section className="careers-hero">
        <span className="careers-eyebrow">
          CAREERS AT TEKVITO
        </span>

        <h1>
          Build your future.
          <span> Grow your possibilities.</span>
        </h1>

        <p>
          We believe great people create great possibilities.
          Explore a career where technology, talent and
          innovation come together.
        </p>

        <Link to="/contact" className="careers-button">
          Connect With Us ↗
        </Link>
      </section>

      {/* Introduction */}
      <section className="careers-intro">
        <div>
          <span className="careers-eyebrow">
            YOUR JOURNEY STARTS HERE
          </span>

          <h2>
            More than a job.
            An opportunity to grow.
          </h2>
        </div>

        <p>
          At Tekvito, we value curiosity, commitment
          and the willingness to learn. We aim to create
          opportunities for people who want to contribute,
          develop their skills and make a meaningful impact.
        </p>
      </section>

      {/* Career Areas */}
      <section className="career-areas">
        <div className="careers-section-heading">
          <span className="careers-eyebrow">
            EXPLORE CAREER AREAS
          </span>

          <h2>Find where you belong.</h2>
        </div>

        <div className="career-grid">

          <article className="career-card">
            <span>01</span>
            <h3>Technology & IT</h3>
            <p>
              Software development, IT consulting,
              technical support and technology projects.
            </p>
          </article>

          <article className="career-card">
            <span>02</span>
            <h3>Talent & Recruitment</h3>
            <p>
              Talent acquisition, recruitment,
              candidate coordination and screening.
            </p>
          </article>

          <article className="career-card">
            <span>03</span>
            <h3>Business & Operations</h3>
            <p>
              Business development, client relations,
              operations and project coordination.
            </p>
          </article>
        </div>
      </section>

      {/* Our Approach */}
      <section className="careers-approach">
        <span className="careers-eyebrow">
          OUR APPROACH
        </span>

        <h2>Grow with purpose.</h2>

        <div className="approach-grid">
          <div>
            <h3>Continuous Learning</h3>
            <p>
              We value curiosity and continuous
              professional development.
            </p>
          </div>

          <div>
            <h3>Collaboration</h3>
            <p>
              We believe strong teamwork creates
              better outcomes.
            </p>
          </div>

          <div>
            <h3>Innovation</h3>
            <p>
              We welcome fresh ideas and thoughtful
              approaches to challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="careers-cta">
        <span className="careers-eyebrow">
          YOUR NEXT CHAPTER
        </span>

        <h2>
          Interested in joining Tekvito?
        </h2>

        <p>
          Introduce yourself and tell us about your
          skills, interests and career goals.
        </p>

        <Link to="/contact" className="careers-button">
          Get in Touch ↗
        </Link>
      </section>

    </div>
  );
}

export default Careers;

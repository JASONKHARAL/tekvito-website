import { Link } from "react-router-dom";
import "./Employers.css";

function Employers() {
  return (
    <div className="employers-page">

      {/* Hero */}
      <section className="employers-hero">
        <span className="employers-eyebrow">
          FOR EMPLOYERS
        </span>

        <h1>
          The right talent.
          <span> The right technology.</span>
          Better outcomes.
        </h1>

        <p>
          We help businesses access skilled professionals
          and practical technology solutions to support
          growth, innovation and long-term success.
        </p>

        <Link to="/contact" className="employers-button">
          Discuss Your Requirements ↗
        </Link>
      </section>

      {/* Introduction */}
      <section className="employers-intro">
        <div>
          <span className="employers-eyebrow">
            YOUR BUSINESS PARTNER
          </span>

          <h2>
            Your business goals deserve
            the right support.
          </h2>
        </div>

        <p>
          Finding the right people and choosing the
          right technology can make a significant
          difference to business performance.

          Tekvito brings talent solutions and technology
          services together to help organizations address
          their evolving business needs.
        </p>
      </section>

      {/* Solutions */}
      <section className="employer-solutions">
        <span className="employers-eyebrow">
          HOW WE SUPPORT BUSINESSES
        </span>

        <h2>Solutions built around your needs.</h2>

        <div className="employer-solutions-grid">

          <article className="employer-solution">
            <span>01</span>
            <h3>IT Staffing</h3>
            <p>
              Access technology professionals with
              skills and experience aligned with
              your business requirements.
            </p>
          </article>

          <article className="employer-solution">
            <span>02</span>
            <h3>Talent Acquisition</h3>
            <p>
              Recruitment support to help identify
              and connect with suitable candidates
              for your organization.
            </p>
          </article>

          <article className="employer-solution">
            <span>03</span>
            <h3>Background Verification</h3>
            <p>
              Support informed hiring decisions through
              consent-based identity, education,
              employment and reference checks.
            </p>
          </article>

          <article className="employer-solution">
            <span>04</span>
            <h3>IT Consulting</h3>
            <p>
              Technology guidance and IT consulting
              to support business decisions and
              digital initiatives.
            </p>
          </article>

          <article className="employer-solution">
            <span>05</span>
            <h3>Project Support</h3>
            <p>
              Technical and coordination support
              to help businesses move projects
              forward.
            </p>
          </article>

        </div>
      </section>

      {/* Hiring confidence */}
      <section className="employer-verification">
        <div>
          <span className="employers-eyebrow">
            HIRING WITH CONFIDENCE
          </span>

          <h2>
            Make informed hiring decisions.
          </h2>

          <p>
            The right hiring decision starts with
            relevant and responsible verification.
            Our screening approach can support
            employers with appropriate checks based
            on the role and applicable requirements.
          </p>
        </div>

        <div className="verification-list">
          <div>Identity verification</div>
          <div>Education verification</div>
          <div>Employment history checks</div>
          <div>Professional reference checks</div>
        </div>
      </section>

      {/* CTA */}
      <section className="employers-cta">
        <span className="employers-eyebrow">
          LET'S WORK TOGETHER
        </span>

        <h2>
          Tell us what your business needs.
        </h2>

        <p>
          Whether you need skilled professionals,
          technology expertise or project support,
          let's explore how Tekvito can help.
        </p>

        <Link to="/contact" className="employers-button">
          Start a Conversation ↗
        </Link>
      </section>

    </div>
  );
}

export default Employers;

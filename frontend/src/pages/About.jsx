
import "./About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <span className="about-eyebrow">
          ABOUT TEKVITO
        </span>

        <h1>
          Technology. Talent.
          <span> Possibility.</span>
        </h1>

        <p>
          We bring technology and people together to
          help businesses innovate, grow, and achieve
          better outcomes.
        </p>
      </section>

      <section className="about-intro">
        <div>
          <span className="about-eyebrow">WHO WE ARE</span>
          <h2>
            Connecting businesses with
            technology and talent.
          </h2>
        </div>

        <p>
          Tekvito is a technology and talent solutions
          company focused on helping businesses solve
          challenges, access expertise, and build for
          the future.

          Through technology services and talent
          solutions, we help organizations turn
          opportunities into meaningful outcomes.
        </p>
      </section>

      <section className="about-pillars">
        <article className="about-pillar">
          <span>01</span>
          <h3>Technology Solutions</h3>
          <p>
            We support businesses with IT consulting,
            technology services, and project support
            that help them move forward.
          </p>
        </article>

        <article className="about-pillar">
          <span>02</span>
          <h3>Talent Solutions</h3>
          <p>
            We connect organizations with skilled
            professionals through IT staffing and
            talent acquisition services.
          </p>
        </article>
      </section>

      <section className="about-purpose">
        <div>
          <span className="about-eyebrow">OUR MISSION</span>
          <h2>Empowering businesses through
            technology and talent.</h2>
          <p>
            To empower businesses through reliable
            technology solutions and access to
            exceptional talent.
          </p>
        </div>

        <div>
          <span className="about-eyebrow">OUR VISION</span>
          <h2>Building possibilities for the future.</h2>
          <p>
            To become a trusted global partner for
            technology innovation and talent
            development.
          </p>
        </div>
      </section>

      <section className="about-values">
        <span className="about-eyebrow">WHAT GUIDES US</span>
        <h2>Our Values</h2>

        <div className="values-grid">
          {[
            "Innovation",
            "Integrity",
            "People First",
            "Excellence",
            "Partnership",
          ].map((value) => (
            <div className="value-item" key={value}>
              {value}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;


import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    enquiry_type: "Employer",
    full_name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");
    setSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      setStatus("Thank you! Your enquiry has been submitted.");

      setForm({
        enquiry_type: "Employer",
        full_name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <span className="contact-eyebrow">
          CONTACT TEKVITO
        </span>

        <h1>
          Let's start a
          <span> conversation.</span>
        </h1>

        <p>
          Whether you're looking for technology solutions,
          skilled professionals or career opportunities,
          we'd like to hear from you.
        </p>
      </section>

      <section className="contact-content">

        <div className="contact-information">
          <span className="contact-eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            How can we help you?
          </h2>

          <p>
            Tell us what you're looking for. Our team
            will review your enquiry and get back to you.
          </p>

          <div className="contact-highlight">
            Technology. Talent. Possibility.
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <h3>Send us an enquiry</h3>

          <label htmlFor="enquiry_type">
            I am interested in
          </label>

          <select
            id="enquiry_type"
            name="enquiry_type"
            value={form.enquiry_type}
            onChange={handleChange}
          >
            <option value="Employer">Business / Employer enquiry</option>
            <option value="Career">Career opportunity</option>
            <option value="Other">Other enquiry</option>
          </select>

          <label htmlFor="full_name">Full name</label>

          <input
            id="full_name"
            name="full_name"
            type="text"
            value={form.full_name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />

          <label htmlFor="email">Email address</label>

          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="company">Company (optional)</label>

          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company name"
          />

          <label htmlFor="message">How can we help?</label>

          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            rows="5"
            required
          />

          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Enquiry ↗"}
          </button>

          {status && (
            <p className="contact-status" role="status">
              {status}
            </p>
          )}

        </form>
      </section>

    </div>
  );
}

export default Contact;

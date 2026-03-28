import { useState } from "react";
import { useScrollReveal } from "../hooks";
import { social } from "../data/portfolio";
import Footer from "../components/Footer";
import "./Contact.css";

const socialLabels = {
  LinkedIn: "Connect professionally",
  GitHub: "Browse my code",
};

// ── Contact form ──────────────────────────────────────────────────────────────
function ContactForm() {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (key) => (e) =>
    setFields((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!fields.firstName.trim()) errs.firstName = "Required";
    if (!fields.email.trim()) errs.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(fields.email)) errs.email = "Invalid email";
    if (!fields.message.trim()) errs.message = "Required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    // In production: POST to your email API / form service here
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success" role="alert" aria-live="polite">
        <span className="form-success__icon" aria-hidden="true">
          ✦
        </span>
        <p className="form-success__title">Message sent!</p>
        <p className="form-success__body">
          Thank you for reaching out, I'll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="firstName">
            First name{" "}
            <span className="required" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="firstName"
            type="text"
            className="form-input"
            placeholder="Jane"
            value={fields.firstName}
            onChange={update("firstName")}
            aria-required="true"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? "err-firstName" : undefined}
            autoComplete="given-name"
          />
          {errors.firstName && (
            <span
              id="err-firstName"
              role="alert"
              style={{ color: "var(--clr-purple)", fontSize: ".75rem" }}
            >
              {errors.firstName}
            </span>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="lastName">
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            className="form-input"
            placeholder="Doe"
            value={fields.lastName}
            onChange={update("lastName")}
            autoComplete="family-name"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email{" "}
          <span className="required" aria-hidden="true">
            *
          </span>
        </label>
        <input
          id="email"
          type="email"
          className="form-input"
          placeholder="jane@example.com"
          value={fields.email}
          onChange={update("email")}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-email" : undefined}
          autoComplete="email"
        />
        {errors.email && (
          <span
            id="err-email"
            role="alert"
            style={{ color: "var(--clr-purple)", fontSize: ".75rem" }}
          >
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className="form-input"
          placeholder="Project inquiry, collaboration, etc."
          value={fields.subject}
          onChange={update("subject")}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">
          Message{" "}
          <span className="required" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          className="form-textarea"
          placeholder="Tell me about your project or what you have in mind…"
          value={fields.message}
          onChange={update("message")}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
        />
        {errors.message && (
          <span
            id="err-message"
            role="alert"
            style={{ color: "var(--clr-purple)", fontSize: ".75rem" }}
          >
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className="btn btn-primary form-submit">
        Send message →
      </button>
    </form>
  );
}

// ── Contact Page ──────────────────────────────────────────────────────────────
export default function Contact() {
  useScrollReveal();

  return (
    <main id="main-content" className="contact-page page-enter">
      <div className="contact-page__inner">
        {/* Left — intro + social */}
        <div>
          <p className="label reveal">Let's connect</p>
          <h1 className="contact-page__title reveal reveal-d1">
            Let's start
            <br />
            <em>creating</em>
            <br />
            together
          </h1>
          <p className="contact-page__intro reveal reveal-d2">
            I'm always open to hearing about new projects, collaborations, or
            just a friendly conversation about design. Fill out the form or
            reach me directly through one of these channels.
          </p>

          <nav
            className="contact-page__socials reveal reveal-d3"
            aria-label="Social and professional links"
          >
            {social.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-page__social"
                aria-label={`${label} — ${socialLabels[label]}`}
              >
                <div className="contact-page__social-left">
                  <span>{label}</span>
                  <span className="contact-page__social-label">
                    {socialLabels[label]}
                  </span>
                </div>
                <span className="contact-page__social-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
            <a
              href="mailto:valeria@example.com"
              className="contact-page__social"
              aria-label="Send email directly to Valeria"
            >
              <div className="contact-page__social-left">
                <span>Email</span>
                <span className="contact-page__social-label">
                  valeria@example.com
                </span>
              </div>
              <span className="contact-page__social-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </nav>
        </div>

        {/* Right — form */}
        <div className="reveal reveal-d2">
          <div className="contact-page__form-wrap">
            <h2 className="contact-page__form-title">Send a message</h2>
            <p className="contact-page__form-sub">
              I typically respond within 1–2 business days.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

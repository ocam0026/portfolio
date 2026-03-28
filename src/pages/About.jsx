import { useScrollReveal } from "../hooks";
import { skills } from "../data/portfolio";
import ContactCTA from "../components/ContactCTA";
import "./About.css";

// ── Photo placeholders ────────────────────────────────────────────────────────
const photoGradients = [
  ["#C8B4E8", "#8B6CC4", "#4E2D9A"],
  ["#D4C4F0", "#9B7ED0", "#5A3FA0"],
  ["#B8A0E0", "#7B5EA7", "#3D2070"],
];

function PhotoPlaceholder({ gradients, label }) {
  const [a, b, c] = gradients;
  const id = `photo-${a.slice(1)}`;
  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={a} />
          <stop offset="55%" stopColor={b} />
          <stop offset="100%" stopColor={c} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />
      <circle cx="200" cy="110" r="52" fill="rgba(255,255,255,.22)" />
      <rect
        x="130"
        y="176"
        width="140"
        height="100"
        rx="20"
        fill="rgba(255,255,255,.16)"
      />
      <circle cx="330" cy="50" r="40" fill="rgba(255,255,255,.07)" />
      <circle cx="60" cy="260" r="50" fill="rgba(255,255,255,.06)" />
    </svg>
  );
}

// ── Values / fun facts data ───────────────────────────────────────────────────
const values = [
  {
    icon: "🔍",
    title: "Research-driven",
    desc: "Every design decision is rooted in user research and real data, not assumptions.",
  },
  {
    icon: "♿",
    title: "Accessibility first",
    desc: "Inclusive design it's a core part of how I approach every project.",
  },
  {
    icon: "🤝",
    title: "Collaborative",
    desc: "I thrive working in collaboration with different teams in order the achieve a goal in common.",
  },
  {
    icon: "📚",
    title: "Lifelong learner",
    desc: "I'm always looking for opportunities to learn something new and refine my skills.",
  },
];

// ── About Page ────────────────────────────────────────────────────────────────
export default function About() {
  useScrollReveal();

  return (
    <main id="main-content" className="about-page page-enter">
      {/* ── Hero / Bio ── */}
      <div className="about-page__hero">
        {/* Left — text */}
        <div>
          <p className="label reveal">About me</p>
          <h1 className="about-page__title reveal reveal-d1">Hi there!</h1>

          <div className="about-page__bio">
            <p className="reveal reveal-d2">
              I am a UI/UX designer passionate about creating intuitive,
              user-centred experiences. My knowledge in development allows me to
              combine design thinking with technical skills to craft interfaces
              that are both functional and eye-catching.
            </p>
            <p className="reveal reveal-d2">
              I enjoy working collaboratively and learning from others while
              continuously refining my skills in research, prototyping, and
              visual design.
            </p>
            <p className="reveal reveal-d3">
              Outside of design, I enjoy reading and spending time outdoors
              whenever the weather allows.
            </p>

            <div className="about-page__bio-actions reveal reveal-d3">
              <a href="/contact" className="btn btn-primary">
                Get in touch
              </a>
              {/* <a
                href="/resume.pdf"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download résumé PDF"
              >
                Download resume ↓
              </a> */}
            </div>
          </div>
        </div>

        {/* Right — photo stack */}
        <div
          className="about-page__photos reveal reveal-d2"
          aria-label="Photos of Valeria Ocampo"
        >
          <img
            src="/img/portfolio.png"
            alt="Valeria portfolio picture"
            className="about-page__photo"
          />
          <img
            src="/img/valeria.png"
            alt="Valeria portfolio picture"
            className="about-page__photo"
          />
          <img
            src="/img/valeria2.jpg"
            alt="Valeria portfolio picture"
            className="about-page__photo"
          />
        </div>
      </div>

      {/* ── Skills ── */}
      <section className="about-page__skills" aria-label="Skills and expertise">
        <div className="about-page__skills-inner">
          <div className="about-page__skills-header">
            <div>
              <p className="label reveal">Expertise</p>
              <h2 className="display-title reveal reveal-d1">
                How I add value
              </h2>
            </div>
            <p className="lead reveal reveal-d2">
              A versatile toolkit spanning UX/UI design, research, and front-end
              development, I bridge the gap between user needs and business
              goals on every project.
            </p>
          </div>

          <div className="about-page__skills-grid">
            {Object.values(skills).map((group, i) => (
              <div
                key={group.title}
                className={`about-page__skill-card reveal reveal-d${(i % 4) + 1}`}
              >
                <span className="about-page__skill-icon" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="about-page__skill-title">{group.title}</h3>
                <div
                  className="about-page__skill-items"
                  role="list"
                  aria-label={`${group.title} skills`}
                >
                  {group.items.map((item) => (
                    <span key={item} className="chip" role="listitem">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-page__values" aria-label="Values and approach">
        <p className="label reveal">What drives me</p>
        <h2 className="display-title reveal reveal-d1">
          My approach to design
        </h2>
        <p className="lead reveal reveal-d2">
          Good design isn't just about how something looks, it's about how it
          works, who it works for, and why it matters.
        </p>

        <div className="about-page__values-grid">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`about-page__value reveal reveal-d${(i % 4) + 1}`}
            >
              <span className="about-page__value-icon" aria-hidden="true">
                {v.icon}
              </span>
              <h3 className="about-page__value-title">{v.title}</h3>
              <p className="about-page__value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}

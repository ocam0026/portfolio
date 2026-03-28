import { useScrollReveal } from "../hooks";
import { projects, skills } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import ContactCTA from "../components/ContactCTA";
import "./Home.css";

// ── Home ──────────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <main id="main-content" className="page-enter">
      {/* ── Hero ── */}
      <section className="hero" aria-label="Introduction">
        <div className="hero__bg" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />

        <div className="hero__inner">
          <div>
            <h1 className="hero__title">
              UI/UX
              <br />
              <em>Designer</em>
            </h1>
            <p className="hero__sub">
              Every great design tells a story, get to know mine
            </p>
            <div className="hero__actions">
              <a href="/work" className="btn btn-primary">
                Explore my work
              </a>
              <a href="/contact" className="btn btn-outline">
                Let's talk
              </a>
            </div>
          </div>
          <div className="home-about__visual reveal reveal-d2">
            <div
              className="hero__img"
              role="img"
              aria-label="Portrait of Valeria Ocampo"
            >
              <img src="/img/portfolio.png" alt="Valeria image" />
            </div>
          </div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span className="hero__scroll-line" />
          Scroll to explore
        </div>
      </section>

      {/* ── Work preview ── */}
      <section className="home-work" aria-label="Selected work">
        <div className="home-work__inner">
          <div className="home-work__header">
            <div>
              <p className="label reveal">Selected Work</p>
              <h2 className="display-title reveal reveal-d1">
                Projects I'm proud of
              </h2>
            </div>
            <a href="/work" className="btn btn-ghost reveal">
              View all projects{" "}
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <div className="home-work__grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills strip ── */}
      <section className="home-skills" aria-label="Skills overview">
        <div className="home-skills__inner">
          <p className="label reveal">How I add value</p>
          <h2 className="display-title reveal reveal-d1">My Experience</h2>
          <p className="lead reveal reveal-d2">
            UI/UX designer passionate about creating intuitive user-centered
            experiences. My knowledge in development allows me to combine design
            thinking with technical skills to craft interfaces that are
            functional and eye-catching.
          </p>
          <p className="lead reveal reveal-d2">
            I was selected to be the Lead Designer on a capstone project, this
            gave me the experience managing a whole team of designers and
            collaborating closely with developers and clients.
          </p>

          <div className="home-skills__grid">
            {Object.values(skills).map((group, i) => (
              <div
                key={group.title}
                className={`home-skills__card reveal reveal-d${(i % 4) + 1}`}
              >
                <span className="home-skills__icon" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="home-skills__title">{group.title}</h3>
                <div
                  className="home-skills__list"
                  role="list"
                  aria-label={`${group.title} skills`}
                >
                  {group.items.slice(0, 5).map((item) => (
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

      {/* ── About teaser ── */}
      <section className="home-about" aria-label="About me">
        <div className="home-about__inner">
          <div className="home-about__text">
            <p className="label reveal">My Story</p>
            <h2 className="display-title reveal reveal-d1">
              Crafting impactful digital experiences
            </h2>
            <div className="rule reveal reveal-d1" aria-hidden="true" />

            <p className="reveal reveal-d2">
              I am Diana Ocampo, a UI/UX designer passionate about creating
              intuitive user-centered experiences. My knowledge in development
              allows me to combine design thinking with technical skills to
              craft interfaces that are functional and eye-catching.
            </p>
            <p className="reveal reveal-d2">
              I enjoy working collaboratively and learning from others while
              continuously refining my skills in research, prototyping and
              visual design.
            </p>
            <p className="reveal reveal-d2">
              Outside of design, I enjoy reading and spending time outdoors
              whenever the weather allows.
            </p>

            <div className="home-about__actions reveal reveal-d3">
              <a href="/about" className="btn btn-primary">
                About me
              </a>
              <a href="/contact" className="btn btn-outline">
                Work with me
              </a>
            </div>
          </div>

          <div className="home-about__visual reveal reveal-d2">
            <div
              className="home-about__img"
              role="img"
              aria-label="Portrait of Valeria Ocampo"
            >
              <img src="/img/valeria.png" alt="Valeria image" />;
            </div>
            <div
              className="home-about__badge"
              aria-label="Based in Ottawa, Canada"
            >
              <p className="home-about__badge-title">📍 Ottawa, Canada</p>
              <p className="home-about__badge-sub">
                Open to remote &amp; hybrid roles
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}

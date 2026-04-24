import { useScrollReveal, useScrolled } from "../hooks";
import { projects, skills } from "../data/portfolio";
import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import ContactCTA from "../components/ContactCTA";
import "./Home.css";

// ── Home ──────────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  useEffect(() => {
  const section  = document.querySelector(".home-work");
  const circle1  = document.querySelector(".home-work__circle--1");
  const circle2  = document.querySelector(".home-work__circle--2");
  const circle3  = document.querySelector(".home-work__circle--3");
  const circle4  = document.querySelector(".home-work__circle--4");
  const circle5  = document.querySelector(".home-work__circle--5");
  const circle6  = document.querySelector(".home-work__circle--6");
  const circle7  = document.querySelector(".home-work__circle--7");
  const circle8  = document.querySelector(".home-work__circle--8");
  if (!section || !circle1 || !circle2 || !circle3) return;

  const handleScroll = () => {
    const rect     = section.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
    circle1.style.transform = `translateY(${progress * -80}px) scale(${1 + progress * 0.12})`;
    circle2.style.transform = `translateY(${progress *  50}px) scale(${1 + progress * 0.08})`;
    circle3.style.transform = `translateY(${progress * -35}px) scale(${1 + progress * 0.06})`;
    circle4.style.transform = `translateY(${progress *  60}px) scale(${1 + progress * 0.07})`;
    circle5.style.transform = `translateY(${progress * -45}px) scale(${1 + progress * 0.05})`;
    circle6.style.transform = `translateY(${progress *  30}px) scale(${1 + progress * 0.04})`;
    circle8.style.transform = `translateY(${progress *  40}px) scale(${1 + progress * 0.06})`;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <main id="main-content" className="page-enter">
      {/* ── Hero ── */}
      <section className="hero" aria-label="Introduction">
        <div className="hero__bg" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />

        <div className="hero__inner">
          <div>
            <h1 className="hero__title">
              Diana Ocampo
              <br />
              <em>UI/UX Designer</em>
            </h1>
            <p className="hero__sub">
              AI-first designer, human-centered thinking
            </p>
            <div className="hero__actions">
              <a href="/work" className="btn btn-primary">
                Explore my work
              </a>
              <a href="/simplecontact" className="btn btn-outline">
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
        <div className="home-work__circle home-work__circle--1" aria-hidden="true" />
  <div className="home-work__circle home-work__circle--2" aria-hidden="true" />
  <div className="home-work__circle home-work__circle--3" aria-hidden="true" />
  <div className="home-work__circle home-work__circle--4" aria-hidden="true" />
  <div className="home-work__circle home-work__circle--5" aria-hidden="true" />
  <div className="home-work__circle home-work__circle--6" aria-hidden="true" />
  <div className="home-work__circle home-work__circle--8" aria-hidden="true" />
        <div className="home-work__inner">
          <div className="home-work__header">
            <div>
              <p className="label reveal">Selected Work</p>
              <div className="home-work_header_title">
              <h2 className="display-title reveal reveal-d1">
                Projects I'm
              </h2>
              <h2 className="display-title2 reveal reveal-d1">
                proud of
              </h2>
              </div>
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
              <a href="/simplecontact" className="btn btn-outline">
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

import { useScrollReveal } from "../hooks";
import { projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import ContactCTA from "../components/ContactCTA";
import "./Work.css";

export default function Work() {
  useScrollReveal();

  return (
    <main id="main-content" className="work-page page-enter">

      {/* ── Page hero ── */}
      <header className="work-page__hero">
        <p className="label reveal">Portfolio</p>
        <h1 className="work-page__title reveal reveal-d1">
          My <em>Work</em>
        </h1>
        <p className="work-page__subtitle reveal reveal-d2">
          A selection of projects that showcase my approach to user-centred design,
          problem solving, and creating intuitive digital experiences.
        </p>
      </header>

      {/* ── Projects grid ── */}
      <div className="work-page__grid-wrap">
        <div className="work-page__grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>

      <ContactCTA />
    </main>
  );
}

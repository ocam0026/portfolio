import "./ProjectCard.css";

function Thumbnail({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageFallbackLabel}
        className="project-card__img"
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div
      className="project-card__placeholder"
      role="img"
      aria-label={project.imageFallbackLabel}
    >
      <span className="project-card__placeholder-icon" aria-hidden="true">✦</span>
      <span className="project-card__placeholder-label">{project.title}</span>
    </div>
  );
}

export default function ProjectCard({ project, delay = 0 }) {
  const delayClass = delay ? ` reveal-d${delay}` : "";
  return (
    <a
      href={`/work/${project.id}`}
      className={`project-card reveal${delayClass}`}
      aria-label={`View case study: ${project.title} — ${project.subtitle}`}
    >
      <div className="project-card__thumb">
        <Thumbnail project={project} />
      </div>

      <div className="project-card__body">
        <p className="project-card__tag">{project.tag}</p>
        <h3 className="project-card__title">
          {project.title}
          <span>{project.subtitle}</span>
        </h3>
        <p className="project-card__desc">{project.shortDesc}</p>
        <span className="project-card__arrow" aria-hidden="true">
          View case study →
        </span>
      </div>
    </a>
  );
}

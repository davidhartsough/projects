export default function Project({
  id,
  title,
  description,
  link,
  github,
}: {
  id: string;
  title: string;
  description: string;
  link: string;
  github: string;
}) {
  return (
    <div className="project">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="project-image-link"
      >
        <img src={`./images/${id}.png`} alt={title} className="project-image" />
      </a>
      <div className="project-text">
        <div>
          <p className="project-title">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="project-title-link"
            >
              {title}
            </a>
          </p>
          <p className="project-description">{description}</p>
        </div>
        <div className="project-links">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            Check it out
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

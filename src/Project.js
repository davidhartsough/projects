import React from "react";

export default function Project({
  id,
  title,
  description,
  link,
  android,
  github,
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
          {android ? (
            <>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Web app
              </a>
              <a
                href={android}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Android app
              </a>
            </>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Check it out
            </a>
          )}
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

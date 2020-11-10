import React from "react";

export default function Project({ id, title, description, link, android }) {
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
        {android ? (
          <div className="project-links">
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
          </div>
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
      </div>
    </div>
  );
}

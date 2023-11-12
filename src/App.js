import React from "react";
import Project from "./Project";
import projects from "./projects";
import "./App.css";

export default function App() {
  return (
    <div className="pattern">
      <div className="index">
        <div className="central">
          <h1 className="title">
            Projects
            <span className="separator"> • </span>
            <a href="https://davidhartsough.com/" className="subtitle-link">
              David Hartsough
            </a>
          </h1>
          <div className="projects">
            {projects.map(
              ({ id, title, description, link, android, github }) => (
                <Project
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  link={link}
                  android={android}
                  github={github}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

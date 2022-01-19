import React from 'react';
import { FaHome } from "react-icons/fa";

const Projects = () => {
  return <>
 <header className="projects-hero">
          {/* section title */}
          <div className="section-title">
            <h1>my projects</h1>
            <div className="underline" />
          </div>
          {/*end of section title */}
        </header>
        <section className="section">
          <div className="section-center projects-page-center">
            {/* single project */}
            <article className="single-project">
              <div className="project-container">
                <img src="./images/project-1.jpeg" alt="single project" />
                <a href="https://www.johnsmilga.com" className="project-icon">
                  <FaHome />
                </a>
              </div>
              <div className="project-details">
                <h4>project name</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  eveniet amet odit aperiam, provident cum possimus sapiente minus
                  quos! Ipsum?
                </p>
                <div className="project-footer">
                  <span>
                    <i className="fab fa-github" />
                  </span>
                  <a href="https://www.github.com">source code</a>
                </div>
              </div>
            </article>
            {/* end of single project */}
          </div>
        </section>
  </>
};

export default Projects;

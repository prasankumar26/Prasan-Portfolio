import React from 'react'
import { FaHome } from "react-icons/fa";

export const AllProjects = ({title,image,alt,description,link,source}) => {
  return (
             <article className="single-project">
              <div className="project-container">
                <img src={image} alt={alt} />
                <a href={link} target="_blank" className="project-icon">
                  <FaHome />
                </a>
              </div>
              <div className="project-details">
                <h4> {title} </h4>
                <p>
                 {description}
                </p>
                <div className="project-footer">
                  <span>
                    <i className="fab fa-github" />
                  </span>
                  <a href={source}>source code</a>
                </div>
              </div>
            </article>
  )
}

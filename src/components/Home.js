import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return <>
  {/* header */}
        <header className="hero">
          <div className="section-center hero-center">
            <article className="hero-info">
              <div className="underline" />
              <h1>i'm Prasan </h1>
              <h4>freelance web &amp; mobile UI/UX Designer</h4>
              <Link to="contact" className="btn hero-btn">hire me</Link>
              {/* social icons */}
              <ul className="social-icons hero-icons">
                <li>
                  <a href="https://www.twitter.com" className="social-icon">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" className="social-icon">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" className="social-icon">
                    <i className="fab fa-squarespace" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" className="social-icon">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com" className="social-icon">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </article>
            <article className="hero-img">
              <img src="./images/prasan-three.jpg" className="hero-photo" alt="john doe"/>
            </article>
          </div>
        </header>
        {/* end of header */}
        {/* about */}
        <section className="section about">
          <div className="section-center about-center">
            {/* about img */}
            <article className="about-img">
              <img src="./images/prasan-two.jpg" className="hero-photo" alt="about img"/>
            </article>
            {/* about info */}
            <article className="about-info">
              {/* section title */}
              <div className="section-title about-title">
                <h2>about</h2>
                <div className="underline" />
              </div>
              {/*end of section title */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
                eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
                reiciendis possimus rerum omnis recusandae molestias error
                consequuntur, doloribus inventore reprehenderit officiis. Dolore
                aut, repellendus eius fugiat numquam cumque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
                eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
                reiciendis possimus rerum omnis recusandae molestias error
                consequuntur, doloribus inventore reprehenderit officiis. Dolore
                aut, repellendus eius fugiat numquam cumque.
              </p>
              <Link to="about" className="btn">about me</Link>
            </article>
          </div>
        </section>
        {/* end of about */}
        {/* services */}
        <section className="section bg-grey">
          {/* section title */}
          <div className="section-title">
            <h2>services</h2>
            <div className="underline" />
          </div>
          {/*end of section title */}
          <div className="services-center section-center">
            {/* single service */}
            <article className="service">
              <i className="fas fa-code service-icon" />
              <h4>web development</h4>
              <div className="underline" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
                obcaecati vero.
              </p>
            </article>
            {/* end of single service */}
            {/* single service */}
            <article className="service">
              <i className="fab fa-sketch service-icon" />
              <h4>web design</h4>
              <div className="underline" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
                obcaecati vero.
              </p>
            </article>
            {/* end of single service */}
            {/* single service */}
            <article className="service">
              <i className="fab fa-android service-icon" />
              <h4>app design</h4>
              <div className="underline" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
                corrupti animi saepe quasi excepturi cupiditate voluptate dolor sed
                obcaecati vero.
              </p>
            </article>
            {/* end of single service */}
          </div>
        </section>
        {/* end of services */}
        {/* projects */}
        <section className="section projects">
          {/* section title */}
          <div className="section-title">
            <h2>latest works</h2>
            <div className="underline" />
            <p className="projects-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
              repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
              magnam, earum assumenda obcaecati cum quaerat facere ratione molestiae
              dignissimos aliquid blanditiis architecto voluptates delectus
              voluptate animi nulla! Autem explicabo perspiciatis officia ea.
            </p>
          </div>
          {/*end of section title */}
          <div className="section-center projects-center">
            {/* single project */}
            <a href="projects.html" className="project-1">
              <article className="project">
                <img src="./images/project-1.jpeg" alt="single project" className="project-img"/>
                <div className="project-info">
                  <h4>project title</h4>
                  <p>client name</p>
                </div>
              </article>
            </a>
            {/* end of single project */}
            {/* single project */}
            <a href="projects.html" className="project-2">
              <article className="project">
                <img src="./images/project-2.jpeg" alt="single project" className="project-img"/>
                <div className="project-info">
                  <h4>project title</h4>
                  <p>client name</p>
                </div>
              </article>
            </a>
            {/* end of single project */}{/* single project */}
            <a href="projects.html" className="project-3">
              <article className="project">
                <img src="./images/project-3.jpeg" alt="single project" className="project-img"/>
                <div className="project-info">
                  <h4>project title</h4>
                  <p>client name</p>
                </div>
              </article>
            </a>
            {/* end of single project */}{/* single project */}
            <a href="projects.html" className="project-4">
              <article className="project">
                <img src="./images/project-4.jpeg" alt="single project" className="project-img"/>
                <div className="project-info">
                  <h4>project title</h4>
                  <p>client name</p>
                </div>
              </article>
            </a>
            {/* end of single project */}
          </div>
        </section>
        {/* end of projects */}
        {/* connect */}
        <section className="connect">
          <video controls autoPlay muted loop className="video-container" poster="./images/project-1.jpeg">
            <source src="./videos/connect.mp4" type="video/mp4" />
            Sorry, your browser does not support embedded videos
          </video>
          <div className="video-banner">
            {/* section title */}
            <div className="section-title">
              <h2>let's get in touch</h2>
              <div className="underline" />
            </div>
            {/*end of section title */}
            <p className="video-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione
              perferendis exercitationem sit. Beatae eius commodi officiis rem
              soluta ratione dignissimos quisquam tempore laudantium, porro vitae
              cupiditate dicta magni quas corrupti aperiam, rerum minus odio totam
              repellendus delectus nostrum veniam!
            </p>
            <Link to="contact" className="btn">contact me</Link>
          </div>
        </section>
        {/* end of connect */}
        {/* skills */}
        <section className="section skills">
          {/* section title */}
          <div className="section-title">
            <h2>skills</h2>
            <div className="underline" />
          </div>
          {/*end of section title */}
          <div className="section-center skills-center">
            <article>
              <h3>front end</h3>
              {/* single skill */}
              <div className="skill">
                <p>HTML/CSS</p>
                <div className="skill-container">
                  <div className="skill-value" />
                  <p className="skill-text">
                    50%
                  </p>
                </div>
              </div>
              {/*end of  single skill */}
              {/* single skill */}
              <div className="skill">
                <p>Javascript</p>
                <div className="skill-container">
                  <div className="skill-value value-70" />
                  <p className="skill-text skill-text-70">
                    70%
                  </p>
                </div>
              </div>
              {/*end of  single skill */}
              {/* single skill */}
              <div className="skill">
                <p>React</p>
                <div className="skill-container">
                  <div className="skill-value value-80" />
                  <p className="skill-text skill-text-80">
                    80%
                  </p>
                </div>
              </div>
              {/*end of  single skill */}
            </article>
            <article>
              <h3>back end</h3>
              {/* single skill */}
              <div className="skill">
                <p>Node</p>
                <div className="skill-container">
                  <div className="skill-value" />
                  <p className="skill-text">
                    50%
                  </p>
                </div>
              </div>
              {/*end of  single skill */}
              {/* single skill */}
              <div className="skill">
                <p>PHP</p>
                <div className="skill-container">
                  <div className="skill-value value-70" />
                  <p className="skill-text skill-text-70">
                    70%
                  </p>
                </div>
              </div>
              {/*end of  single skill */}
              {/* single skill */}
              <div className="skill">
                <p>Python</p>
                <div className="skill-container">
                  <div className="skill-value value-80" />
                  <p className="skill-text skill-text-80">
                    80%
                  </p>
                </div>
              </div>
              {/*end of  single skill */}
            </article>
          </div>
        </section>
        {/* end of skills */}
        {/* timeline */}
        <section className="section timeline">
          {/* section title */}
          <div className="section-title">
            <h2>timeline</h2>
            <div className="underline" />
          </div>
          {/*end of section title */}
          <div className="section-center timeline-center">
            {/* single timeline item */}
            <article className="timeline-item">
              <h4>2020</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
                autem, ea excepturi.
              </p>
              <span className="number">
                1
              </span>
            </article>
            {/* end of  single timeline item */}
            {/* single timeline item */}
            <article className="timeline-item">
              <h4>2019</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
                autem, ea excepturi.
              </p>
              <span className="number">
                2
              </span>
            </article>
            {/* end of  single timeline item */}
            {/* single timeline item */}
            <article className="timeline-item">
              <h4>2018</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
                autem, ea excepturi.
              </p>
              <span className="number">
                3
              </span>
            </article>
            {/* end of  single timeline item */}
            {/* single timeline item */}
            <article className="timeline-item">
              <h4>2017</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
                autem, ea excepturi.
              </p>
              <span className="number">
                4
              </span>
            </article>
            {/* end of  single timeline item */}
            {/* single timeline item */}
            <article className="timeline-item">
              <h4>2016</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
                autem, ea excepturi.
              </p>
              <span className="number">
                5
              </span>
            </article>
            {/* end of  single timeline item */}
            {/* single timeline item */}
            <article className="timeline-item">
              <h4>2015</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                consequuntur voluptates tempore numquam? Quidem incidunt fugit quasi
                autem, ea excepturi.
              </p>
              <span className="number">
                6
              </span>
            </article>
            {/* end of  single timeline item */}
          </div>
        </section>
        {/*end of  timeline */}
        {/* blog */}
        <section className="section blog">
          {/* section title */}
          <div className="section-title">
            <h2>blog</h2>
            <div className="underline" />
          </div>
          {/*end of section title */}
          <div className="section-center blog-center">
            {/* single article */}
            <div className="card">
              {/* front of the card */}
              <div className="card-side card-front">
                <img src="./images/project-1.jpeg" alt="one"/>
                <div className="card-info">
                  <h4>article title</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                    nisi ut a est eum tempora dolorum temporibus voluptatibus!
                    Natus, provident.
                  </p>
                  <div className="card-footer">
                    <img src="./images/hero-img-small.jpeg" alt="author image"/>
                    <p>7 min read</p>
                  </div>
                </div>
              </div>
              {/* card back  */}
              <div className="card-side card-back">
                <button className="btn">read more</button>
              </div>
            </div>
            {/* end of single article */}
            {/* single article */}
            <div className="card">
              {/* front of the card */}
              <div className="card-side card-front">
                <img src="./images/project-2.jpeg" alt="one"/>
                <div className="card-info">
                  <h4>article title</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                    nisi ut a est eum tempora dolorum temporibus voluptatibus!
                    Natus, provident.
                  </p>
                  <div className="card-footer">
                    <img src="./images/hero-img-small.jpeg" alt="author image"/>
                    <p>7 min read</p>
                  </div>
                </div>
              </div>
              {/* card back  */}
              <div className="card-side card-back">
                <button className="btn">read more</button>
              </div>
            </div>
            {/* end of single article */}
            {/* single article */}
            <div className="card">
              {/* front of the card */}
              <div className="card-side card-front">
                <img src="./images/project-3.jpeg" alt="one"/>
                <div className="card-info">
                  <h4>article title</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                    nisi ut a est eum tempora dolorum temporibus voluptatibus!
                    Natus, provident.
                  </p>
                  <div className="card-footer">
                    <img src="./images/hero-img-small.jpeg" alt="author image"/>
                    <p>7 min read</p>
                  </div>
                </div>
              </div>
              {/* card back  */}
              <div className="card-side card-back">
                <button className="btn">read more</button>
              </div>
            </div>
            {/* end of single article */}
            {/* single article */}
            <div className="card">
              {/* front of the card */}
              <div className="card-side card-front">
                <img src="./images/project-4.jpeg" alt="two"/>
                <div className="card-info">
                  <h4>article title</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                    nisi ut a est eum tempora dolorum temporibus voluptatibus!
                    Natus, provident.
                  </p>
                  <div className="card-footer">
                    <img src="./images/hero-img-small.jpeg" alt="author image"/>
                    <p>7 min read</p>
                  </div>
                </div>
              </div>
              {/* card back  */}
              <div className="card-side card-back">
                <button className="btn">read more</button>
              </div>
            </div>
            {/* end of single article */}
          </div>
        </section>
        {/*end of  blog */}
       
  </>;
};

export default Home;

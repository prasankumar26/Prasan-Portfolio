import React from 'react';
import { AllProjects } from './AllProjects';


const Projects = () => {
  return <>
 <header className="projects-hero">
          {/* section title */}
          <div className="section-title">
            <h1>my projects </h1>
            <div className="underline" />
          </div>
          {/*end of section title */}
        </header>
        <section className="section">
          <div className="section-center projects-page-center">
            {/* single project */}
            <AllProjects 
            image="./img/saveyourjobs.png"
            alt="Save Your Jobs"
            title="Save Your Jobs"
            description="Created Save Your Jobs app using MERN(MongoDB,Express,ReactJS,NodeJs), 
            You can Add Jobs, Edit Jobs Track and Filter your Jobs In real Time. It is a Jobs Management App..."
            link="https://saveyourjobs.herokuapp.com/"
            source="https://github.com/prasankumar26/saveyourjobs"
            />
            <AllProjects 
            image="./img/color-generator.png"
            alt="Color Generator"
            title="Color Genertator"
            description="Created color generator app using React Js, You can Generate colors Using in this App in real time..."
            link="https://newcolorgenerator.netlify.app/"
            source="https://github.com/prasankumar26/color-generator"
            />
            <AllProjects 
            image="./img/cocktaildb.png"
            alt="Cocktail Project"
            title="cocktail DB"
            description="Worked on Cocktail DB API Workflow To fetch Data Product and Product Details..."
            link="https://newcocktailproject.netlify.app/"
            source="https://github.com/prasankumar26/cocktail-project"
            />
            <AllProjects 
            image="./img/lorem-ipsum-generator.png"
            alt="Lorem Ipsum Generator"
            title="Lorem Ipsum Generator"
            description="You can Generate Dummy Content using This Content Generator App..."
            link="https://newloremipsumgenerator.netlify.app/"
            source="https://github.com/prasankumar26/lorem-ipsum-generator"
            />
            <AllProjects 
            image="./img/react-sample-website.png"
            alt="Simple react Website"
            title="Simple react Website"
            description="This is a Simple Website React Website Ui Design..."
            link="https://samplereactwebsite.netlify.app/"
            source="https://github.com/prasankumar26/react-website"
            />
            <AllProjects 
            image="./img/easyweb.png"
            alt="Easyweb Website"
            title="Easyweb Clone"
            description="This Website is Simple Created Using HTML, CSS, and BOOTSTRAP..."
            link="https://easywebclone.netlify.app/"
            source="https://github.com/prasankumar26/Easyweb-clone"
            />
            <AllProjects 
            image="./img/packers-and-movers.png"
            alt="Packers And Movers Website"
            title="Packers And Movers"
            description="This Website is Simple Created Using HTML, CSS, and BOOTSTRAP..."
            link="https://app.netlify.com/sites/newpackersandmovers"
            source="https://github.com/prasankumar26/packers-and-movers"
            />
            <AllProjects 
            image="./img/e-thrive.png"
            alt="e-thrive Website"
            title="e-thrive Website"
            description="This Website is Simple Created Using HTML, CSS, and BOOTSTRAP..."
            link="https://ethrive.netlify.app/"
            source="https://github.com/prasankumar26/ethrivecashsite"
            />
            <AllProjects 
            image="./img/twitter-ui.png"
            alt="Twitter Ui Website"
            title="Twitter UI"
            description="This Website is Simple Twitter Clone Created Using HTML, CSS, and BOOTSTRAP..."
            link="https://newtwitter.netlify.app/"
            source="https://github.com/prasankumar26/React-Twitter-Ui-Clone"
            />
            <AllProjects 
            image="./img/neverend.png"
            alt="HTML Website"
            title="MTML CSS Blog Website"
            description="This is a Blogging Website This Website is Simple Twitter Clone Created Using HTML, CSS..."
            link="https://www.neverendmoney.com/"
            source="https://www.neverendmoney.com/"
            />
          
            {/* end of single project */}
          </div>
        </section>
  </>
};

export default Projects;

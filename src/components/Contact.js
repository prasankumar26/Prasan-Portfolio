import React from 'react';

const Contact = () => {
  return <>
  <section className="section single-page">
        {/* section title */}
        <div className="section-title">
          <h1>contact</h1>
          <div className="underline" />
        </div>
        {/*end of section title */}
        <div className="section-center page-info">
          {/* contact page*/}
          <p>
            If you are looking to get ahold of me, you can send me an email at
            <a href="mailto:prasanthedeveloper@gmail.com"> prasanthedeveloper@gmail.com</a>
          </p>
          <p>
            You can also reach me on Github ats
            <a href="https://github.com/prasankumar26"> @Github </a>
          </p>
        </div>
      </section>
  </>
};

export default Contact;

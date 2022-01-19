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
            <a href="mailto:email@email.com">@your_email</a>
          </p>
          <p>
            You can also reach me on Twitter at
            <a href="https://www.twitter.com">@your_social_media </a>
          </p>
        </div>
      </section>
  </>
};

export default Contact;

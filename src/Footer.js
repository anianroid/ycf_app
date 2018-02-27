import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div>
          <div>
            <img alt="footer logo" src="./images/logo.png" />
          </div>
          <p>A Small tagline about the company should come here.</p>
        </div>
        <div>
          <h3>WHERE WE WORK FROM</h3>
          <p>
            Workbench Projects, under Halasuru Metro Station, Bangalore
            Karnataka
          </p>
        </div>
        <div>
          <h3>JOIN IN THE CONVERSATION ON OUR CHANNELS</h3>
          <div>
            <span style={{margin: '0.2rem', fontSize: '2.2em'}}><i className="fab fa-vimeo-square" /></span>
            <span style={{margin: '0.2rem', fontSize: '2.2em'}}><i className="fab fa-facebook-square" /></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

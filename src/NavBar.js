import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper">
          <div className="nav" id="navbar">
            <div>
              <AnchorLink offset='100' href="#who_are_we">Who are we?</AnchorLink>
            </div>
            <div>
              <AnchorLink offset='100' href="#our_work">Our Work</AnchorLink>
            </div>
            <div>
              <AnchorLink href="#home"><img alt="landingimage" src="./images/logo.png" /></AnchorLink>
            </div>
            <div>
              <AnchorLink href="#get_involved">Get Involved</AnchorLink>
            </div>
            <div>
              <AnchorLink href="#support">Support</AnchorLink>
            </div>
          </div>
        </div>
        <div id="go_up">
          <AnchorLink href="#home"><i className="fas fa-angle-double-up"></i></AnchorLink>
        </div>
      </div>
    );
  }
}

export default NavBar;

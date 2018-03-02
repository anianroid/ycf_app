import React from "react";

class SecondarySection extends React.Component {
  render() {
    return (
      <div className="section section-right" style={{backgroundColor: '#4caf50'}}>
        <div className="section-right">
          <div className="content">
            <h2>Get Involved</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorp
            </p>
          </div>
          <div>
            <p style={{margin: '0px', fontSize: '1em', 'fontWeight': '200'}}><button>READ MORE</button> <small>About how you can help!</small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondarySection;

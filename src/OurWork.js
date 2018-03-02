import React from "react";
import PictureCard from "./PictureCard";

class OurWork extends React.Component {
  render() {
    return (
      <div id="our_work" className="section ourWorkSection">
        <div>
          <h1 style={{textAlign: 'center', color: '#333333'}}>Our Recent Work</h1>
        </div>
        <div className="grid-wrapper">
          <PictureCard
            imageUrl="./images/5.png"
            title="HALASURU TRAVERSES"
            text=""
          />
          <PictureCard
            imageUrl="./images/6.png"
            title="MAKER FAIRE"
            text=""
          />
          <PictureCard
            imageUrl="./images/7.png"
            title="WHATEVER ELSE"
            text=""
          />
        </div>
      </div>
    );
  }
}

export default OurWork;

import React from "react";
import Card from "./Card";

class Approach extends React.Component {
  render() {
    return (
      <div className="approach-wrapper">
        <div style={{ margin: "2em 0 4em 0" }}>
          <h1 style={{ textAlign: "center" }}>Our Approach</h1>
        </div>
        <Card
          title="Lorem ipsum dolor"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus at
            ultrices mi tempus imperdiet. Vel eros donec ac odio tempor. Amet
            massa vitae tortor condimentum. Sed odio morbi quis commodo odio
            aenean sed. Ipsum dolor sit amet consectetur adipiscing elit."
        />
        <Card
          title="Lorem ipsum dolor"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus at
            ultrices mi tempus imperdiet. Vel eros donec ac odio tempor. Amet
            massa vitae tortor condimentum. Sed odio morbi quis commodo odio
            aenean sed. Ipsum dolor sit amet consectetur adipiscing elit."
          type="1"
        />
        <Card
          title="Lorem ipsum dolor"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus at
            ultrices mi tempus imperdiet. Vel eros donec ac odio tempor. Amet
            massa vitae tortor condimentum. Sed odio morbi quis commodo odio
            aenean sed. Ipsum dolor sit amet consectetur adipiscing elit."
        />
      </div>
    );
  }
}

export default Approach;

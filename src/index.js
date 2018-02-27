import React from "react";
import { render } from "react-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Approach from "./Approach";
import Section from "./DefaultSection";
import OurWork from "./OurWork";
import SecondarySection from "./SecondarySection";
import Footer from './Footer';
require("./styles.css");

const App = () => (
  <div>
    <div className="landImage" id="home">
      <img alt="landing_page_image_of_ycf" src="http://via.placeholder.com/1440x648" />
    </div>
    <NavBar />
    <Home />
    <Approach />
    <Section />
    <OurWork />
    <SecondarySection />
    <Footer />
  </div>
);

render(<App />, document.getElementById("root"));

import React from "react";

class PictureCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img alt="work-img" src={this.props.imageUrl} />
        </div>
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
        <div>
          <button>Read More</button>
        </div>
      </div>
    );
  }
}

export default PictureCard;

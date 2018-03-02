import React from "react";

class PictureCard extends React.Component {
  render() {
    return (
      <div class="pictureCard">
        <div>
          <img alt="work-img" src={this.props.imageUrl} />
        </div>
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
        </div>
        <div>
          <button class="btn-primary">Read More</button>
        </div>
      </div>
    );
  }
}

export default PictureCard;

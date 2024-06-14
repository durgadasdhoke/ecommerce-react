import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    console.log(this.props.dat);
    return (
      <div className="card">
        <div className="img">
          <img src={this.props.dat.thumbnail} alt="" />
        </div>
        <div className="info">
          <div className="title">{this.props.dat.title}</div>
          <div className="price">${this.props.dat.price}</div>
          <div className="desc">{this.props.dat.description}</div>
          <button>Add to cart</button>
        </div>
      </div>
    );
  }
}

export default Card;

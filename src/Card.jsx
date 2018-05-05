import React, { Component } from "react";
import { object } from "prop-types";

class Card extends Component {
  render() {
    return <h1>{this.props.data.original_title}</h1>;
  }
}

Card.propTypes = {
  data: object.isRequired
};

export default Card;

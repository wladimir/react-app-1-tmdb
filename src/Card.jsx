import React, { Component } from "react";
import { object } from "prop-types";
import numeral from "numeral";

class Card extends Component {
  render() {
    const poster = "https://image.tmdb.org/t/p/w500" + this.props.data.poster;
    const backdrop =
      "https://image.tmdb.org/t/p/original" + this.props.data.backdrop;

    const vote = this.props.data.vote
      ? this.props.data.vote > 0
        ? this.props.data.vote + " / 10"
        : "-"
      : "-";

    const revenue = this.props.data.revenue
      ? this.props.data.revenue > 0
        ? numeral(this.props.data.revenue).format("($0,0)")
        : "-"
      : "-";

    return (
      <div>
        <h1>{this.props.data.original_title}</h1>
        <h2>{vote}</h2>
        <h2>{revenue}</h2>
      </div>
    );
  }
}

Card.propTypes = {
  data: object.isRequired
};

export default Card;

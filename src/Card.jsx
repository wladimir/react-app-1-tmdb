import React, { Component } from "react";
import { object } from "prop-types";
import numeral from "numeral";
import "./Card.css";

let backdrop;

class Card extends Component {
  render() {
    const poster = "https://image.tmdb.org/t/p/w500" + this.props.data.poster;
    backdrop = "https://image.tmdb.org/t/p/original" + this.props.data.backdrop;

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
      <div className="col-xs-12 cardcont nopadding">
        <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
          <h1>{this.props.data.original_title}</h1>
          <span className="tagline">{this.props.data.tagline}</span>
          <p>{this.props.data.overview}</p>
          <div className="additional-details">
            <div className="row nopadding release-details">
              <div className="col-xs-6">
                {" "}
                Original Release:{" "}
                <span className="meta-data">{this.props.data.release}</span>
              </div>
              <div className="col-xs-6">
                {" "}
                Running Time:{" "}
                <span className="meta-data">
                  {this.props.data.runtime} mins
                </span>{" "}
              </div>
              <div className="col-xs-6">
                {" "}
                Box Office: <span className="meta-data">{revenue}</span>
              </div>
              <div className="col-xs-6">
                {" "}
                Vote Average: <span className="meta-data">{vote}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 ">
          <img className="poster" src={poster} alt="poster" />
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    document.body.style.backgroundImage = "url(" + backdrop + ")";
  }
}

Card.propTypes = {
  data: object.isRequired
};

export default Card;

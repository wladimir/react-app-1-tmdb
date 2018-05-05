import React from "react";
import TMDBLogo from "./Logo";
import Autocomplete from "react-autocomplete";
import { TMDB_API } from "./constants";
import "bootstrap/dist/css/bootstrap.css";
import "./Search.css";
import { func } from "prop-types";

class Search extends React.Component {
  // component state
  state = {
    value: "",
    suggestions: []
  };

  render() {
    return (
      <div className="col-xs-12 search-container">
        <div className="row">
          <TMDBLogo />
          <Autocomplete
            className="col-sm-6 form-group col-lg-10"
            inputProps={{
              id: "movies-autocomplete",
              placeholder: "Search movie title"
            }}
            wrapperStyle={{
              position: "relative",
              display: "inline-block"
            }}
            value={this.state.value}
            items={this.state.suggestions}
            getItemValue={item => item.title}
            onSelect={value => {
              this.setState({ value, suggestions: [] });

              this.props.onClick(
                this.state.suggestions.find(function(element) {
                  return element.title === value;
                })
              );
            }}
            onChange={(event, value) => {
              this.setState({ value });

              fetch(
                `${TMDB_API.TMDB_URL}/search/movie?query=${value}&api_key=${
                  process.env.REACT_APP_TMDB_API_KEY
                }`
              )
                .then(res => res.json())
                .then(data => {
                  const titles = [];
                  if (data.results) {
                    data.results.map(movie =>
                      titles.push({
                        title: movie.original_title,
                        id: movie.id
                      })
                    );
                    this.setState({ suggestions: titles });
                  }
                })
                .catch(e => {
                  console.error(e);
                  this.setState({ suggestions: [] });
                });
            }}
            renderItem={item => (
              <div className="search-form" key={item.id}>
                {item.title}
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onClick: func.isRequired
};

export default Search;

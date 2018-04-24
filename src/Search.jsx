import React from "react";
import TMDBLogo from "./Logo";
import Autocomplete from "react-autocomplete";
import styled from "styled-components";
import { TMDB_API } from "./constants";

class Search extends React.Component {
  // component state
  state = {
    value: "",
    suggestions: []
  };

  render() {
    return (
      <div>
        <TMDBLogo />
        <label htmlFor="movies-autocomplete">Search movie title </label>
        <Autocomplete
          inputProps={{ id: "movies-autocomplete" }}
          wrapperStyle={{ position: "relative", display: "inline-block" }}
          value={this.state.value}
          items={this.state.suggestions}
          getItemValue={item => item.title}
          onSelect={value => {
            this.setState({ value, suggestions: [] });
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
                data.results.map(movie =>
                  titles.push({
                    title: movie.original_title,
                    id: movie.id
                  })
                );
                this.setState({ suggestions: titles });
              });
          }}
          renderMenu={children => <div className="menu">{children}</div>}
          renderItem={(item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? "item-highlighted" : ""}`}
              key={item.id}
            >
              {item.title}
            </div>
          )}
        />
      </div>
    );
  }
}

export default Search;

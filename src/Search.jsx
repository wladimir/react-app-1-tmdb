import React from "react";
import TMDBLogo from "./Logo";
import Autocomplete from "react-autocomplete";
import { TMDB_API } from "./constants";
import styled from "styled-components";

const SearchWrapper = styled.div`
  margin: 5% 30% 5% 30%;
  font-family: "Fjalla One";
  font-size: 1.2em;
  width: 100%;
`;

const AutocompleteWrapper = styled.div``;

class Search extends React.Component {
  // component state
  state = {
    value: "",
    suggestions: []
  };

  render() {
    return (
      <div>
        <SearchWrapper>
          <TMDBLogo />
          <AutocompleteWrapper>
            <Autocomplete
              className="Search-autosuggest"
              inputProps={{
                id: "movies-autocomplete",
                placeholder: "Search movie title"
              }}
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
                  })
                  .catch(e => {
                    console.error(e);
                    this.setState({ suggestions: [] });
                  });
              }}
              renderItem={(item, isHighlighted) => (
                <div
                  className={`item ${isHighlighted ? "item-highlighted" : ""}`}
                  key={item.id}
                >
                  {item.title}
                </div>
              )}
            />
          </AutocompleteWrapper>
        </SearchWrapper>
      </div>
    );
  }
}

export default Search;

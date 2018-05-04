import React, { Component } from "react";
import Search from "./Search";
import Card from "./Card";
import "./App.css";
import { TMDB_API } from "./constants";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieId: ""
    };
  }

  componentDidMount() {
    this.fetchLatestMovie();
    this.fetchMovieData();
  }

  fetchMovieData() {}

  fetchLatestMovie() {
    fetch(
      `${TMDB_API.TMDB_URL}/discover/movie?sort_by=popularity.desc&api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }`
    )
      .then(res => res.json())
      .then(data => {
        const movieId = data.results[0].id;
        this.setState({ movieId });
      })
      .catch(e => {
        console.error(e);
        this.setState({ moviedId: "" });
      });
  }

  render() {
    return (
      <div>
        <div className="App">
          <Search />
        </div>
        <Card />
      </div>
    );
  }
}

export default App;

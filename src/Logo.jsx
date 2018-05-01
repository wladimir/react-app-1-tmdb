import React from "react";
import { TMDB_API } from "./constants";

const TMDBLogo = () => (
  <div>
    <img src={TMDB_API.LOGO} alt="The Movie Database" />
  </div>
);

export default TMDBLogo;

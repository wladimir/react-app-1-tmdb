import React from "react";
import { TMDB_API } from "./constants";

const TMDBLogo = () => (
  <div className="col-xs-12 col-sm-6 col-lg-5">
    <img src={TMDB_API.LOGO} alt="The Movie Database" className="logo" />
  </div>
);

export default TMDBLogo;

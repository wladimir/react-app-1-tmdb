import React from "react";
import { TMDB_API } from "./constants";
import styled from "styled-components";

const Logo = styled.div`
  display: block;
  width: 100%;
  max-width: 140px;
`;

const TMDBLogo = () => (
  <div>
    <Logo>
      <img src={TMDB_API.LOGO} alt="The Movie Database" />
    </Logo>
  </div>
);

export default TMDBLogo;

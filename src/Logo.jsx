import React from "react";
import { TMDB_API } from "./constants";
import styled from "styled-components";

const Image = styled.image`
  display: block;
  margin: 0 auto;
  margin-left: 25%;
  width: 100%;
  max-width: 140px;
`;

const Logo = () => (
  <div>
    <Image>
      <img src={TMDB_API.LOGO} alt="The Movie Database" />
    </Image>
  </div>
);

export default Logo;

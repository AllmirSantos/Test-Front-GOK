import React from "react";
import Button from "../button";
import { HeaderWhite } from "./style.jsx";
import { Link } from "react-router-dom";

const Header = ({ content, onClick }) => (
  <HeaderWhite>
    <div>
      <img alt="" src="/assets/logo.svg" />
    </div>
    <div>
      <Link class="LinkPages" to="/">
        <Button content="Adicionar novo" />
      </Link>
    </div>
  </HeaderWhite>
);

export default Header;

import React from "react";
import { ContainerInput } from "./style.jsx";

const Input = ({ content, onClick }) => (
  <ContainerInput>
    <input placeholder={content}></input>
    <img alt="" src="./assets/account.svg" />
  </ContainerInput>
);

export default Input;

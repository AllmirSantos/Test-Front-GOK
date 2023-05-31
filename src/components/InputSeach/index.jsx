import React from "react";
import { ContainerInputSeach } from "./style.jsx";

const InputSeach = ({ Placeholder, IconInput }) => (
  <ContainerInputSeach>
    <input placeholder={Placeholder}></input>
    <img alt="" src={IconInput} />
  </ContainerInputSeach>
);

export default InputSeach;

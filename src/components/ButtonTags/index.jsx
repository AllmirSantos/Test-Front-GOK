import React from "react";
import { BtnTags } from "./style.jsx";

const ButtonTags = ({ content, onClick, iconTags }) => (
  <BtnTags onClick={() => onClick()}>
    {content}
    <img alt="" src={iconTags} />
  </BtnTags>
);

export default ButtonTags;

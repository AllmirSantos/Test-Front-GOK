import React from "react";

import { BtnBlack } from "./style.jsx";

const Button = ({ content, onClick }) => (
  <BtnBlack onClick={() => onClick()}>{content}</BtnBlack>
);

export default Button;

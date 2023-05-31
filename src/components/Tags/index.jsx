import React from "react";
import { ContainerTagsGray } from "./style.jsx";

const Tags = ({ tags, onClick, iconTags }) => (
  <ContainerTagsGray onClick={() => onClick()}>#{tags}</ContainerTagsGray>
);

export default Tags;

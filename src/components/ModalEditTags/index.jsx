import React from "react";
import { ContainerModalEditTags } from "./style.jsx";

import Button from "../button";
import InputSeach from "../inputSeach/index.jsx";

const ModalEditTags = ({ content }) => (
  <ContainerModalEditTags>
    <p>Editar tags</p>
    <div className="BoxInput">
      <InputSeach
        Placeholder="Buscar..."
        IconInput="/assets/search.svg"
      ></InputSeach>
    </div>
    <div className="BoxTagsSelect">
      <div>
        Front End <img alt="" src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        JavaScript <img alt="" src="/assets/addTagsBlack.svg" />
      </div>
    </div>
    <div className="BoxTags">
      <span> Sugestões </span>
      <div>
        Java <img alt="" src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        Phyton <img alt="" src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        J.son <img alt="" src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        C# <img alt="" src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        TypeScript <img alt="" src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        GraphQL <img alt="" src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        ReactJs <img alt="" src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        React Native <img alt="" src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        IOS <img alt="" src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        Android <img alt="" src="/assets/addTagsBlack.svg" />
      </div>
    </div>
    <div className="BoxBtn">
      <Button content="Salvar" />
      <label for="BoxModalEditTags">Cancelar</label>
    </div>
  </ContainerModalEditTags>
);

export default ModalEditTags;

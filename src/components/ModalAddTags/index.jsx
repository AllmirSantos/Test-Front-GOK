import React from "react";
import { ContainerModalAddTags } from "./style.jsx";

import InputSeach from "../inputSeach/index.jsx";
import Button from "../button";

const ModalAddTags = ({ content }) => (
  <ContainerModalAddTags>
    <p>Adicionar tags</p>
    <div className="BoxInput">
      <InputSeach
        Placeholder="Buscar..."
        IconInput="/assets/search.svg"
      ></InputSeach>
    </div>
    <div className="BoxTags">
      <span> Sugestões </span>
      <div>
        Java <img alt="" src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        Phyton <img alt="" src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        J.son <img alt="" src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        C# <img alt="" src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        TypeScript <img alt="" src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        GraphQL <img alt="" src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        ReactJs <img alt="" src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        React Native <img alt="" src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        IOS <img alt="" src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        Android <img alt="" src="/assets/addTagsWhite.svg" />
      </div>
    </div>
    <div className="BoxBtn">
      <Button content="Salvar" />
      <label for="BoxModalAddTags">Cancelar</label>
    </div>
  </ContainerModalAddTags>
);

export default ModalAddTags;

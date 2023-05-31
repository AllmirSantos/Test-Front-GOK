import React from "react";
import {
  ContainerPerfil,
  BoxOnePerfil,
  BoxTwoPerfil,
  BoxTheePerfil,
} from "./style.jsx";

const InforPerfil = ({
  photo,
  name,
  link,
  seguidores,
  seguidor,
  favoritos,
  sobre,
  empresa,
  endereco,
  site,
  destaque,
}) => (
  <ContainerPerfil>
    <BoxOnePerfil>
      <span></span>
      <div>
        <img  alt="" src={photo} />
      </div>
      <h1>{name}</h1>
      <h4>{link}</h4>
      <section>
        <p>Seguidores</p>
        <h3>{seguidores}</h3>
      </section>
      <section>
        <p>Seguindo</p>
        <h3>{seguidor}</h3>
      </section>
      <section>
        <p>Favoritos</p>
        <h3>{favoritos}</h3>
      </section>
    </BoxOnePerfil>
    <BoxTwoPerfil>
      <h1>Sobre</h1>
      <h5>{sobre}</h5>
      <section>
        <img alt="" src="assets/business.svg" />
        <p>{empresa}</p>
      </section>
      <section>
        <img alt=""  src="assets/place.svg" />
        <p>{endereco}</p>
      </section>
      <section>
        <img alt="" src="assets/link.svg" />
        <p>{site}</p>
      </section>
    </BoxTwoPerfil>
    <BoxTheePerfil>
      <h1>Destaque</h1>
      <section>
        <img alt="" src="assets/bookmarks.svg" />
        <p>{destaque}</p>
      </section>
    </BoxTheePerfil>
  </ContainerPerfil>
);

export default InforPerfil;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ContainerLogin, ContainerInput } from "./style.jsx";

// Components
import { Button, Input } from "../../components";

function Login() {
  const [searchText, setSearchText] = useState("");

  return (
    <ContainerLogin>
      <section className="ContentLogin">
        <div className="BoxLoginImput">
          <div>
            <img alt="" src="/assets/logo.svg" />
          </div>
          <div>
            <p class="title">Buscar usuário</p>
            <p class="infor">Crie sua conta através do seu usuário do GitHub</p>

            <ContainerInput>
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Nome de usuario"
                type={"text"}
              ></input>
              <img alt="" src="./assets/account.svg" />
            </ContainerInput>

            <Link class="LinkPages" to={`/Users?text=${searchText}`}>
              <Button content="Cadastrar" />
            </Link>
          </div>
          <p class="TextTermos">
            Termos de <span>política </span> e <span>privacidade </span>
          </p>
        </div>
        <div className="BoxLoginArt">
          <div>
            <img img alt="" src="/assets/art.svg" />
          </div>
          <text>
            Gerencie e adicione <span>tags</span> ao seus{" "}
            <span>repositórios</span> favoritos.
          </text>
        </div>
      </section>
    </ContainerLogin>
  );
}

export default Login;

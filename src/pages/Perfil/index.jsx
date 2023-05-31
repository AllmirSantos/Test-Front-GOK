import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "../../services/api";
import { ContainerPerfil } from "./style.jsx";

// Components
import {
  InforPerfil,
  ListRepoUser,
  InputSeach,
  ModalAddTags,
  ModalEditTags,
} from "../../components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export { useQuery };

function Users() {
  const query = useQuery();
  const [user, setUser] = useState({});
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    Api.getByUsername(query.get("text")).then((res) => setUser(res.data));
    // Api.getByUsername(query.get("text")).then(res => console.log(res, "oii"));
    Api.getReposByUsername(query.get("text")).then((res) =>
      setRepositories(res.data)
    );
  }, []);

  return (
    <ContainerPerfil>
      <section className="ContentPerfil">
        <InforPerfil
          photo={user.avatar_url}
          name={user.name}
          link={user.login}
          seguidores={user.followers}
          seguidor={user.following}
          favoritos={user.public_repos}
          sobre={user.bio}
          empresa={user.company}
          endereco={user.location}
          site={user.blog}
          destaque="Developer Program Member"
        ></InforPerfil>
        <section className="BoxScrollList">
          <header>
            <InputSeach
              Placeholder="Buscar um repositório..."
              IconInput="/assets/search.svg"
            ></InputSeach>
            <InputSeach
              Placeholder="Filtrar por tag"
              IconInput="/assets/filter_list.svg"
            ></InputSeach>
          </header>

          {repositories.map((repo, index) => (
            <div key={index}>
              <ListRepoUser
                NameProject={repo.name}
                Infor={repo.description}
                Linguagem={repo.language}
                Atualizacao={repo.updated_at}
                Stars={repo.stargazers_count}
                Contas={repo.watchers_count}
                BtnAdd="True"
                BtnEdit="True"
                TagsActive="True"
              ></ListRepoUser>
            </div>
          ))}
          <div className="BottomMargin"></div>
        </section>
      </section>

      <div className="BoxModalAddTags">
        <input className="InputModal" type="checkbox" id="BoxModalAddTags" />
        <div className="BoxModal">
          <ModalAddTags></ModalAddTags>
        </div>
      </div>
      <div className="BoxModalEditTags">
        <input className="InputModal" type="checkbox" id="BoxModalEditTags" />
        <div className="BoxModal">
          <ModalEditTags></ModalEditTags>
        </div>
      </div>
    </ContainerPerfil>
  );
}

export default Users;

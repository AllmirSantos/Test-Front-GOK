import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "../../services/api";
import React from "react";

import { Link } from "react-router-dom";
import { ContainerUsers } from "./style.jsx";

// Components
import { ListUser, Header } from "../../components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export { useQuery };

export default function Users({ props }) {
  const query = useQuery();
  const [user, setUser] = useState({});
  const [setRepositories] = useState([]);

  useEffect(() => {
    Api.getByUsername(query.get("text")).then((res) => setUser(res.data));
    Api.getReposByUsername(query.get("text")).then((res) =>
      setRepositories(res.data)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ContainerUsers>
      <section className="ContentUsers">
        <Header></Header>
        <section className="BoxScrollList">
          <Link class="LinkPages" to={`/Perfil?text=${user.login}`}>
            <ListUser
              ProfilePicture={user.avatar_url}
              Name={user.name}
              Link={user.login}
              Company={user.company}
              Address={user.location}
              Stars={user.public_repos}
            />
          </Link>
        </section>
      </section>
    </ContainerUsers>
  );
}

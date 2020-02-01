import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthActions from "../../store/ducks/auth";
import {
  Container,
  UserData,
  Avatar,
  Wrap,
  Name,
  Group,
  Logout,
} from "./styles";

function User({ history }) {
  const { username, admin, groups, avatar } = useSelector(
    state => state.auth.data
  );
  const dispatch = useDispatch();

  function handleLogout() {
    return dispatch(AuthActions.logoutRequest(history));
  }

  const images = require.context("../../assets/images", true);
  // const pic = admin
  //   ? "https://picsum.photos/160/160?random=1"
  //   : images(`./${groups.name}/${avatar}`);
  const pic = "https://picsum.photos/160/160?random=1";

  return (
    <Container>
      <UserData>
        <Avatar url={pic} />
        <Wrap>
          <Name>{username}</Name>
          <Group>{admin ? "Administrador" : `Grupo ${groups.name}`}</Group>
        </Wrap>
      </UserData>
      <Logout onClick={() => handleLogout()}>Sair</Logout>
    </Container>
  );
}

export default withRouter(User);

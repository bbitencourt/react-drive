import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { FaExclamationTriangle, FaSpinner } from "react-icons/fa";
import { Form, Input } from "@rocketseat/unform";
import * as yup from "yup";
import AuthActions from "../../store/ducks/auth";

import {
  Container,
  Content,
  Logo,
  Titulo,
  Lembrar,
  WrapInput,
  Button,
  ImageBackground,
} from "./styles";

const iconError = <FaExclamationTriangle size={24} />;
const schema = yup.object().shape({
  username: yup.string().required(iconError),
  password: yup.string().required(iconError),
});

export default function Login() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(AuthActions.loginRequest(data));
  }

  return (
    <Container>
      <Content>
        <Logo />
        <Titulo>
          Ampliando a conexão para alcançar potenciais inexplorados.
        </Titulo>
        <Form schema={schema} onSubmit={handleSubmit}>
          <p>Bem vindo, digite seus dados de acesso abaixo.</p>
          <WrapInput>
            <Input
              type="text"
              name="username"
              className="username"
              placeholder="Nome de usuário"
            />
          </WrapInput>
          <WrapInput>
            <Input
              type="password"
              name="password"
              className="password"
              placeholder="Senha de acesso"
            />
          </WrapInput>
          <Lembrar />
          <Button>
            {auth.loading ? (
              <FaSpinner size={24} className="icon-spin" />
            ) : (
              "Entrar"
            )}
          </Button>
        </Form>
      </Content>
      <ImageBackground />
    </Container>
  );
}

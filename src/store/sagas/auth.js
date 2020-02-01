import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import api from "../../services/api";
import AuthActions from "../ducks/auth";

import "react-toastify/dist/ReactToastify.css";

function notify(type, message) {
  if (type === "error") {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  if (type === "success") {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toastsuccess",
      bodyClassName: "bodytoast",
    });
  }
}

export function* login(action) {
  try {
    const post = action.data;
    const { data } = yield call(api.post, "/session", post);
    yield put(AuthActions.loginSuccess(data));
    return notify("success", "Olá seja bem-vindo!");
  } catch (err) {
    yield put(
      AuthActions.loginFailure(
        "Erro ao efeurar login, verifique se usuário e senha estão corretos."
      )
    );
    return notify(
      "error",
      "Erro ao efeurar login, verifique se usuário e senha estão corretos."
    );
  }
}

export function* logout(action) {
  try {
    const { history } = action;
    yield put(AuthActions.logoutSuccess());
    history.push("/login");
    return notify("success", "Tchau! Até mais tarde!");
  } catch (err) {
    yield put(
      AuthActions.logoutFailure("Ops! algo deu errado, tente novamente")
    );
    return notify("error", "Ops! algo deu errado");
  }
}

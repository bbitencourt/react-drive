import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../ducks/auth";
import { login, logout } from "./auth";

import { FilesTypes } from "../ducks/files";
import { getFiles, postFiles, deleteFiles } from "./files";

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.LOGOUT_REQUEST, logout),
    takeLatest(FilesTypes.FILES_REQUEST, getFiles),
    takeLatest(FilesTypes.SEND_FILES_REQUEST, postFiles),
    takeLatest(FilesTypes.DELETE_FILES_REQUEST, deleteFiles),
  ]);
}

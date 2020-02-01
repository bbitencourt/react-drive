import { call, put } from "redux-saga/effects";
import querystring from "querystring";
import { toast } from "react-toastify";
import api from "../../services/api";
import apiPHP from "../../services/api-php";
import FilesActions from "../ducks/files";

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

export function* getFiles(action) {
  try {
    const params = action.data;
    const query = querystring.stringify(params);
    const { data } = yield call(api.get, `/files?${query}`);

    return yield put(FilesActions.filesSuccess(data));
  } catch (err) {
    yield put(FilesActions.filesFailure(err.response.data.error.message));
    return notify("error", err.response.data.error.message);
  }
}

export function* postFiles(action) {
  try {
    const {
      data: post,
      resetForm,
      setSelectedFile,
      setOpen,
      setRefresh,
    } = action;
    const { data } = yield call(apiPHP.post, `/file-manager`, post);

    yield put(FilesActions.sendFilesSuccess(data));
    setSelectedFile(null);
    resetForm();
    setOpen(false);
    setRefresh(new Date());
    return notify("success", "Arquivo enviado com sucesso!");
  } catch (err) {
    yield put(FilesActions.sendFilesFailure(err.response.data.error.message));
    return notify("error", err.response.data.error.message);
  }
}

export function* deleteFiles(action) {
  try {
    const { id, setRefresh } = action;
    yield call(api.delete, `/files/${id}`);
    yield put(FilesActions.deleteFilesSuccess());
    setRefresh(new Date());
    return notify("success", "Arquivo deletado!");
  } catch (err) {
    yield put(FilesActions.deleteFilesFailure(err.response.data.error.message));
    return notify("error", err.response.data.error.message);
  }
}

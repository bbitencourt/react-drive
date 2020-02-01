import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  filesRequest: ["data"],
  filesSuccess: ["data"],
  filesFailure: ["error"],
  sendFilesRequest: [
    "data",
    "resetForm",
    "setSelectedFile",
    "setOpen",
    "setRefresh",
  ],
  sendFilesSuccess: ["data"],
  sendFilesFailure: ["error"],
  deleteFilesRequest: ["id", "setRefresh"],
  deleteFilesSuccess: null,
  deleteFilesFailure: ["error"],
});

export const FilesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = {
  data: null,
  selectedMonth: null,
  loading: false,
  loadingPost: false,
  lastUpload: null,
  error: null,
};

/* Reducers */

export const requestFiles = state =>
  update(state, { loading: { $set: true }, error: { $set: null } });

export const successFiles = (state, action) =>
  update(state, {
    loading: { $set: false },
    data: { $set: action.data },
  });

export const failureFiles = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

export const requestSendFiles = state =>
  update(state, { loadingPost: { $set: true }, error: { $set: null } });

export const successSendFiles = (state, action) =>
  update(state, {
    loadingPost: { $set: false },
    lastUpload: { $set: action.data },
  });

export const failureSendFiles = (state, action) =>
  update(state, {
    loadingPost: { $set: false },
    error: { $set: action.error },
  });

export const requestDeleteFiles = state =>
  update(state, { loadingPost: { $set: true }, error: { $set: null } });

export const successDeleteFiles = (state, action) =>
  update(state, {
    loadingPost: { $set: false },
  });

export const failureDeleteFiles = (state, action) =>
  update(state, {
    loadingPost: { $set: false },
    error: { $set: action.error },
  });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FILES_REQUEST]: requestFiles,
  [Types.FILES_SUCCESS]: successFiles,
  [Types.FILES_FAILURE]: failureFiles,
  [Types.SEND_FILES_REQUEST]: requestSendFiles,
  [Types.SEND_FILES_SUCCESS]: successSendFiles,
  [Types.SEND_FILES_FAILURE]: failureSendFiles,
  [Types.DELETE_FILES_REQUEST]: requestDeleteFiles,
  [Types.DELETE_FILES_SUCCESS]: successDeleteFiles,
  [Types.DELETE_FILES_FAILURE]: failureDeleteFiles,
});

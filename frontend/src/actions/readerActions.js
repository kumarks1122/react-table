import * as types from '../constants/actionTypes';
import fetchApi from '../services/request';

export function onFileId(payload) {
  return function (dispatch) {
    return dispatch({
      type: types.FILE_ID_CHANGED,
      payload
    });
  };
}

export function onRecords(payload) {
  return {
    type: types.RECORDS_ADDED,
    payload
  }
}

export function onSearch(payload) {
  return function (dispatch) {
    return fetchApi("/api/v1/search", "post", null, JSON.stringify(payload)).then(data => data.json()).then(
      (data) => {
        dispatch({
          type: types.RECORDS_ADDED,
          payload: data.records
        })},
      (error) => {},
    );
  };
}

export function onUpload(formData, filterOptions) {
  return function (dispatch) {
    return fetchApi("/api/v1/upload", "post", {}, formData).then(data => data.json()).then(
      (data) => {
        dispatch({
          type: types.FILE_ID_CHANGED,
          payload: data.fileId
        });
        dispatch(onSearch(filterOptions))
      },
      (error) => {},
    );
  };
}

export function onLoad() {
  return function (dispatch) {
    return dispatch({
      type: types.READER_PAGE_LOAD
    });
  };
}
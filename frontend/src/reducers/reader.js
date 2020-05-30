import {
  RECORDS_ADDED,
  FILE_ID_CHANGED,
  READER_PAGE_LOAD
} from '../constants/actionTypes';

const defaultState = {
  fileId: '',
  records: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECORDS_ADDED:
      return Object.assign({}, state, { records: action.payload });
    case FILE_ID_CHANGED:
      return Object.assign({}, state, { fileId: action.payload });
    case READER_PAGE_LOAD:
      return Object.assign({}, state)
    default:
      return state;
  }
};
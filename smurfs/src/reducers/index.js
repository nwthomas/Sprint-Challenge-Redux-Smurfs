import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_ERROR,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_ERROR
} from "../actions";

const initialStore = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.import { GET_SMURFS_ERROR } from '../actions/index';

  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialStore, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        error: null
      };
    case GET_SMURFS_ERROR:
      return {
        ...state,
        error: action.payload,
        fetchingSmurfs: false
      };
    default:
      return state;
  }
};

export default smurfReducer;

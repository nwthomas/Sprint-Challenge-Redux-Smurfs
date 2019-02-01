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

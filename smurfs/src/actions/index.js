import axios from "axios";

export const GET_SMURFS_START = "GET_SMURFS_START";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_ERROR = "GET_SMURFS_ERROR";
export const POST_SMURF_START = "POST_SMURF_START";
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_ERROR = "POST_SMURF_ERROR";
export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_ERROR = "DELETE_SMURF_ERROR";
export const UPDATE_SMURF_START = "UPDATE_SMURF_START";
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS";
export const UPDATE_SMURF_ERROR = "UPDATE_SMURF_ERROR";
export const HANDLE_INPUT_CHANGE = "HANDLE_INPUT_CHANGE";
export const START_UPDATE_SMURF = "START_UPDATE_SMURF";
export const CLEAR_FORM = "CLEAR_FORM";

export const getSmurfs = _ => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_SMURFS_ERROR, payload: err.data });
    });
};

export const postSmurf = smurf => dispatch => {
  dispatch({ type: POST_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_SMURF_ERROR, paylod: err.data });
    });
};

export const deleteSmurf = id => dispatch => {
  console.log(id);
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_SMURF_ERROR, payload: err.data });
    });
};

export const updateSmurf = smurf => dispatch => {
  dispatch({ type: UPDATE_SMURF_START });
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_SMURF_ERROR, payload: err.data });
    });
};

export const handleChange = e => {
  return {
    type: HANDLE_INPUT_CHANGE,
    payload: e
  };
};

export const startUpdateSmurf = id => {
  return {
    type: START_UPDATE_SMURF,
    payload: id
  };
};

export const clearForm = _ => {
  return {
    type: CLEAR_FORM
  };
};

import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_ERROR,
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_ERROR,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_ERROR,
  HANDLE_INPUT_CHANGE,
  START_UPDATE_SMURF,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_ERROR,
  CLEAR_FORM
} from "../actions";

const initialStore = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  formUpdating: false,
  error: null,
  inputName: "",
  inputAge: "",
  inputHeight: "",
  updatingID: null
};

const smurfReducer = (state = initialStore, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null,
        updatingID: null
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
    case POST_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: null,
        updatingID: null
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        error: null,
        inputName: "",
        inputAge: "",
        inputHeight: ""
      };
    case POST_SMURF_ERROR:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    case DELETE_SMURF_START:
      return {
        ...state,
        deletingSmurf: true,
        error: null,
        updatingID: null
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload,
        erro: null
      };
    case DELETE_SMURF_ERROR:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };
    case HANDLE_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    case START_UPDATE_SMURF:
      const smurfToUpdate = state.smurfs.filter(
        smurf => smurf.id === action.payload
      );
      console.log(smurfToUpdate);
      return {
        ...state,
        formUpdating: true,
        inputName: smurfToUpdate[0].name,
        inputAge: smurfToUpdate[0].age,
        inputHeight: smurfToUpdate[0].height,
        updatingID: smurfToUpdate[0].id
      };
    case UPDATE_SMURF_START:
      return {
        ...state,
        updatingSmurf: true,
        error: null,
        updatingID: null
      };
    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        updatingSmurf: false,
        smurfs: action.payload,
        error: null,
        updatingID: null,
        inputName: "",
        inputAge: "",
        inputHeight: "",
        formUpdating: false
      };
    case UPDATE_SMURF_ERROR:
      return {
        ...state,
        error: action.payload,
        updatingSmurf: false
      };
    case CLEAR_FORM:
      return {
        ...state,
        updatingSmurf: false,
        inputName: "",
        inputAge: "",
        inputHeight: "",
        formUpdating: false
      };
    default:
      return state;
  }
};

export default smurfReducer;

import { UPDATE_TITLE, TOGGLE_EDITING, FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAILURE } from "../actions/titleActions";

export const initialState = {
  editing: false,
  loading: false,
  joke: '',
  error: '',
  title: "DAD JOKES"
}

const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      console.log("UPDATE_TITLE called in reducer")
      return { ...state, title: action.payload, editing: false};
    case TOGGLE_EDITING:
      console.log("TOGGLE_EDITING called in reducer")
      return { ...state, editing: !state.editing};
    case FETCHING_QUOTE_START:
      return {...state, loading: true};
    case FETCHING_QUOTE_SUCCESS:
      return {...state, loading: false, joke: action.payload};
    case FETCHING_QUOTE_FAILURE:
      return {...state, loading: false, error: action.payload}
    default:
      console.log("Error: unkonwn action type in Title Reducer")
      return { ...state, };
  }
}

// ALWAYS start with {...state} in your return values to make sure that all values from the previous state object are included in the new state object!

export default titleReducer;
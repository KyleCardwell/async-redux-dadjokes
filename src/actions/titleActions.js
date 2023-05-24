import axios from "axios";

export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const UPDATE_TITLE = 'UPDATE_TITLE'
export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START"
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS"
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE"

export const toggleEditing = () => {
  console.log("toggleEditing called in action creator")
  return { type: TOGGLE_EDITING }
}

export const updateTitle = (newTitle) => {
  console.log("updateTitle called in action creator")
  return { type: UPDATE_TITLE, payload: newTitle}
}

const headers = {
  Accept: "application/json"
}

export const getJoke = () => (dispatch) => {
  // update state to loading
  dispatch({type: FETCHING_QUOTE_START})

  // begin an API request
  axios.get("https://icanhazdadjoke.com/", {headers})
  // respond to happy & sad paths, updating state with API response
  .then(res => {
    console.log(res.data.joke)
    dispatch({type: FETCHING_QUOTE_SUCCESS, payload: res.data.joke})
  })
  .catch(err => {
    console.log({type: FETCHING_QUOTE_FAILURE, payload: err})
  })
}
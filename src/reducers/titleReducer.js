const titleReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_EDITING":
      console.log("TOGGLE_EDITING called in reducer")
      return { ...state, editing: !state.editing};
      case "UPDATE_TITLE":
      console.log("UPDATE_TITLE called in reducer")
      return { ...state, title: action.payload, editing: false};
    default:
      return { ...state, };
  }
}

// ALWAYS start with {...state} in your return values to make sure that all values from the previous state object are included in the new state object!

export default titleReducer;
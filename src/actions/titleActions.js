export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const UPDATE_TITLE = 'UPDATE_TITLE'

export default {
  toggleEditing: () => {
    console.log("toggleEditing called in action creator")
    return { type: TOGGLE_EDITING }
  },
  updateTitle: (title) => {
    console.log("updateTitle called in action creator")
    return { type: UPDATE_TITLE, payload: title}
  }
}
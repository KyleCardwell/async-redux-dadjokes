import React, { useState, useReducer } from 'react';
import titleReducer, { initialState } from '../reducers/titleReducer';
import {updateTitle, toggleEditing} from '../actions/titleActions'
import { connect } from 'react-redux';

const Title = (props) => {

  
  
  const [state, dispatch] = useReducer(titleReducer, initialState)

  
  const [newTitleText, setNewTitleText] = useState(''); //component-level state (keystroke tracking)

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{' '}
          <i onClick={() => props.toggleEditing()} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button onClick={() => props.updateTitle(newTitleText)}>
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

// Redux Step 3: Connect Comonents

const mapStateToProps = (state) => {
  return {
    editing: state.editing,
    title: state.title
  }
}

const mapDispatchToProps = {
    updateTitle,
    toggleEditing

}

export default connect(mapStateToProps, mapDispatchToProps)(Title);
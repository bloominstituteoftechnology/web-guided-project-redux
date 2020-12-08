import React, { useState, useReducer } from 'react';

import { initialState, titleReducer } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

const Title = () => {
  const [newTitleText, setNewTitleText] = useState();
  const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <i
            className="far fa-edit"
            onClick={() => dispatch(toggleEditing())}
          />
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
          <button
            onClick={() =>
              dispatch(updateTitle(newTitleText))
            }
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;

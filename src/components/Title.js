import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
//connect() - connects your component to the store. 

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  // const [state, dispatch] = useReducer(titleReducer, initialState);
  console.log("props from redux??", props)

  const handleToggleEditing = () => {
    dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    dispatch(updateTitle(title));
  }

  return (
    <div>
      <h1>{state.appName}</h1>
      {
        !state.editing ? 
          <TitleDisplay title={state.title} handleToggleEditing={handleToggleEditing}/>: 
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
  
};

const mapStateToProps = (stateFromStore) => {
  console.log(stateFromStore);
  return {
    title: stateFromStore.title
  }
}
//mapStateToProps - will be called every time the store state changes. 
//it receives the entire store state, and should return an object 
//of data this component needs. the data will be availble through props.

export default connect(mapStateToProps, {})(Title);
                //wrapper(Title)
                //higher order component
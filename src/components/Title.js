import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
//connect() - connects your component to the store. 

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleToggleEditing = () => {
    props.toggleEditing();
  }

  const handleTitleUpdate = (title) => {
    props.updateTitle(title);
  }

  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay title={props.title} handleToggleEditing={handleToggleEditing}/>: 
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
  
};

const mapStateToProps = (stateFromStore) => {
  // console.log(stateFromStore);
  return {
    title: stateFromStore.title,
    appName: stateFromStore.appName,
    editing: stateFromStore.editing
  }
}
//mapStateToProps - will be called every time the store state changes. 
//it receives the entire store state, and should return an object 
//of data this component needs. the data will be availble through props.

//second arg in connect 1st invocation: an object that takes in action creators
// and adds them to props for the connected component.

export default connect(mapStateToProps, { updateTitle, toggleEditing })(Title);
                //wrapper(Title)
                //higher order component

  
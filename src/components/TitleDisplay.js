import React from 'react';

const TitleDisplay = (props)=> {
  const handleClick = () => {
    props.handleToggleEditing();
  }

  return(<h2>
      {props.title}{' '}
      <i
        className="far fa-edit"
        onClick={handleClick}
      />
  </h2>);
}

export default TitleDisplay;
import React from 'react';

const ErrorMessage = (props) => {
  if(!props.error) {
    return null;
  }

  return (
    <div className="error">{props.error}</div>
  )
}

export default ErrorMessage;
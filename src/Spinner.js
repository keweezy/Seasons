import React from 'react';

const Spinner = (props) => {
    console.log(props);
  return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{props.loadText}</div>
      </div>
  );
};

Spinner.defaultProps = {
    loadText: 'Allow location access..'
}

export default Spinner;

import React from 'react';

const Victory = (props) => {

  if (props.victor === 0) {
    return (<div></div>);
  }

  return (
    <div className="victory-banner">{props.victor === 1 ? "Player" : "Computer"} Wins!</div>
  );

};

export default Victory;
import React from 'react';

export const FeedBackForm = ({ leaveFeedBack }) => {
    
  const handleButtonClick = (value, event) => {
    event.preventDefault()
    leaveFeedBack(value);
  };

  return (
    <form>
      <p>Please leave a feedback</p>
      <button onClick={event => handleButtonClick('good', event)}>Good</button>
      <button onClick={event => handleButtonClick('neutral', event)}>Neutral</button>
      <button onClick={event => handleButtonClick('bad', event)}>Bad</button>
    </form>
  );
};

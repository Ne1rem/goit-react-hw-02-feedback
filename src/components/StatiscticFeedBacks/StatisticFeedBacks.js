export const FeedBackStats = ({ items }) => {
    const total = items.bad + items.neutral + items.good;
    const positivePercentage = (items.good / total) * 100;
    const positiveFeedbackPercentage = Math.round(positivePercentage);
  
    return (
      <div>
        <p>Statistics</p>
        
          {total !== 0 ? (
        <ul>
          <li>Good: {items.good}</li>
          <li>Neutral: {items.neutral}</li>
          <li>Bad: {items.bad}</li>
          <li className="total">Total: {total}</li>
          <li className="total">Positive feedback: {positiveFeedbackPercentage}%</li>
        </ul>
      ) : (
        <p>No feedback</p>
      )}
      </div>
    );
  };
  
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button key={option} type="button" onClick={onLeaveFeedback}>
        {option}
      </button>
    ))}
  </div>
);

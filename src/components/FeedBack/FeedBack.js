import { nanoid } from 'nanoid';

export const FeedBackForm = ({leaveFeedBack}) => {
    return (
        <form onClick={(values, actions) => {
            leaveFeedBack({ ...values, id: nanoid() });
        actions.resetForm();
      }}>
          <p>Please leave a feedback</p>
          <button value="good">Good</button>
          <button value="neutral">Neutral</button>
          <button value="bad">Bad</button>
          </form>
          )
}
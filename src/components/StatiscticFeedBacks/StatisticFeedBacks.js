export const FeedBackStats = ({items}) => {
    return (
        <div>
        <p>Statistics</p>
        <ul>
            <li>Good: {items.good}</li>
            <li>Neutral: {items.neutral}</li>
            <li>Bad: {items.bad}</li>
        </ul>
        </div>
    )
}
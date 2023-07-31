import React from "react";

const Progress = (props) => {
  const getSum = (arr) => {
    let sum = 0;
    for (let donation of props.donationsData) {
      sum += donation.amount
    }
    return sum
  }
  const raisedAmount = getSum(props.donationsData);
  return (
    <div>
      <section className="progress">
      <h2>
        Raised <span className="secondary">{"$" + raisedAmount}</span> of
        <span className="secondary">{" $" + props.targetNumber}</span>
      </h2>
    </section>
    </div>
  )
}

export default Progress

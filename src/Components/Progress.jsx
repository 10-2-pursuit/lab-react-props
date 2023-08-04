import React from "react";

function Progress(props) {
  console.log(props)
  let progressSum = 0;
  const calculateSum = (donations) => {
    for (let donation of donations) {
      progressSum += donation.amount
    }
  }
  const progressAmount = calculateSum(props.donations)

  return (
    <h2>Raised { progressSum } of {props.targetAmount } </h2>
  )
}
export default Progress

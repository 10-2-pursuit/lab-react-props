import React from "react"
import donations from "../App";

const Progress = ({donations}) => {
  const targetAmount = 1000;
  const totalRaised = donations.reduce((total, donation) => total + donation.amount, 0);
  const percentRaised = (totalRaised / targetAmount) * 100;
  return
  <section className="progress">
  <h2>
    ${totalRaised} <span className="secondary">${percentRaised.toFixed(2)}</span> of {''}
    <span className="secondary">${targetAmount}</span>
  </h2>
</section>
}

export default Progress;
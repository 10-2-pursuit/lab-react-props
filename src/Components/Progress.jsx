import React from "react";

function Progress({ targetAmount, donations }) {
  const totalDonations = (donations) => {
    let sum = 0;
    for (let donation of donations) {
      sum += parseInt(donation.amount);
    }
    return sum;
  };
  return (
    <>
      <section className="progress">
        <h2>
          Raised <span className="secondary">${totalDonations(donations)}</span> of
          <span className="secondary">${targetAmount}</span>
        </h2>
      </section>
    </>
  );
}

export default Progress;

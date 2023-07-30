import React from 'react';

function Progress({donations}) {
  const getTotal = (arr) => {
    let total = 0;
    for (let donation of arr) {

      total += donation.amount;
    }
    
    return total;
  }


const totalAmount = getTotal(donations);

  return (
    <div className="progress">
      <h2>`Raised ${getTotal(donations)} of <span className="total"> ${1000} `</span>

    <span className="secondary">$1000</span>
  </h2>
      <div className="progress-bar">
        <div className="progress-bar-amount" style={{width: `${getTotal(donations)/1000 * 100}%`}}></div>
    </div>
    </div>
  );
}


export default Progress;
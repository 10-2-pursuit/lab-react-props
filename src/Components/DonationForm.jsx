
import React from "react";

function DonationForm({donations}) {
  const getDonations = (arr) => {
    return arr.length +1;
  }

  return (
    <div>
      <h3>You could be donation </h3>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="caption">Caption</label>
        <input type="text" id="caption" name="caption" />
        <label htmlFor="amount">Amount to Donate</label>
        <input type="range" id="amount" name="amount" min="5" max="1000" />
      </form>
    </div>
  )
  }

export default DonationForm;
  




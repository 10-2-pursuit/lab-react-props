import React from "react";
import donations from "../App";


 function DonationForm({ donations }) {
  return (
    <section className="donation">
      <h3>You could be donation <span className="secondary">{donation.length+1}</span></h3>  
      {donations.map((donation) => (
        <form key={donation.id}>
          <label htmlFor="name">
            Name<input
              id="name"
              name="name"
              type="text"
              placeholder="Your name..."
            />
            {donation.name}
          </label>
          <label htmlFor="caption">
            Caption<input
              id="caption"
              name="caption"
              type="text"
              placeholder="Add a brief message..."
            />
            {donation.caption}
          </label>
          <label htmlFor="amount">
            Amount<input
              id="amount"
              name="amount"
              type="number"
              placeholder="0"
            />
            ${donation.amount}
          </label>
          <button>Donate!</button>
        </form>
      ))}
    </section>
  );
}

export default DonationForm;



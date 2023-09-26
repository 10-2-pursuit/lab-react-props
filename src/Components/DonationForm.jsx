import React from "react";

 function DonationForm({ donations }) {
  return (
    <section className="donation">
      <h3>You could be donation <span className="secondary">{donations.length+1}</span></h3> 
        <form>
          <label htmlFor="name">
            Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name..."
            />
        
          <label htmlFor="caption">
            Caption</label>
            <input
              id="caption"
              name="caption"
              type="text"
              placeholder="Add a brief message..."
            />
          
          <label htmlFor="amount">
            Amount</label>
            <input
              id="amount"
              name="amount"
              type="number"
              placeholder="0"
            />
         
          <button>Donate!</button>
        </form>
    </section>
  );
}

export default DonationForm;



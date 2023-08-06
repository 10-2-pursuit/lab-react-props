import React from "react";

function RecentDonations(props) {
  return (
    <section>
      <h2>Recent Donations</h2>
      {props.donations.map((donation, index) => (
        <ul key={index}>
          <li>
            <span>
              {donation.name} donated {donation.amount}
            </span>
            {donation.caption}
          </li>
        </ul>
      ))}
    </section>
  );
}

export default RecentDonations;
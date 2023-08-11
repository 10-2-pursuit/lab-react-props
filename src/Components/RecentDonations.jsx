import React from "react";

function RecentDonations({ donations }) {
  const recentDonationsList = donations.map(donation => (
    <li key={donation.id}>
      <span>
        {donation.name} donated ${donation.amount}
      </span>
      <span>{donation.caption}</span>
    </li>
  ));

  return (
    <>
      <section>
        <h2>Recent Donations</h2>
        <ul>{recentDonationsList}</ul>
      </section>
    </>
  );
}
export default RecentDonations
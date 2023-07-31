import React from "react";

const RecentDonations = (props) => {
  return (
    <section>
  <h2>Recent Donations</h2>
  <ul>
    <li><span>{(props.donationsData[0].name) +  " donated $" + (props.donationsData[0].amount)}</span>{(props.donationsData[0].caption)}</li>
    <li><span>{(props.donationsData[1].name) +  " donated $" + (props.donationsData[1].amount)}</span>{(props.donationsData[1].caption)}</li>
    <li><span>{(props.donationsData[2].name) +  " donated $" + (props.donationsData[2].amount)}</span>{(props.donationsData[2].caption)}</li>
    <li><span>{(props.donationsData[3].name) +  " donated $" + (props.donationsData[3].amount)}</span>{(props.donationsData[3].caption)}</li>
    <li><span>{(props.donationsData[4].name) +  " donated $" + (props.donationsData[4].amount)}</span>{(props.donationsData[4].caption)}</li>
  </ul>
</section>
  )
}

export default RecentDonations;
export default function RecentDonations(props) {
  return <div>
    <section>
    <h2>Recent Donations</h2>
    <ul>
      {props.donations.map(donation => <li><span>{donation.name} donated ${donation.amount}</span> {donation.caption}</li>)}
    </ul>
    </section>
    </div>
}

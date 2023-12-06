export default function RecentDonations(props) {
  return (
    <section className="sidebar">

    <h2>Recent Donations</h2>
    <ul>{props.allDonations.map((donation) => <li key= {donation.name}> <span>{donation.name} donated ${donation.amount}</span> {donation.caption} </li>)}</ul>

    </section>
  )
}

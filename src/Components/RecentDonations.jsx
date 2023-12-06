export default function RecentDonations(props) {
  return (
    <section>

      <h2>Recent Donations</h2>
      <ul>{props.donationsArr.map((dono) => <li key={dono.name}><span>{dono.name} donated ${dono.amount}</span>
      <p>{dono.caption}</p>
      </li>)}</ul>
    
    </section>
  )
}

export default function RecentDonations({donations}) {
  return (<section>
  <h2>Recent Donations</h2>
  <ul>
    {/* <li><span>Jo donated $25</span>You really need this. Really.</li>
    <li><span>Rami donated $10</span>Here, take a break from work!</li> */}
    {donations.map((ele) =>{
      return <li key={ele.id}><span>{ele.name} donated ${ele.amount}</span>{ele.caption}</li>
    })}
  </ul>
</section>)
}

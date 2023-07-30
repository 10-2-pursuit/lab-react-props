
function RecentDonations({donations}) {
  const getDonations = (arr) => {
    return arr.length +1;
  }

  return (
    <div>
      <h2>Recent Donations</h2>
    

      <ul>
         {donations.map((donation) => {
    <li>
      <span>Jo donated $25</span>You really need this. Really.>
      </li>
    <li>
      <span>Rami donated $10</span>Here, take a break from work!>
      </li>
    <li><span>Michelle donated $20</span>LOL! You are too funny. Happy to do this for you. :)</li>  
    <li><span>Malinda donated $5</span>Have fun!</li>
    </ul>
    </div>



export default RecentDonations;
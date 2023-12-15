export default function RecentDonations({ donationsArr }) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donationsArr.map((donation) => {
          return (
            <li>
              <span>
                {" "}
                {donation.name} donated ${donation.amount}
              </span>
              {donation.caption}
            </li>
          );
        })}
        {/* <li>
          <span>Jo donated $25</span>You really need this. Really.
        </li>
        <li>
          <span>Rami donated $10</span>Here, take a break from work!
        </li> */}
        {/* <!-- etc... --> */}
      </ul>
    </section>
  );
}

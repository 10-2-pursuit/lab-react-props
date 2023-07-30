export default function RecentDonations({ donations }) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((d) => (
          <li>
            <span>
              {d.name} donated {d.amount}
            </span>
            {d.caption}
          </li>
        ))}
      </ul>
    </section>
  );
}

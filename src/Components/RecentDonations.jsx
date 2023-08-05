export default function RecentDonations(props) {
  return (
    <>
      <section>
        <h2>Recent Donations</h2>
        <ul>
          { props.donations.map(index => (
            <li>
              <span>{ index.name } donated ${ index.amount }</span>{ index.caption }
            </li>
          )) }
        </ul>
      </section>
    </>
  );
}

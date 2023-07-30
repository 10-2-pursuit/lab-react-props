import { donations } from "../App";

export default function RecentDonations() {
  return (
    <>
      <section>
        <h2>Recent Donations</h2>
        <ul>
          { donations.map(index => (
            <li>
              <span>{ index.name } donated ${ index.amount }</span>{ index.caption }
            </li>
          )) }
        </ul>
      </section>
    </>
  );
}

//import { donations } from "../App";

export default function Progress(props) {
  return (
  <>
    <section className="progress">
      <h2>
        Raised <span className="secondary">${ props.donations.reduce((sum, current) => sum + current.amount, 0) }</span> of
        <span className="secondary">$1000</span>
      </h2>
    </section>
  </>
  );
}

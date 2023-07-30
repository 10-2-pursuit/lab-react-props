import { donations } from "../App";

export default function Progress() {
  return (
  <>
    <section className="progress">
      <h2>
        Raised <span className="secondary">${ donations.reduce((sum, currentValue) => sum += currentValue.amount, 0) }</span> of
        <span className="secondary">$1000</span>
      </h2>
    </section>
  </>
  );
}

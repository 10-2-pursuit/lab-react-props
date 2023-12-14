export default function Progress({ donationsArr }) {
  const totalDonations = donationsArr.reduce((total, donation) => {
    return total + donation.amount;
  }, 0);
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${totalDonations}</span> of
        <span className="secondary">$1000</span>
      </h2>
    </section>
  );
}

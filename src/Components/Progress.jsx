
function Progress(props) {
  //extracting donations and targetAmount from props object
  const {donations, targetAmount} = props
  // calculate the total amount of money raised from the donations array 
  const totalDonations = donations.reduce((total, donation) => total + donation.amount, 0)
  return (
    <div>
    <section className="progress">
      <h2>
        Raised <span className="secondary">${totalDonations}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
    </section>
    </div>
  )
}

export default Progress; 
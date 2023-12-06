const Progress = (props) => {
  const total = props.allDonations.reduce((acc, donation) => {
    acc += donation.amount
    return acc
  }, 0)
  return (
    <div>
      <section className="progress">
        <h2>
          Raised <span className="secondary">${total}</span> of <span className="secondary">${props.target}</span>
        </h2>
      </section>
    </div>
  )
}
export default Progress
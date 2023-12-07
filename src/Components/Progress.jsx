export default function Progress(props) {

  return <div>
    <section className="progress">
    <h2>
      Raised <span className="secondary">${props.donations.reduce((acc, cur) => {
        acc += cur.amount 
        return acc}, 0)}</span> of
      <span className="secondary"> $1000</span>
    </h2>
    </section>
  </div>
}

function totalDono(donations){
  let total = 0
  for (const dono of donations) {
    total += dono.amount
  }
  return total
}

export default function Progress(props) {
  const donoTotal = totalDono(props.donationsArr)
  return (
    <section>
      <h2>
        Raised <span className="secondary">${donoTotal}</span> of <span className="secondary">$1000</span>
      </h2>
    </section>
  )
}

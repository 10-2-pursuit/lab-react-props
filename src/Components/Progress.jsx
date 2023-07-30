export default function Progress({donations, targetAmount}) {
  let sum = 0 
  for(let d of donations){
    sum+=d.amount 
  }
  return <section className="progress">
  <h2>
    Raised <span className="secondary">${sum}</span> of
    <span className="secondary">${targetAmount}</span>
  </h2>
</section>
}

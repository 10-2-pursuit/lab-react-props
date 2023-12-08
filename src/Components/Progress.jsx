export default function Progress({donations, amount}) {
 let acc = 0;
 donations.forEach(element => {
  acc += element.amount;
 });



  return (
    <section className="progress">
  <h2>
    Raised <span className="secondary">${acc}</span> of
    <span className="secondary">${amount}</span>
  </h2>
</section>
  )
}

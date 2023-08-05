//import { donations } from "../App";

export default function DonationForm(props) {
  function addDonation(){
    const name = document.getElementById('name');
    const amount = document.getElementById('amount');
    const caption = document.getElementById('caption');
    const tempObj = {
      name: name.value,
      amount: Number(amount.value),
      caption: caption.value,
      id:props.donations.length,
    };
    props.setDonations([...props.donations,tempObj]);
  }

  function submitHandler(e){
    e.preventDefault();
    addDonation();
  }

  return (
    <>
      <section className="donation">
      <h3>You could be donation <span class="secondary">#{ props.donations.length + 1 }!</span></h3>
      <form onSubmit={e=>submitHandler(e)}>
        <label htmlFor="name" //in the React..
          >Name<input
              id="name"
              name="name"
              type="text"
              placeholder="Your name..." /></label
          ><label htmlFor="caption"
            >Caption<input
              id="caption"
              name="caption"
              type="text"
              placeholder="Add a brief message..." /></label
          ><label htmlFor="amount"
            >Amount<input
              id="amount"
              name="amount"
              type="number"
              placeholder="0" /></label
          ><button>Donate!</button>
        </form>
      </section>
    </>
  );
}

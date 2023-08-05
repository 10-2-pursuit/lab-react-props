import React from "react";
import TopBar from "./Components/TopBar";
import DonationForm from "./Components/DonationForm";
import Progress from "./Components/Progress";
import RecentDonations from "./Components/RecentDonations";
import "./App.css";
import { useState } from "react";

const targetAmount = 1000;
export const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

function App() {
  const [donationList, setDonationList] = useState(donations);

  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">{/* Recent Donations */}<RecentDonations donations={donationList}/></section>
        <section className="">
          {/* Progress */}
          <Progress donations={donationList}/>
          {/* Donation Form */}
          <DonationForm donations={donationList} setDonations={setDonationList}/>
        </section>
      </main>
    </>
  );
}

export default App;

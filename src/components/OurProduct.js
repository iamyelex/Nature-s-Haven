import OurProductCard from "./OurProductCard";

import seed from "../images/seed.png";
import paprika from "../images/paprika.png";
import bayLeave from "../images/bayLeave.png";
import curry from "../images/curry.png";
import tomatoes from "../images/tomatoes.png";
import brocoli from "../images/brocoli.png";
import banana from "../images/banana.png";
import coconut from "../images/coconut.png";
import freshJuice from "../images/freshJuice.png";
import waterlemon from "../images/waterlemon.png";
import irish from "../images/irish.png";
import bellPepper from "../images/bellPepper.png";
import corn from "../images/corn.png";
import carrot from "../images/carrot.png";
import onion from "../images/onions.png";

const productsList = [
  { label: "Corriander seeds", price: 1200, image: seed },
  { label: "Paprika powder", price: 1200, image: paprika },
  { label: "Bay leaves", price: 1000, image: bayLeave },
  { label: "Curry powder", price: 1200, image: curry },
  { label: "Tomatoes", price: 2500, image: tomatoes },
  { label: "Broccoli", price: 1200, image: brocoli },
  { label: "Bananas", price: 2000, image: banana },
  { label: "Coconut", price: 900, image: coconut },
  { label: "Fresh juice", price: 1200, image: freshJuice },
  { label: "Watermelon drink", price: 1200, image: waterlemon },
  { label: "Irish potatoes", price: 4000, image: irish },
  { label: "Bell pepper", price: 800, image: bellPepper },
  { label: "Corn", price: 1200, image: corn },
  { label: "Carrots", price: 1200, image: carrot },
  { label: "Onions", price: 1200, image: onion },
];

export default function OurProduct() {
  return (
    <section className="px-6 lg:px-32 mt-10 space-y-4 md:space-y-8 font-inter">
      <h3 className="text-xl md:text-2xl text-center font-semibold">
        Our Products
      </h3>

      <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
        {productsList.map((list) => (
          <OurProductCard
            label={list.label}
            image={list.image}
            price={list.price}
          />
        ))}
      </div>
    </section>
  );
}

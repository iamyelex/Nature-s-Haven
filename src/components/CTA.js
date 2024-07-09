import groceryCart from "../images/svg/groceryCart.svg";

export default function CTA() {
  return (
    <section className="flex justify-between items-center bg-primary px-4 md:px-20 lg:px-32 font-inter">
      <div className="space-y-2 lg:space-y-8">
        <h2 className="text-xs md:text-4xl lg:text-6xl font-semibold ">
          Fresh and Healthy Vegetables and Fruits
        </h2>
        <p className="text-xs lg:text-xl font-light lg:w-3/6">
          They are produced by methods that comply with the standard of farming
        </p>
        <button className="text-white font-semibold bg-secondary py-2 px-4 lg:py-4 lg:px-8 rounded-xl capitalize hover:text-secondary hover:bg-white transition duration-100 ease-in">
          shop now
        </button>
      </div>

      <div className="">
        <img
          src={groceryCart}
          alt="grocery-cart"
          className="md:ml-14 lg:ml-4"
        />
      </div>
    </section>
  );
}

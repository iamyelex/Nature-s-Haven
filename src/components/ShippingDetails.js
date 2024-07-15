import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ShippingDetails({ setShowPayment }) {
  const { totalAmount } = useSelector((store) => store.cart);

  const STORE_PICK_UP = 0;
  const HOME_DELIVERY_PRICE = 450;

  const [shippingPrice, setShippingPrice] = useState(STORE_PICK_UP);

  const storePickupHandler = function (e) {
    const value = e.target.value;
    if (value === "storePickup") {
      setShippingPrice(STORE_PICK_UP);
    }
  };

  const homeDeliveryHandler = function (e) {
    const value = e.target.value;
    if (value === "homeDelivery") {
      setShippingPrice(HOME_DELIVERY_PRICE);
    }
  };

  const totalToPay = +(totalAmount + shippingPrice);

  const showPaymentHandle = function () {
    setShowPayment(true);
  };

  return (
    <div className="flex flex-col md:pl-9 md:pt-14 pb-8">
      <h4 className="text-xl md:text-3xl font-semibold">Delivery mode:</h4>
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-10 md:space-y-0">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-3 pt-2 md:pt-0">
            <input
              type="radio"
              name="delivery_type"
              value="storePickup"
              id="storePickup"
              className="outline-none"
              defaultChecked
              onClick={storePickupHandler}
            />
            <label htmlFor="storePickup" className="text-xs md:text-sm ">
              Store pickup FREE
            </label>
          </div>
          <div className="flex space-x-3">
            <input
              type="radio"
              name="delivery_type"
              value="homeDelivery"
              id="homeDelivery"
              className="outline-none"
              onClick={homeDeliveryHandler}
            />
            <label
              htmlFor="homeDelivery"
              className="text-xs md:text-sm font-semibold"
            >
              Home delivery ( 2 -4 days) 450
            </label>
          </div>
        </div>

        <div className="flex flex-col space-y-3 px-6 md:px-0">
          <div className="flex justify-between space-x-10">
            <p className="text-[11px] md:text-[15px] font-semibold uppercase">
              subtotal
            </p>
            <span className="text-[11px] md:text-[15px] font-semibold">
              N{totalAmount}
            </span>
          </div>
          <div className="flex justify-between space-x-10">
            <p className="text-[11px] md:text-[15px] font-semibold uppercase">
              shipping
            </p>
            <span className="text-[11px] md:text-[15px] font-semibold">
              {shippingPrice}
            </span>
          </div>
          <div className="flex justify-between space-x-10">
            <p className="text-[11px] md:text-[15px] font-semibold uppercase">
              total
            </p>
            <span className="text-[11px] md:text-[15px] font-semibold">
              N{totalToPay}
            </span>
          </div>
          <div className="hidden md:block">
            <button
              className="text-[15px] text-white font-semibold bg-secondary py-1 rounded-lg w-full"
              onClick={showPaymentHandle}
            >
              Checkout
            </button>
          </div>

          <div className="md:hidden">
            <Link to="/payment">
              <button className="text-[15px] text-white font-semibold bg-secondary py-1 rounded-lg w-full">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

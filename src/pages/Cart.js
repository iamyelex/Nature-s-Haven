import { MdOutlineArrowBack } from "react-icons/md";

import CartItem from "../cart/CartItem";

import masterCard from "../images/logos_mastercard.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import ShippingDetails from "../components/ShippingDetails";

export default function Cart() {
  // const { items, totalAmount, totalQuantity } = useSelector
  const { items } = useSelector((store) => store.cart);
  const [showPayment, setShowPayment] = useState(false);

  const navigate = useNavigate();
  return (
    <section className="font-inter px-6 lg:px-32 md:space-y-7">
      {items.length === 0 ? (
        <div className="flex justify-center items-center pt-40">
          <p className="text-xl">Your Cart is empty</p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-5xl font-semibold">My Cart</h3>
            <button
              className="hidden md:flex items-center space-x-2 border border-[#8B898940] border-opacity-25 py-1 px-2 rounded-lg"
              onClick={() => navigate(-1)}
            >
              <MdOutlineArrowBack className="" />
              <span className="text-base font-semibold">Continue shopping</span>
            </button>
            <button className="md:hidden" onClick={() => navigate(-1)}>
              <MdOutlineArrowBack size={25} />
            </button>
          </div>

          <div className="space-y-5 lg:w-[60%]">
            <div className="hidden md:flex justify-between">
              <h4 className="text-base font-semibold uppercase opacity-55 w-[70%]">
                product details
              </h4>
              <h4 className="text-base font-semibold uppercase opacity-55 w-[25%]">
                quantity
              </h4>
              <h4 className="text-base font-semibold uppercase opacity-55 w-[20%]">
                price
              </h4>
              <h4 className="text-base font-semibold uppercase opacity-55">
                total
              </h4>
            </div>

            {items.map((list) => (
              // console.log(list)
              <CartItem
                key={list.title}
                image={list.image}
                label={list.title}
                price={list.price}
                quantity={list.quantity}
                id={list.id}
              />
            ))}

            <ShippingDetails setShowPayment={setShowPayment} />
          </div>

          {/* PAYMENT DESKTOP VIEW */}
          {showPayment ? (
            <div className="hidden md:block bg-[#F1F1F1] h-[332px] pt-16 pl-9 rounded-lg">
              <div className="w-1/3 space-y-2">
                <p className="text-xl font-semibold">Card number</p>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="XXXX XXXX XXXX XXXX"
                    className="text-xs py-[6px] w-[310px] pl-2 border ml-5 outline-none"
                  />
                  <img src={masterCard} alt="" className="absolute right-8" />
                </div>
                <div className="flex space-x-8">
                  <div className="">
                    <p className="text-xl font-semibold">Expiration</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border w-[97px] outline-none mt-2 ml-5"
                    />
                  </div>
                  <div className="">
                    <p className="text-xl font-semibold">CVC</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border w-[97px] outline-none mt-2"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:ml-8 lg:w-1/3">
                <button className="text-xl text-white font-semibold bg-secondary py-1 px-12 rounded-lg">
                  Confirm Payment
                </button>
              </div>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}

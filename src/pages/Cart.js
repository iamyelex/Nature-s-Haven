import { MdOutlineArrowBack } from "react-icons/md";

import CartItem from "../cart/CartItem";

import masterCard from "../images/logos_mastercard.png";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  // const { items, totalAmount, totalQuantity } = useSelector(
  const { items } = useSelector((store) => store.cart);
  const [showPayment, setShowPayment] = useState(false);

  const showPaymentHandle = function () {
    setShowPayment(true);
  };

  const navigate = useNavigate();
  return (
    <section className="font-inter px-6 lg:px-32 md:space-y-7">
      {items.length === 0 ? (
        <div className="flex justify-center items-center pt-40">
          <p className="text-xl">Cart is empty</p>
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
                // quantity={list.quantity}
                id={list.id}
              />
            ))}

            <div className="flex flex-col md:pl-9 md:pt-14 pb-8">
              <h4 className="text-xl md:text-3xl font-semibold">
                Delivery mode:
              </h4>
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-10 md:space-y-0">
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-3 pt-2 md:pt-0">
                    <input
                      type="radio"
                      name="delivery_type"
                      id="store"
                      className="outline-none"
                    />
                    <label className="text-xs md:text-sm ">
                      Store pickup FREE
                    </label>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="radio"
                      name="delivery_type"
                      id="home"
                      checked
                      className="outline-none"
                    />
                    <label className="text-xs md:text-sm font-semibold">
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
                      N5800
                    </span>
                  </div>
                  <div className="flex justify-between space-x-10">
                    <p className="text-[11px] md:text-[15px] font-semibold uppercase">
                      shipping
                    </p>
                    <span className="text-[11px] md:text-[15px] font-semibold">
                      N450
                    </span>
                  </div>
                  <div className="flex justify-between space-x-10">
                    <p className="text-[11px] md:text-[15px] font-semibold uppercase">
                      total
                    </p>
                    <span className="text-[11px] md:text-[15px] font-semibold">
                      N6250
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

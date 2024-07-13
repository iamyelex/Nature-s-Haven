import { useState } from "react";
import { useDispatch } from "react-redux";
import { decreaseCart, increaseCart, removeFromCart } from "./CartSlice";
import { RiDeleteBinFill } from "react-icons/ri";
import CartRemoveWarning from "./CartRemoveWarning";

export default function CartItem({ label, price, image, id, quantity }) {
  const [removeItem, setRemoveItem] = useState(false);
  const totalPrice = quantity * price;

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const organizationId = process.env.REACT_APP_ORGANIZATION_ID;

  const dispatch = useDispatch();

  const removeCart = function () {
    dispatch(removeFromCart(id));
  };

  const addCart = function () {
    dispatch(increaseCart(id));
  };

  const reduceCart = function () {
    dispatch(decreaseCart(id));
  };

  const removeItemHandler = function () {
    setRemoveItem(true);
  };

  const cancelHandler = function () {
    setRemoveItem(false);
  };

  return (
    // <div className="flex items-center justify-between w-[50%] font-inter">
    <div className="flex items-center justify-between font-inter md:py-2">
      <div className="flex items-end space-x-2 md:space-x-4">
        <img
          src={`${baseUrl}images/${image}?${organizationId}`}
          alt={label}
          className="w-[96px] h-[75px] md:w-[171px] md:h-[134px]"
        />
        <div className="flex flex-col">
          <p className="text-[11px] md:text-base font-normal md:w-36">
            {label} <br />
            100g
          </p>
          <button>
            <RiDeleteBinFill className="h-[28px]" onClick={removeItemHandler} />
          </button>
          <p className="text-[11px] md:hidden md:text-base font-semibold">
            N{price}
          </p>
        </div>
      </div>

      <div className="flex space-x-1">
        {removeItem && (
          <CartRemoveWarning
            removeCart={removeCart}
            cancelHandler={cancelHandler}
          />
        )}
        <button
          className="text-base font-semibold outline-none"
          onClick={reduceCart}
        >
          -
        </button>
        <span className="flex items-center justify-center border bg-opacity-55 w-8 h-8">
          {quantity}
        </span>
        <button
          className="text-base font-semibold outline-none"
          onClick={addCart}
        >
          +
        </button>
      </div>

      <p className="hidden md:block text-base font-semibold">N{price}</p>

      <p className="hidden md:block text-base font-semibold">N{totalPrice}</p>
    </div>
  );
}

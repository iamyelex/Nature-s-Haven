import { useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";

export default function CartItem({ label, price, total, image }) {
  const [count, setCount] = useState(1);

  const increaseUnitHandle = function () {
    setCount(count + 1);
  };

  const decreaseUnitHandle = function () {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    // <div className="flex items-center justify-between w-[50%] font-inter">
    <div className="flex items-center justify-between font-inter md:py-2">
      <div className="flex items-end space-x-2 md:space-x-4">
        <img
          src={image}
          alt={label}
          className="w-[96px] h-[75px] md:w-[171px] md:h-[134px]"
        />
        <div className="flex flex-col">
          <p className="text-[11px] md:text-base font-normal md:w-36">
            {label} <br />
            100g
          </p>
          <button>
            <RiDeleteBinFill className="h-[28px]" />
          </button>
          <p className="text-[11px] md:hidden md:text-base font-semibold">
            N{price}
          </p>
        </div>
      </div>

      <div className="flex space-x-1">
        <button
          className="text-base font-semibold outline-none"
          onClick={decreaseUnitHandle}
        >
          -
        </button>
        <span className="flex items-center justify-center border bg-opacity-55 w-8 h-8">
          {count}
        </span>
        <button
          className="text-base font-semibold outline-none"
          onClick={increaseUnitHandle}
        >
          +
        </button>
      </div>

      <p className="hidden md:block text-base font-semibold">N{price}</p>

      <p className="hidden md:block text-base font-semibold">N{total}</p>
    </div>
  );
}
